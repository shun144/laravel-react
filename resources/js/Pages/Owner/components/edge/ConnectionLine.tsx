// import React from 'react';
// import { useConnection, ConnectionLineComponentProps } from '@xyflow/react';

// export default ({ fromX, fromY, toX, toY }: ConnectionLineComponentProps) => {
//   const { fromHandle } = useConnection();

//   return (
//     <g>
//       <path
//         fill="none"
//         stroke={fromHandle?.id}
//         strokeWidth={1.5}
//         className="animated"
//         d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
//       />
//       <circle
//         cx={toX}
//         cy={toY}
//         fill="#fff"
//         r={3}
//         stroke={fromHandle.id}
//         strokeWidth={1.5}
//       />
//     </g>
//   );
// };
