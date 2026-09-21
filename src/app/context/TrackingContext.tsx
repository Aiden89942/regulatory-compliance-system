import { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';

export interface TrackedCompany {
  id: string;
  name: string;
  taxId: string;
  address: string;
  phone: string;
  latestRisk: string;
  addedAt: Date;
}

interface TrackingContextType {
  trackedCompanies: TrackedCompany[];
  trackingCount: number;
  addTracking: (company: Omit<TrackedCompany, 'id' | 'addedAt'>) => void;
  removeTracking: (id: string) => void;
  removeTrackingByTaxId: (taxId: string) => void;
  isTracked: (taxId: string) => boolean;
  showTrackingNotification: boolean;
  setShowTrackingNotification: (show: boolean) => void;
}

const TrackingContext = createContext<TrackingContextType | undefined>(undefined);

export function TrackingProvider({ children }: { children: ReactNode }) {
  const [trackedCompanies, setTrackedCompanies] = useState<TrackedCompany[]>([]);
  const [showTrackingNotification, setShowTrackingNotification] = useState(false);
  const idCounterRef = useRef(0);

  // 从 localStorage 加载追踪数据
  useEffect(() => {
    const stored = localStorage.getItem('trackedCompanies');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setTrackedCompanies(parsed.map((c: any) => ({
          ...c,
          addedAt: new Date(c.addedAt)
        })));
      } catch (e) {
        console.error('Failed to parse tracked companies:', e);
      }
    }
  }, []);

  // 保存到 localStorage
  useEffect(() => {
    if (trackedCompanies.length > 0) {
      localStorage.setItem('trackedCompanies', JSON.stringify(trackedCompanies));
    }
  }, [trackedCompanies]);

  const addTracking = (company: Omit<TrackedCompany, 'id' | 'addedAt'>) => {
    // 使用時間戳 + 計數器確保 ID 唯一
    const timestamp = Date.now();
    const uniqueId = `${timestamp}-${idCounterRef.current++}`;
    
    const newCompany: TrackedCompany = {
      ...company,
      id: uniqueId,
      addedAt: new Date()
    };
    setTrackedCompanies(prev => [...prev, newCompany]);
  };

  const removeTracking = (id: string) => {
    setTrackedCompanies(prev => prev.filter(c => c.id !== id));
  };

  const removeTrackingByTaxId = (taxId: string) => {
    setTrackedCompanies(prev => prev.filter(c => c.taxId !== taxId));
  };

  const isTracked = (taxId: string) => {
    return trackedCompanies.some(c => c.taxId === taxId);
  };

  return (
    <TrackingContext.Provider
      value={{
        trackedCompanies,
        trackingCount: trackedCompanies.length,
        addTracking,
        removeTracking,
        removeTrackingByTaxId,
        isTracked,
        showTrackingNotification,
        setShowTrackingNotification
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
}

export function useTracking() {
  const context = useContext(TrackingContext);
  if (context === undefined) {
    throw new Error('useTracking must be used within a TrackingProvider');
  }
  return context;
}