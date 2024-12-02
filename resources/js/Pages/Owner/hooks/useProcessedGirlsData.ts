import { useRespondentStore } from '@/Pages/Respondent/store';
import { AnswerHistoryType, GirlType, MatchType } from '@/Pages/Respondent/types';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { usePage } from '@inertiajs/react';
import { useMemo } from 'react';

interface Props {
  answerHistories: AnswerHistoryType[];
}

interface GirlsResponse {
  girlsData: GirlType[];
}

interface ErrorResponse {
  message: string;
}

// カスタムフックの実装
const useProcessedGirlsData = ({ answerHistories }: Props) => {
  const { url } = usePage();
  const { id } = useRespondentStore((state) => state.currentQuestionnarie);


  const fetchGirlsData = async (): Promise<GirlType[]> => {
    const baseUrl = window.location.origin;
    const res: AxiosResponse<GirlsResponse> = await axios.get(`${baseUrl}${url}/cityheaven`);
    return res.data.girlsData;
  };

  // データ加工関数
  const processGirlsData = (girlsData: GirlType[]): GirlType[] => {

    // 回答結果から選択されたセールスポイントを抽出（重複あり）
    const selectedSalesPointList = answerHistories.reduce((accu: string[], curr: AnswerHistoryType) => {
      return [...accu, ...curr.salesPointNos];
    }, []);

    // 選択されたセールスポイント（重複なし）
    const selectedSalesPointCollection = new Set(selectedSalesPointList);

    const girlsDataWithPoint = girlsData.map((girl) => {

      // 選択されたセールスポイントのうち一致した女の子のセールスポイントの数取得
      const matchSalesPointNum = girl.salespoint_ids.filter(x => selectedSalesPointCollection.has(x)).length;

      let matchType: MatchType = 'NOTHING';

      // 選択されたセールスポイントが0ならNOTHINGで返す
      if (selectedSalesPointCollection.size === 0) {
        return { ...girl, matchSalesPointNum, matchType };
      }

      // マッチしたセールスポイント数が、選択されたセールスポイント数と同じ => ALL
      // マッチしたセールスポイント数が、0より多く完全一致未満 => PART
      // マッチしたセールスポイント数が0 => NOTHING
      if (matchSalesPointNum === selectedSalesPointCollection.size) {
        matchType = 'ALL';
      } else if (0 < matchSalesPointNum && matchSalesPointNum < selectedSalesPointCollection.size) {
        matchType = 'PART';
      } else {
        matchType = 'NOTHING';
      }
      return { ...girl, matchSalesPointNum, matchType };
    });


    // 女の子の表示順を制御
    girlsDataWithPoint.sort((a, b) => {

      // マッチングしたセールスポイント数が多い
      if (b.matchSalesPointNum !== a.matchSalesPointNum) {
        return b.matchSalesPointNum - a.matchSalesPointNum;
      }

      // 本日出勤
      if (b.today_work_flg !== a.today_work_flg) {
        return b.today_work_flg ? 1 : -1;
      }

      // 写メ日記の投稿有無
      if (b.diary_flg !== a.diary_flg) {
        return b.diary_flg ? 1 : -1;
      }

      // 口コミの有無
      if (b.review_flg !== a.review_flg) {
        return b.review_flg ? 1 : -1;
      }

      // 直近1週間以内の出勤数が多い
      return b.w_shukkin.filter(Boolean).length - a.w_shukkin.filter(Boolean).length;
    });

    return girlsDataWithPoint;
  };



  // TanStack Queryでデータを取得し、キャッシュ
  const { data: cachedGirlsData, isFetching, error }: UseQueryResult<GirlType[], AxiosError<ErrorResponse>> = useQuery({
    queryKey: [`RespondentGirlsData${id}`],
    queryFn: fetchGirlsData,
    staleTime: 1000 * 60 * 5, // キャッシュ時間を5分に設定
    retry: false,
  });

  // エラーメッセージの取得
  const errorMessage = error?.response?.data?.message;


  // キャッシュデータが存在する場合は加工したデータを返す
  const processedGirlsData = useMemo(() => {
    return cachedGirlsData ? processGirlsData(cachedGirlsData) : [];
  }, [cachedGirlsData, answerHistories]);

  return { processedGirlsData, isFetching, errorMessage };
};

export default useProcessedGirlsData;



