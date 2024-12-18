import { useState, useCallback, useEffect, useMemo, useRef, memo } from "react";
import { getNewId } from "../../utils";
import { useOwnerStore } from "../../store";
import CityHeavenQuestionNode from "./CityHeavenQuestionNode";
import CityHeavenResultNode from "./CityHeavenResultNode";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Draggable from "../../components/dnd/Draggable";
import Droppable from "../../components/dnd/Droppable";
import {
    ReactFlow,
    Node,
    Edge,
    Connection,
    addEdge,
    reconnectEdge,
    useReactFlow,
    Panel,
    ReactFlowInstance,
    Controls,
    Background,
    SmoothStepEdge,
    BackgroundVariant,
    ConnectionLineType,
    MarkerType,
    OnNodesChange,
    OnEdgesChange,
    applyNodeChanges,
    applyEdgeChanges,
    SelectionMode,
    type Viewport,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "../../../../../css/owner/flow.css";
import "react-contexify/dist/ReactContexify.css";
import { router, usePage } from "@inertiajs/react";
import { questionNodeMaxNum, resultNodeMaxNum } from "@/Pages/Owner/constants";

type Props = {
    initialNodes: Node[];
    initialEdges: Edge[];
    defaultViewport: Viewport;
};

const CityHeavenFlow = ({
    initialNodes,
    initialEdges,
    defaultViewport,
}: Props) => {
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);
    const edgeReconnSuccess = useRef(true);

    const isDirty = useOwnerStore((state) => state.isDirty);
    const setIsDirty = useOwnerStore((state) => state.setIsDirty);
    const setFirstNodeId = useOwnerStore((state) => state.setFirstNodeId);

    const qNodeNum = useOwnerStore((state) => state.qNodeNum);
    const setQnodeNum = useOwnerStore((state) => state.setQnodeNum);
    const addQnodeNum = useOwnerStore((state) => state.addQnodeNum);

    const rNodeNum = useOwnerStore((state) => state.rNodeNum);
    const setRnodeNum = useOwnerStore((state) => state.setRnodeNum);
    const addRnodeNum = useOwnerStore((state) => state.addRnodeNum);

    const { screenToFlowPosition, addNodes, setViewport, getNodes } =
        useReactFlow();
    const { url: currentUrl } = usePage();

    const nodeTypes = useMemo(
        () => ({
            qNode: CityHeavenQuestionNode,
            rNode: CityHeavenResultNode,
        }),
        []
    );

    useEffect(() => {
        setQnodeNum(initialNodes.filter((x) => x.type === "qNode").length);
        setRnodeNum(initialNodes.filter((x) => x.type === "rNode").length);
    }, []);

    useEffect(() => {
        const beforeUnloadConfirm = router.on("before", (event) => {
            const vist = event.detail.visit;

            // 保存のリクエストは現在のクエリパラメータでpost送信する
            // 保存を行う際にページ離脱前確認メッセージを出さないようにする
            if (vist.url.pathname === currentUrl && vist.method === "post") {
                return true;
            }

            if (isDirty) {
                return confirm(
                    "変更が保存されていませんがページを離れてもよろしいですか？"
                );
            } else {
                return true;
            }
        });
        return () => {
            beforeUnloadConfirm();
        };
    }, [isDirty]);

    const onNodesChange: OnNodesChange = useCallback(
        (changes) => {
            setNodes((nds) => applyNodeChanges(changes, nds));
            setIsDirty(true);
        },
        [setNodes, setIsDirty]
    );

    const onEdgesChange: OnEdgesChange = useCallback(
        (changes) => {
            setEdges((oldEdges) => applyEdgeChanges(changes, oldEdges));
            setIsDirty(true);
        },
        [setEdges, setIsDirty]
    );

    const onAddQuestion = (position: { x: number; y: number }) => {
        const newQuestionNo = getNewId();
        const newChoiceNo = getNewId();

        // 既存の質問ノードが0個の場合、追加した質問ノードをアンケートの最初の質問にする
        if (getNodes().filter((x) => x.type === "qNode").length === 0) {
            setFirstNodeId(newQuestionNo);
        }

        addNodes({
            id: newQuestionNo,
            data: {
                topic: "",
                choices: [{ id: newChoiceNo, content: "", salePoints: [] }],
            },
            position,
            type: "qNode",
            dragHandle: ".dhandle",
        });

        addQnodeNum(1);
    };

    // 結果ノード追加
    const onAddResult = (position: { x: number; y: number }) => {
        const newId = getNewId();
        addNodes({
            id: newId,
            data: { result: "" },
            position,
            type: "rNode",
            dragHandle: ".dhandle",
        });
        addRnodeNum(1);
    };

    const handleDragEnd = useCallback(
        ({ active, over, delta, activatorEvent }: DragEndEvent) => {
            // フロー作成エリア以外にドロップしたら何もしない
            if (over == null || over.id != "droppableArea") {
                return;
            }
            // activatorEventがMouseEventの場合に処理を進める
            // イベントが他の入力デバイス（例えばタッチデバイス）でも安全に動作すする
            if (activatorEvent instanceof MouseEvent) {
                const absoluteX = activatorEvent.pageX + delta.x;
                const absoluteY = activatorEvent.pageY + delta.y;

                // デフォルトだとノードが作成される位置が、
                // ドロップした位置のやや右下になるため微調整
                const offset = {
                    x: 30,
                    y: 20,
                };

                // ブラウザ上の絶対座標をreactFlow上の座標に変換する
                const position = screenToFlowPosition({
                    x: absoluteX - offset.x,
                    y: absoluteY - offset.y,
                });

                if (active.id === "draggable-question") {
                    onAddQuestion(position);
                }

                if (active.id === "draggable-result") {
                    onAddResult(position);
                }
            }
        },
        []
    );

    // edgeの再接続時イベント
    const onReconnect = useCallback((oldEdge: Edge, newConn: Connection) => {
        // 自分自身に接続できないようにする
        if (
            oldEdge.source === newConn.target ||
            newConn.source === oldEdge.target
        ) {
            return;
        }

        edgeReconnSuccess.current = true;
        setEdges((eds) => reconnectEdge(oldEdge, newConn, eds));
    }, []);

    // edgeの再接続開始時イベント
    const onReconnectStart = useCallback(() => {
        edgeReconnSuccess.current = false;
    }, []);

    const onReconnectEnd = useCallback((edge: Edge) => {
        if (!edgeReconnSuccess.current) {
            setEdges((eds) => eds.filter((ed) => ed.id !== edge.id));
        }
        edgeReconnSuccess.current = true;
    }, []);

    const onConnect = useCallback(
        (params: Connection | Edge) => {
            // 自分自身に接続できないようにする
            if (params.source === params.target) {
                return;
            }

            setEdges((eds) => addEdge({ ...params, type: "smoothstep" }, eds));
        },
        [setEdges]
    );

    const handleEdgeClick = useCallback(
        (event: React.MouseEvent, edge: Edge) => {
            setEdges((eds) =>
                eds.map((e) => {
                    if (e.id === edge.id) {
                        return {
                            ...e,
                            animated: !e.animated,
                            style: e.animated
                                ? { stroke: "gray", strokeWidth: 2 }
                                : { stroke: "gold", strokeWidth: 3 },
                        };
                    } else {
                        return {
                            ...e,
                            animated: false,
                            style: {},
                        };
                    }
                })
            );
        },
        [setEdges]
    );

    const handleEdgeContextMenu = useCallback(
        (event: React.MouseEvent, edge: Edge) => {
            event.preventDefault();
            setEdges((eds) => eds.filter((e) => e.id !== edge.id));
        },
        [setEdges]
    );

    return (
        <div className="grow w-full flex">
            <DndContext onDragEnd={handleDragEnd}>
                <div className="h-full w-[5%] flex items-center flex-col gap-y-10 pt-12 bg-slate-800">
                    <Draggable
                        id="draggable-question"
                        label="質問"
                        color="indigo"
                        nodeNum={qNodeNum}
                        maxNodeNum={questionNodeMaxNum}
                    />
                    <Draggable
                        id="draggable-result"
                        label="結果"
                        color="rose"
                        nodeNum={rNodeNum}
                        maxNodeNum={resultNodeMaxNum}
                    />
                </div>
                <Droppable id="droppableArea">
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        nodeTypes={nodeTypes}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        // fitView
                        // fitViewOptions={{ padding: 0.4 }}
                        snapToGrid
                        connectionLineType={ConnectionLineType.SmoothStep}
                        onReconnect={onReconnect}
                        onReconnectStart={onReconnectStart}
                        onReconnectEnd={(_, edge) => onReconnectEnd(edge)}
                        onConnect={onConnect}
                        onEdgeClick={handleEdgeClick}
                        onEdgeContextMenu={handleEdgeContextMenu}
                        elevateEdgesOnSelect={true}
                        defaultViewport={defaultViewport}
                        panOnScroll
                        elementsSelectable
                        // selectionOnDrag
                        // panOnDrag={[1, 2]}
                        // panOnDrag={true}
                        selectionMode={SelectionMode.Partial}
                    >
                        <Background
                            color="#222"
                            variant={BackgroundVariant.Lines}
                            gap={20}
                        />
                        <Controls />
                    </ReactFlow>
                </Droppable>
            </DndContext>
        </div>
    );
};

export default memo(CityHeavenFlow);
