import { SalsPointType } from '@/Pages/Owner/types';

// アンケート回答履歴
export type AnswerHistoryType = {
  id: string;
  question: string;
  answer: string;
  salesPointNos: string[];
}

// 選択肢
type ChoiceType = {
  id: string;
  content: string;
  salesPoints: SalsPointType[];
  nextId?: string;
}

// 質問
export type QuestionType = {
  id: string;
  topic: string;
  choices: ChoiceType[];
  category: 'question' | 'result' | 'none';
}

// 回答
export type ResultType = {
  id: string;
  result: string;
  message?: string;
  img?: string;
  url?: string;
  category: 'question' | 'result' | 'none';
}


// アンケート
export type QuestionnarieType = (QuestionType | ResultType);


// アンケートzustand用の型
export type QuestionnaireState = {
  isLoading: boolean;
  questionnarieDatas: QuestionnarieType[];
  currentQuestionnarie: QuestionnarieType;
  answerHistories: AnswerHistoryType[];
  baseGirlDataList: GirlType[];
  firstQuestionId: string;

  setIsLoading: (by: boolean) => void;
  setQuestionnarieDatas: (datas: QuestionnarieType[]) => void;
  setCurrentQuestionnarie: (id?: string) => void;
  setAnswerHistories: (id: string, question: string, answer: string, salesPoints: SalsPointType[]) => void;

  setBaseGirlDataList: (by: GirlType[]) => void;
  setFirstQuestionId: (by: string) => void,

  reset: () => void;

  /**
   * 現在の診断を1つ前の状態に戻し、最後の回答履歴を削除する
   * @returns 
   */
  backStep: () => void;
};


export type DbQuestionType = {
  id: string;
  dragHandle: string;
  dragging: boolean;
  measured: { width: number; height: number };
  position: { x: number; y: number };
  selected: boolean;
  type: string;
  data: {
    topic: string;
    choices: {
      id: string;
      content: string;
      salePoints: SalsPointType[];
    }[]
  }
}

export type DbResultType = {
  id: string;
  dragHandle: string;
  dragging: boolean;
  measured: { width: number; height: number };
  position: { x: number; y: number };
  selected: boolean;
  type: string;
  data: { result: string; message?: string; img?: string; url?: string }
}

export type DbEdgeType = {
  id: string;
  source: string;
  sourceHandle: string;
  target: string;
  targetHandle: string;
  type: string;
}


export type MatchType = 'ALL' | 'PART' | 'NOTHING';

export type GirlType = {
  id: string;
  name: string;
  catchphrase: string | string[];
  age: string;
  height: string;
  cup: string;
  diary_flg: boolean;
  review_flg: boolean;
  picture_url: string;
  mypage_url: string;
  // 3サイズ
  bwh: string[];
  yoyaku_url: string;
  // 本日出勤フラグ
  today_work_flg: boolean;
  // 直近1週間の出勤予定
  w_shukkin: string[];
  // セールスポイント
  salespoint_ids: string[];
  // earn_point: number;
  matchSalesPointNum: number;

  // 選択されたマッチング
  matchType: MatchType
  // // 選択されたセールスポイントを全て含むか
  // isContainAll: boolean;
}


