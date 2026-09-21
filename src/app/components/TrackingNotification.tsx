import { useEffect } from 'react';
import TrackedBadge from '@/imports/Frame1171276135';
import { useTracking } from '../context/TrackingContext';

export default function TrackingNotification() {
  const { showTrackingNotification, setShowTrackingNotification } = useTracking();

  useEffect(() => {
    if (showTrackingNotification) {
      const timer = setTimeout(() => {
        setShowTrackingNotification(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showTrackingNotification, setShowTrackingNotification]);

  if (!showTrackingNotification) return null;

  return (
    <div 
      className="fixed left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-300"
      style={{ 
        top: '130px' // header下方30px
      }}
    >
      <TrackedBadge />
    </div>
  );
}