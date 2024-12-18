import {
    useCallback,
    useEffect,
    useMemo,
    useState,
    MouseEvent,
    memo,
} from "react";
import { GirlType, ResultType } from "@/Pages/Respondent/types";
import { countUpAchievement, sanitizeText } from "@/Pages/Respondent/utils";
import { useRespondentStore } from "@/Pages/Respondent/store";
import ResponsivePagination from "react-responsive-pagination";
import { usePage } from "@inertiajs/react";

type Props = {
    girlsData: GirlType[];
};
const peoplePerPage = 10;
const highLank = 3; // highLankに指定した順位までラベルの色を上位用にする

const GirlsView = ({ girlsData }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState<GirlType[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);

    const { message } = useRespondentStore(
        (state) => state.currentQuestionnarie as ResultType
    );
    const { url } = usePage();

    useEffect(() => {
        // 合計ページ取得
        setTotalPages(Math.ceil(girlsData.length / peoplePerPage));
    }, [girlsData]);

    useEffect(() => {
        // ページ移動
        setCurrentItems(
            girlsData.slice(
                (currentPage - 1) * peoplePerPage,
                currentPage * peoplePerPage
            )
        );
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    };

    // 回答実績登録をしてから別タブへ画面遷移
    const handleClick = useCallback(
        (
            e: MouseEvent<HTMLButtonElement>,
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
        },
        []
    );

    return (
        <>
            <div className="w-full flex flex-col justify-center items-center my-2 px-2 md:w-11/12 md:min-h-12">
                <div className=" text-slate-600 font-semibold text-sm md:font-bold md:text-3xl md:py-8 whitespace-pre-wrap">
                    {message}
                </div>
            </div>

            <div className="w-full px-1 md:w-11/12">
                <div className="grid mb-4 grid-cols-2 gap-x-3 gap-y-4 md:mb-10 md:grid-cols-5 md:gap-x-6 md:gap-y-8">
                    {currentItems &&
                        currentItems.map(
                            (
                                {
                                    id,
                                    name,
                                    catchphrase,
                                    picture_url,
                                    mypage_url,
                                    bwh,
                                    age,
                                    height,
                                    cup,
                                    matchType,
                                },
                                idx
                            ) => (
                                <div key={id}>
                                    <div
                                        className={`select-none px-1 md:px-2 w-full flex justify-center items-center 
                                            ${
                                                matchType === "ALL"
                                                    ? "text-amber-500 font-bold"
                                                    : matchType === "PART"
                                                    ? "text-violet-500 font-bold"
                                                    : "text-violet-500"
                                            }`}
                                    >
                                        <div className="md:text-sm min-h-7 md:min-h-6 text-[8px] flex justify-center items-center">
                                            <div
                                                className="relative text-sm md:text-base
                                                            before:content-['|']  before:-rotate-30 before:absolute before:-top-0 before:-left-3
                                                            after:content-['|']  after:rotate-30 after:absolute after:-top-0 after:-right-3"
                                            >
                                                {matchType === "ALL"
                                                    ? "あなたにピッタリ"
                                                    : matchType === "PART"
                                                    ? "こちらもオススメ"
                                                    : "店長オススメ"}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-between bg-white border border-gray-200 rounded-lg shadow relative pt-0 px-1 md:max-w-xl md:pt-4 md:px-2 md:min-h-[400px] min-h-[300px]">
                                        {/* ランキングアイコン */}
                                        <div className="absolute -top-2 -left-1 md:-top-5 md:-left-3">
                                            <div
                                                className={`${
                                                    idx +
                                                        1 +
                                                        (currentPage - 1) *
                                                            10 <=
                                                    highLank
                                                        ? "bg-amber-400"
                                                        : "bg-violet-300"
                                                } rounded-full shadow flex justify-center items-center border-2 md:border-4 border-slate-100 w-6 h-6 md:w-10 md:h-10`}
                                            >
                                                <div className="text-white text-sm md:text-xl md:font-semibold">
                                                    {idx +
                                                        1 +
                                                        (currentPage - 1) * 10}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full flex flex-col items-center gap-y-2 pt-2">
                                            <div className="rounded-lg pb-2">
                                                <img
                                                    className={`${
                                                        idx +
                                                            1 +
                                                            (currentPage - 1) *
                                                                10 <=
                                                        highLank
                                                            ? "border-yellow-200"
                                                            : "border-violet-100"
                                                    }  rounded-lg border-4 shadow-xl object-cover h-36 md:h-60`}
                                                    src={picture_url}
                                                    alt={name}
                                                />
                                            </div>

                                            <div className="w-full flex flex-col justify-between leading-normal">
                                                {/* 名前と年齢 */}
                                                <div className="font-bold tracking-tight text-gray-900 text-md md:text-xl break-all overflow-hidden pb-2">
                                                    {`${name}(${age})`}
                                                </div>

                                                {/* キャッチフレーズと3サイズ */}
                                                <div className="font-normal text-gray-700 min-h-8 md:min-h-14">
                                                    {/* キャッチフレーズ */}
                                                    <div className="md:text-lg text-sm break-all">
                                                        {catchphrase}
                                                    </div>

                                                    {/* スリーサイズ */}
                                                    <div className="md:text-md text-sm mt-2">
                                                        {`【${height}cm / ${bwh[0]}(${cup}):${bwh[1]}:${bwh[2]}】`}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 女の子ページのリンクへ */}
                                        <div className="w-full flex flex-row justify-end items-end md:items-center md:mb-2 my-2">
                                            <button
                                                className="bg-violet-400 shadow-md  text-white rounded-lg hover:bg-violet-500 transition-all duration-200 text-[12px] px-2 py-1 md:text-base md:py-1"
                                                onClick={(e) =>
                                                    handleClick(
                                                        e,
                                                        name,
                                                        mypage_url
                                                    )
                                                }
                                            >
                                                女の子ページへ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                </div>

                {/* ページネーション */}
                <div className="w-full flex justify-center items-start h-14 mb-3 md:h-20 md:mb-4">
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
    );
};

export default memo(GirlsView);