// import { useRespondentStore } from '@/Pages/Respondent/store';
// import { AnswerHistoryType, GirlType } from '@/Pages/Respondent/types';
// import { useQuery, UseQueryResult } from '@tanstack/react-query';
// import axios, { AxiosError, AxiosResponse } from 'axios';
// import { usePage } from '@inertiajs/react';
// import { useMemo } from 'react';

// interface Props {
//   answerHistories: AnswerHistoryType[];
// }

// interface GirlsResponse {
//   girlsData: GirlType[];
// }

// interface ErrorResponse {
//   message: string;
// }

// // カスタムフックの実装
// const useProcessedGirlsData = ({ answerHistories }: Props) => {
//   const { url } = usePage();
//   const { id } = useRespondentStore((state) => state.currentQuestionnarie);

//   const fetchGirlsData = async (): Promise<GirlType[]> => {
//     const baseUrl = window.location.origin;
//     const res: AxiosResponse<GirlsResponse> = await axios.get(`${baseUrl}${url}/cityheaven`);
//     return res.data.girlsData;
//   };

//   // データ加工関数
//   const processGirlsData = (girlsData: GirlType[]): GirlType[] => {

//     const score: { [key: string]: number } = {};

//     console.log(answerHistories);

//     const selectedSalesPointList = answerHistories.reduce((accu: string[], curr: AnswerHistoryType) => {
//       return [...accu, ...curr.salesPointNos];
//     }, []);

//     const selectedSalesPointCollection = new Set(selectedSalesPointList);

//     const girlsDataWithPoint = girlsData.map((girl) => {

//       // 選択されたセールスポイントのうち一致した女の子のセールスポイントの数取得
//       const matchSalesPointNum = girl.salespoint_ids.filter(x => selectedSalesPointCollection.has(x)).length;

//       // 女の子のセールスポイントを集合に変換。後続の部分集合のチェックで使用
//       const girlSalesPointCollection = new Set(girl.salespoint_ids.filter(x => x !== null));

//       // 選択されたセールスポイントを全て含んでいるかどうか（部分集合チェック）
//       // A.isSubsetOf(B)：AはBに含まれる→true
//       const isContainAll = selectedSalesPointCollection.isSubsetOf(girlSalesPointCollection);

//       return { ...girl, matchSalesPointNum, isContainAll };
//     });


//     // 女の子の表示順を制御
//     girlsDataWithPoint.sort((a, b) => {

//       // // 選択されたセールスポイントを全て含む
//       // if (b.isContainAll !== a.isContainAll) {
//       //   return b.isContainAll ? 1 : -1;
//       // }

//       // マッチングしたセールスポイント数が多い
//       if (b.matchSalesPointNum !== a.matchSalesPointNum) {
//         return b.matchSalesPointNum - a.matchSalesPointNum;
//       }

//       // 本日出勤している
//       if (b.today_work_flg !== a.today_work_flg) {
//         return b.today_work_flg ? 1 : -1;
//       }

//       // 写メ日記を投稿している
//       return b.diary_flg ? 1 : -1;

//       // // 写メ日記を投稿している
//       // if (b.diary_flg !== a.diary_flg) {
//       //   return b.diary_flg ? 1 : -1;
//       // }

//       // // レビューの有無
//       // if (b.review_flg !== a.review_flg) {
//       //   return b.review_flg ? 1 : -1;
//       // }

//       // // 直近1週間以内の出勤数
//       // return b.w_shukkin.filter(Boolean).length - a.w_shukkin.filter(Boolean).length;
//     });

//     return girlsDataWithPoint;
//   };



//   // TanStack Queryでデータを取得し、キャッシュ
//   const { data: cachedGirlsData, isFetching, error }: UseQueryResult<GirlType[], AxiosError<ErrorResponse>> = useQuery({
//     queryKey: [`RespondentGirlsData${id}`],
//     queryFn: fetchGirlsData,
//     staleTime: 1000 * 60 * 5, // キャッシュ時間を5分に設定
//     retry: false,
//   });

//   // エラーメッセージの取得
//   const errorMessage = error?.response?.data?.message;


//   // キャッシュデータが存在する場合は加工したデータを返す
//   const processedGirlsData = useMemo(() => {
//     return cachedGirlsData ? processGirlsData(cachedGirlsData) : [];
//   }, [cachedGirlsData, answerHistories]);

//   return { processedGirlsData, isFetching, errorMessage };
// };

// export default useProcessedGirlsData;


