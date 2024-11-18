import { memo, useEffect, useRef, useState } from 'react'
import { ResultType } from '@/Pages/Respondent/types';
import { countUpAchievement } from '@/Pages/Respondent/utils';
import { useRespondentStore } from '@/Pages/Respondent/store';
import { MdOutlineRestartAlt } from "react-icons/md";
import StandardResultBg from './StandardResultBg';
import 'react-responsive-pagination/themes/classic.css';
import './standardResult.css';
import useCheckOverHight from '@/Pages/Respondent/hooks/useCheckOverHight'

const StandardResult = () => {

  const { refCheckOverHeight: refResult, isOverHeight: isResultOverHeight } = useCheckOverHight();
  const { refCheckOverHeight: refMsg, isOverHeight: isMsgOverHeight } = useCheckOverHight();

  // const answerHistories = useRespondentStore((state) => state.answerHistories);
  const reset = useRespondentStore((state) => state.reset);
  const currentQuestionnarie = useRespondentStore((state) => state.currentQuestionnarie);


  useEffect(() => {
    // 回答実績登録
    const currentPathname = window.location.pathname;
    const result = (currentQuestionnarie as ResultType).result;
    countUpAchievement(currentPathname, result);
  }, [])


  return (
    <>
      <div className='h-full max-h-full w-full flex justify-center items-center overflow-hidden relative'>

        <StandardResultBg />

        <div className='w-11/12 md:w-7/12 h-full flex flex-col justify-center items-center'>

          <div className='w-full h-[8%] md:h-[10%] text-center flex justify-center items-center z-50'>
            <div className='text-lg text-violet-400/80 font-bold text-md select-none md:text-4xl'>
              診 断 結 果
            </div>
          </div>

          <div className='w-full max-h-[82%] md:max-h-[80%] min-h-[40%] bg-white/40 rounded-lg shadow-sm backdrop-blur-[4px] flex flex-col justify-center items-center px-6'>

            <div
              className={`w-full h-2/6 max-h-2/6 min-h-2/6 overflow-y-auto mt-3 md:mt-6 flex ${isResultOverHeight ? "items-start" : "items-center"}`}
              ref={refResult}
            >
              <div className='whitespace-pre-wrap w-full text-base md:text-3xl text-slate-700 font-semibold flex justify-center break-all'>
                {(currentQuestionnarie as ResultType).result}
              </div>
            </div>

            <div className='w-full border-b-2 border-violet-600/20 my-3 md:my-6' />

            <div
              className={`w-full h-4/6 max-h-4/6 min-h-4/6 overflow-y-auto mb-3 md:mb-6 flex ${isMsgOverHeight ? "items-start" : "items-center"}`}
              ref={refMsg}
            >
              <div className='whitespace-pre-wrap  w-full text-base md:text-2xl text-slate-600 font-normal flex justify-center break-all'>
                {(currentQuestionnarie as ResultType).message}
              </div>
            </div>

          </div>

          <div className='w-full h-[10%] md:h-[10%] flex justify-center items-center z-50 mt-2'>
            <button
              className='bg-violet-500 hover:bg-violet-600 text-white font-bold rounded flex justify-center items-center gap-1 shadow-2xl trasiton-all duration-200 text-sm py-2 px-2 md:text-xl md:px-3 z-50'
              onClick={() => reset()} >
              <MdOutlineRestartAlt className='text-lg md:text-2xl' />
              <p>もう一度最初から始める</p>
            </button>
          </div>

        </div>
      </div >
    </>
  );
}
export default memo(StandardResult);



// import { memo, useEffect } from 'react'
// import { ResultType } from '../../types';
// import { countUpAchievement } from '../../utils';
// import { useRespondentStore } from '../../store';
// import { MdOutlineRestartAlt } from "react-icons/md";
// import 'react-responsive-pagination/themes/classic.css';
// import './standardResult.css';

// const StandardResult = () => {
//   // const answerHistories = useRespondentStore((state) => state.answerHistories);
//   const reset = useRespondentStore((state) => state.reset);
//   const currentQuestionnarie = useRespondentStore((state) => state.currentQuestionnarie);

//   // 回答実績登録
//   useEffect(() => {
//     const currentPathname = window.location.pathname;
//     const result = (currentQuestionnarie as ResultType).result;
//     countUpAchievement(currentPathname, result);
//   }, [])


//   return (
//     <>

//       <div className='h-full w-full flex flex-col justify-start items-center relative overflow-x-hidden'>

//         <div className='h-full w-11/12  md:w-6/12'>

//           <div
//             className="animate-slide top-0 bottom-0 -left-1/2 -right-1/2 opacity-50 absolute"
//             style={{
//               backgroundImage: "linear-gradient(-60deg, #f3e8ff 50%, #ddd6fe 50%)",
//               animationDuration: "83s"
//             }}
//           ></div>

//           <div
//             className="placeholder:animate-slide top-0 bottom-0 -left-1/2 -right-1/2 opacity-50 absolute"
//             style={{
//               backgroundImage: "linear-gradient(-65deg, #f3e8ff 50%, #ddd6fe 50%)",
//               animationDirection: "alternate-reverse",
//               animationDuration: "54s"
//             }}
//           ></div>

//           <div
//             className="animate-slide top-0 bottom-0 -left-1/2 -right-1/2 opacity-50 absolute"
//             style={{
//               backgroundImage: "linear-gradient(-76deg, #f3e8ff 50%, #ddd6fe 50%)",
//               animationDuration: "78s"
//             }}
//           ></div>

//           <div className='h-12 w-full flex justify-center items-center mt-2 mb-1 md:mt-12 md:mb-10'>
//             <div className='text-lg text-violet-400/80 font-bold text-md select-none z-50 md:text-4xl'>
//               診 断 結 果
//             </div>
//           </div>

//           <div className='h-96 w-full bg-white/40 rounded-lg shadow-sm border-2 border-white/40 backdrop-blur-[4px]
//           flex justify-start items-center flex-col px-2 py-2 md:px-4 md:py-4'>
//             <div className='h-[8rem] w-full flex justify-center items-center border-b-2 border-white/60 pb-4'>
//               <div className='text-base md:text-3xl text-slate-700 font-semibold z-50'>
//                 {(currentQuestionnarie as ResultType).result}
//               </div>
//             </div>

//             <div className='grow w-full  flex justify-center items-center'>
//               <div className='text-base md:text-2xl text-slate-600 font-normal z-50'>
//                 {(currentQuestionnarie as ResultType).message}
//               </div>
//             </div>
//           </div>

//           <div className="w-full flex justify-center items-center mt-6 mb-4 md:mt-10 md:mb-10">
//             <button
//               className='bg-violet-500 hover:bg-violet-600 text-white font-bold rounded flex justify-center items-center gap-1 shadow-2xl trasiton-all duration-200  text-sm py-2 px-2 md:text-xl md:px-3 z-50'
//               onClick={() => reset()} >
//               <MdOutlineRestartAlt className='text-2xl' />
//               <p>もう一度最初から始める</p>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default memo(StandardResult);

