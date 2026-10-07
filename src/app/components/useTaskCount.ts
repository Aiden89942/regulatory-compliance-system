import { useAppContext } from '../context/AppContext';
import { useQuestionnaireReviews } from '../data/questionnaireReviewStore';
import { useQuestionnaireDrafts } from '../data/questionnaireDraftStore';
import { useDeficiencies } from '../data/deficiencyStore';
import { OVERVIEW_YEAR, useOverviewRows } from './QuestionnaireFillOverview';

/** 首頁「您今天有 N 筆任務待處理」：依目前帳號的專屬功能計算 */
export function useTaskCount(): number {
  const { currentUser } = useAppContext();
  const reviews = useQuestionnaireReviews();
  const drafts = useQuestionnaireDrafts();
  const deficiencies = useDeficiencies();
  const overview = useOverviewRows();

  switch (currentUser.role) {
    case 'assessor':
      return overview.filter((row) => row.tab === '填答中' || row.tab === '已逾期').length
        + deficiencies.filter((item) => item.status === '待回填').length;
    case 'maintainer':
      return drafts.filter((draft) => {
        if (!draft.reviewId) return true;
        return reviews.find((item) => item.id === draft.reviewId)?.status === '已退回';
      }).length;
    case 'reviewer':
      return reviews.filter((item) => item.status === '待審核').length;
    case 'sender':
      return reviews.filter((item) => item.status === '待發送').length;
    default:
      return 0;
  }
}

export { OVERVIEW_YEAR };
