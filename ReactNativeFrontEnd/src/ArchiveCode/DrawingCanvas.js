import React, { useState } from "react";
import { View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import { Canvas, Path } from "@shopify/react-native-skia";

export default function DrawingCanvas() {
  const [paths, setPaths] = useState([]);

  const pan = Gesture.Pan()
    .onStart((g) => {
      setPaths((prevPaths) => [
        ...prevPaths,
        {
          segments: [`M ${g.x} ${g.y}`],
          color: "#06d6a0",
        },
      ]);
    })
    .onUpdate((g) => {
      setPaths((prevPaths) => {
        const index = prevPaths.length - 1;
        if (prevPaths[index]?.segments) {
          prevPaths[index].segments.push(`L ${g.x} ${g.y}`);
        }
        return [...prevPaths];
      });
    })
    .minDistance(1);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={pan}>
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <Canvas style={{ flex: 8 }}>
            {paths.map((p, index) => (
              <Path
                key={index}
                path={p.segments.join(" ")}
                strokeWidth={5}
                style="stroke"
                color={p.color}
              />
            ))}
          </Canvas>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
// import React, { useState } from "react";
// import { View } from "react-native";
// import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
// import { Canvas, Path } from "@shopify/react-native-skia";
// import _ from "lodash"; // Import lodash for throttling

// export default function DrawingCanvas() {
//   const [paths, setPaths] = useState([]);
//   const [currentPath, setCurrentPath] = useState({ segments: [], color: "#06d6a0" });

//   const updatePath = (x, y) => {
//     setCurrentPath((prevPath) => {
//       const newPath = { ...prevPath };
//       newPath.segments.push(`L ${x} ${y}`);
//       return newPath;
//     });
//   };

//   const throttledUpdatePath = _.throttle(updatePath, 16); // Adjust the delay as needed

//   const pan = Gesture.Pan()
//     .onStart((g) => {
//       setCurrentPath({ segments: [`M ${g.x} ${g.y}`], color: "#06d6a0" });
//     })
//     .onUpdate((g) => {
//       throttledUpdatePath(g.x, g.y);
//     })
//     .minDistance(1);

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <GestureDetector gesture={pan}>
//         <View style={{ flex: 1, backgroundColor: "black" }}>
//           <Canvas style={{ flex: 8 }}>
//             {paths.map((p, index) => (
//               <Path
//                 key={index}
//                 path={p.segments.join(" ")}
//                 strokeWidth={5}
//                 style="stroke"
//                 color={p.color}
//               />
//             ))}
//             <Path
//               path={currentPath.segments.join(" ")}
//               strokeWidth={5}
//               style="stroke"
//               color={currentPath.color}
//             />
//           </Canvas>
//         </View>
//       </GestureDetector>
//     </GestureHandlerRootView>
//   );
// }
