import {Canvas} from "@react-three/fiber";
import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {PresentationControls, Stage} from "@react-three/drei";
import {Suspense} from "react";


function Dron() {
    const gltf = useLoader(GLTFLoader, 'src/assets/models/dron/scene.gltf')
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
                        <primitive object={gltf.scene}/>
                    </Suspense>
                </Stage>
            </PresentationControls>

        </Canvas>
    );
}

export default Dron;