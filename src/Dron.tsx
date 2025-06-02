import {Canvas} from "@react-three/fiber";
import {PresentationControls, Stage} from "@react-three/drei";
import {Suspense} from "react";
import {Model} from "./Model.tsx";


function Dron() {
    return (
        <Canvas style={{width: '100%', height: '70vh'}}>
            <fog attach="fog" args={["#2F4F4F", 10, 20]} />
            <PresentationControls speed={2} global>
                <Stage
                    shadows={false}
                    environment="city"
                    intensity={0.3}
                    castShadow={false}
                >
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>
                </Stage>
            </PresentationControls>

        </Canvas>
    );
}

export default Dron;