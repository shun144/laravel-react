import { memo, useEffect, useRef, useState } from "react";
import { ResultType } from "@/Pages/Respondent/types";
import { countUpAchievement } from "@/Pages/Respondent/utils";
import { useRespondentStore } from "@/Pages/Respondent/store";
import { MdOutlineRestartAlt } from "react-icons/md";
import StandardResultBg from "./StandardResultBg";
import "react-responsive-pagination/themes/classic.css";
import "./standardResult.css";
import useCheckOverHight from "@/Pages/Respondent/hooks/useCheckOverHight";

const StandardResult = () => {
    const { refCheckOverHeight: refResult, isOverHeight: isResultOverHeight } =
        useCheckOverHight();
    const { refCheckOverHeight: refMsg, isOverHeight: isMsgOverHeight } =
        useCheckOverHight();

    const reset = useRespondentStore((state) => state.reset);
    const currentQuestionnarie = useRespondentStore(
        (state) => state.currentQuestionnarie
    );

    useEffect(() => {
        // 回答実績登録
        const currentPathname = window.location.pathname;
        const result = (currentQuestionnarie as ResultType).result;
        countUpAchievement(currentPathname, result);
    }, []);

    return (
        <>
            <div className="h-full max-h-full w-full flex justify-center items-center overflow-hidden relative">
                <StandardResultBg />

                <div className="md:w-6/12 w-11/12 h-full flex flex-col justify-center items-center gap-y-4">
                    <div className="w-full text-center flex justify-center items-center z-50">
                        <div className="md:text-4xl text-xl text-violet-400/80 font-bold  select-none ">
                            診 断 結 果
                        </div>
                    </div>

                    <div className="w-full bg-white/40 rounded-lg shadow-sm backdrop-blur-[4px] flex flex-col justify-center items-center px-6">
                        <div
                            className={`w-full overflow-y-auto mt-3 md:mt-6 flex ${
                                isResultOverHeight
                                    ? "items-start"
                                    : "items-center"
                            }`}
                            ref={refResult}
                        >
                            <div className="whitespace-pre-wrap w-full text-base md:text-3xl min-h-12 text-slate-700 font-semibold flex justify-center break-all">
                                {(currentQuestionnarie as ResultType).result}
                            </div>
                        </div>

                        <div className="w-full border-b-2 border-violet-600/20 my-3 md:my-6" />

                        <div
                            className={`w-full overflow-y-auto mb-3 md:mb-6 flex ${
                                isMsgOverHeight ? "items-start" : "items-center"
                            }`}
                            ref={refMsg}
                        >
                            <div className="whitespace-pre-wrap  w-full text-base md:text-2xl min-h-20 text-slate-600 font-normal flex justify-center break-all">
                                {(currentQuestionnarie as ResultType).message}
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center z-50 mt-2">
                        <button
                            className="bg-violet-500 hover:bg-violet-600 text-white font-bold rounded flex justify-center items-center gap-1 shadow-2xl trasiton-all duration-200 text-sm py-2 px-2 md:text-xl md:px-3 z-50"
                            onClick={() => reset()}
                        >
                            <MdOutlineRestartAlt className="text-lg md:text-2xl" />
                            <p>もう一度最初から始める</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default memo(StandardResult);
