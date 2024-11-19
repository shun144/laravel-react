import { useCallback, useEffect, useMemo, useState, MouseEvent, memo } from "react";
import { GirlType, ResultType } from '@/Pages/Respondent/types';
import { countUpAchievement, sanitizeText } from '@/Pages/Respondent/utils';
import { useRespondentStore } from '@/Pages/Respondent/store';
import ResponsivePagination from 'react-responsive-pagination';
import { usePage } from '@inertiajs/react';

type Props = {
  girlsData: GirlType[];
}
const peoplePerPage = 10;
const highLank = 3; // highLankに指定した順位までラベルの色を上位用にする

const GirlsView = ({ girlsData }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<GirlType[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  const { message } = useRespondentStore((state) => state.currentQuestionnarie as ResultType);
  const { url } = usePage();

  useEffect(() => {
    setTotalPages(Math.ceil(girlsData.length / peoplePerPage));
  }, [girlsData])

  useEffect(() => {
    setCurrentItems(girlsData.slice((currentPage - 1) * peoplePerPage, currentPage * peoplePerPage));
  }, [currentPage])


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  // 回答実績登録をしてから別タブへ画面遷移
  const handleClick = useCallback((
    e: MouseEvent<HTMLAnchorElement>,
    name: string,
    mypage_url: string
  ) => {
    e.preventDefault;

    // JSスキームXSS対策
    if (!mypage_url.match(/^https?:\/\//)) {
      return;
    }

    countUpAchievement(url, name);
    window.open(mypage_url, "_blank", "noopener,noreferrer");
  }, [])

  return (
    <>

      <div className='w-full flex flex-col justify-center items-center my-2 px-2 md:w-11/12 md:min-h-12' >
        <div className=' text-slate-600 font-semibold text-sm md:font-bold md:text-3xl md:py-8 whitespace-pre-wrap'>
          {message}
        </div>
      </div>

      {/* <div className='w-full flex flex-col justify-center items-center my-2 px-2 md:w-11/12 md:min-h-12 max-h-40' >
        <div
          className=' text-slate-600 font-semibold text-sm md:font-bold md:text-3xl md:py-8'
          dangerouslySetInnerHTML={sanitizeText(message as string)}
        />
      </div> */}

      <div className='w-full px-1 md:w-11/12'>
        <div className='grid mb-4 grid-cols-2 gap-x-3 gap-y-4
          md:mb-10 md:grid-cols-5 md:gap-x-6 md:gap-y-8'>
          {
            currentItems &&
            currentItems.map(({ id, name, catchphrase, w_shukkin, diary_flg, review_flg, earn_point, today_work_flg, picture_url, mypage_url, bwh, age, height, cup, isFullMatch }, idx) => (

              <div
                key={id}
                className="flex flex-col items-center bg-white border  border-gray-200 rounded-lg shadow relative 
                  pt-2 px-1
                  md:max-w-xl md:pt-4 md:px-2"
              >
                <div className='absolute -top-2 -left-1 md:-top-3 md:-left-3'>
                  <div className={`${idx + 1 + (currentPage - 1) * 10 <= highLank ? "bg-amber-400" : "bg-violet-300"} rounded-full shadow flex justify-center items-center border-2 md:border-4 border-slate-100 w-6 h-6 md:w-10 md:h-10`}>
                    <div className='text-white text-sm md:text-xl md:font-semibold'>{idx + 1 + (currentPage - 1) * 10}</div>
                  </div>
                </div>

                <div className='rounded-lg pb-2'>
                  <img className={`${idx + 1 + (currentPage - 1) * 10 <= highLank ? "border-yellow-200" : "border-violet-100"}  rounded-lg border-4 shadow-xl object-cover h-36 md:h-60`}
                    src={picture_url} alt={name} />
                </div>

                <div className="w-full flex flex-col justify-between leading-normal">
                  <div className="font-bold tracking-tight text-gray-900 text-md md:text-xl">
                    {`${name}(${age})`}
                  </div>
                  <div className="font-normal text-gray-700 pb-1 min-h-8 md:pb-2 md:min-h-12 ">
                    <div className='text-sm md:text-lg'>{catchphrase}</div>
                    <div className='text-sm md:text-md'>
                      {`【${height}cm / ${bwh[0]}(${cup}):${bwh[1]}:${bwh[2]}】`}
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center md:min-h-7 pb-1 md:pb-0">

                    <div className="text-white select-none px-1 md:px-2 rounded-lg bg-violet-400/75 ">
                      {isFullMatch ? "" : (<p className="text-[8px] md:text-sm py-1 md:py-0 ">こちらもオススメ女性</p>)}
                    </div>


                    {/* <div className="text-white select-none text-[8px] md:text-sm px-1 md:px-2 rounded-lg bg-violet-400/95 ">
                      {isFullMatch ? "" : "こちらもオススメ女性"}
                    </div> */}

                    <a className="block md:px-2 pb-1 md:pb-0 text-[13px] md:text-base underline text-violet-500  md:cursor-pointer md:trainstion-all md:duration-200 hover:text-violet-300"
                      onClick={(e) => handleClick(e, name, mypage_url)}
                    >女の子のマイページ
                    </a>
                  </div>



                </div>
              </div>
            ))
          }
        </div>

        <div className='w-full flex justify-center items-start h-14 mb-3 md:h-20 md:mb-4'>
          <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={handlePageChange}
            maxWidth={350}
            className="pagination select-none md:flex md:space-x-2"
          />
        </div>

      </div>
    </>
  )
}

export default memo(GirlsView)

// import { useCallback, useEffect, useMemo, useState, MouseEvent, memo } from "react";
// import { GirlType, ResultType } from '@/Pages/Respondent/types';
// import { countUpAchievement, sanitizeText } from '@/Pages/Respondent/utils';
// import { useRespondentStore } from '@/Pages/Respondent/store';
// import ResponsivePagination from 'react-responsive-pagination';
// import { usePage } from '@inertiajs/react';

// type Props = {
//   girlsData: GirlType[];
// }
// const peoplePerPage = 10;
// const highLank = 3; // highLankに指定した順位までラベルの色を上位用にする




// const GirlsView = ({ girlsData }: Props) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentItems, setCurrentItems] = useState<GirlType[]>([]);
//   const [totalPages, setTotalPages] = useState<number>(0);

//   const { message } = useRespondentStore((state) => state.currentQuestionnarie as ResultType);
//   const { url } = usePage();

//   useEffect(() => {
//     setTotalPages(Math.ceil(girlsData.length / peoplePerPage));
//   }, [girlsData])

//   useEffect(() => {
//     setCurrentItems(girlsData.slice((currentPage - 1) * peoplePerPage, currentPage * peoplePerPage));
//   }, [currentPage])


//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     window.scrollTo({
//       top: 0,
//       behavior: "instant",
//     });
//   }

//   // 回答実績登録をしてから別タブへ画面遷移
//   const handleClick = useCallback((
//     e: MouseEvent<HTMLAnchorElement>,
//     name: string,
//     mypage_url: string
//   ) => {
//     e.preventDefault;

//     // JSスキームXSS対策
//     if (!mypage_url.match(/^https?:\/\//)) {
//       return;
//     }

//     countUpAchievement(url, name);
//     window.open(mypage_url, "_blank", "noopener,noreferrer");
//   }, [])

//   return (
//     <>

//       <div className='w-full flex flex-col justify-center items-center my-2 px-2 md:w-11/12 md:min-h-12 max-h-40' >
//         <div className=' text-slate-600 font-semibold text-sm md:font-bold md:text-3xl md:py-8 whitespace-pre-wrap'>
//           {message}
//         </div>
//       </div>

//       {/* <div className='w-full flex flex-col justify-center items-center my-2 px-2 md:w-11/12 md:min-h-12 max-h-40' >
//         <div
//           className=' text-slate-600 font-semibold text-sm md:font-bold md:text-3xl md:py-8'
//           dangerouslySetInnerHTML={sanitizeText(message as string)}
//         />
//       </div> */}

//       <div className='w-full px-1 md:w-11/12'>
//         <div className='grid mb-4 grid-cols-2 gap-x-3 gap-y-4
//           md:mb-10 md:grid-cols-5 md:gap-x-6 md:gap-y-8'>
//           {
//             currentItems &&
//             currentItems.map(({ id, name, catchphrase, w_shukkin, diary_flg, review_flg, earn_point, today_work_flg, picture_url, mypage_url, bwh, age, height, cup }, idx) => (

//               <div
//                 key={id}
//                 className="flex flex-col items-center bg-white border  border-gray-200 rounded-lg shadow relative
//                   pt-2 px-1
//                   md:max-w-xl md:pt-4 md:px-2"
//               >
//                 <div className='absolute -top-2 -left-1 md:-top-3 md:-left-3'>
//                   <div className={`${idx + 1 + (currentPage - 1) * 10 <= highLank ? "bg-amber-400" : "bg-violet-300"} rounded-full shadow flex justify-center items-center border-2 md:border-4 border-slate-100 w-6 h-6 md:w-10 md:h-10`}>
//                     <div className='text-white text-sm md:text-xl md:font-semibold'>{idx + 1 + (currentPage - 1) * 10}</div>
//                   </div>
//                 </div>

//                 <div className='rounded-lg pb-2'>
//                   <img className={`${idx + 1 + (currentPage - 1) * 10 <= highLank ? "border-yellow-200" : "border-violet-100"}  rounded-lg border-4 shadow-xl object-cover h-36 md:h-60`}
//                     src={picture_url} alt={name} />
//                 </div>

//                 <div className="w-full flex flex-col justify-between leading-normal">
//                   <div className="font-bold tracking-tight text-gray-900 text-md md:text-xl">
//                     {`${name}(${age})`}
//                   </div>
//                   <div className="font-normal text-gray-700 pb-1 min-h-8 md:pb-2 md:min-h-12 ">
//                     <div className='text-sm md:text-lg'>{catchphrase}</div>
//                     <div className='text-sm md:text-md'>
//                       {`【${height}cm / ${bwh[0]}(${cup}):${bwh[1]}:${bwh[2]}】`}
//                       {/* {`(B:${bwh[0]} W:${bwh[1]} H:${bwh[2]} 身長:${height} カップ:${cup})`} */}
//                     </div>
//                   </div>

//                   <div className="w-full flex justify-end items-center md:min-h-7">
//                     <a className="block px-2 py-2 underline text-end text-violet-500 text-sm md:text-md md:cursor-pointer md:trainstion-all md:duration-200 hover:text-violet-300"
//                       onClick={(e) => handleClick(e, name, mypage_url)}
//                     >女の子のマイページ
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))
//           }
//         </div>

//         <div className='w-full flex justify-center items-start h-14 mb-3 md:h-20 md:mb-4'>
//           <ResponsivePagination
//             current={currentPage}
//             total={totalPages}
//             onPageChange={handlePageChange}
//             maxWidth={350}
//             className="pagination select-none md:flex md:space-x-2"
//           />
//         </div>

//       </div>
//     </>
//   )
// }

// export default memo(GirlsView)