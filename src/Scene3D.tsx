import {Canvas} from "@react-three/fiber";
import { PresentationControls, Stage} from "@react-three/drei";
import {Suspense, useState} from "react";
// import {Model} from "./Model.tsx";
import {ModelDrone} from "./ModelDrone.tsx";
import type {CameraType, WingType} from "./types/drone.ts";


function Scene3D() {
    const [wingtype, setWingType] = useState<WingType>('double')
    const [cameraType, setCameraType] = useState<CameraType>(true)
    return (
        <>
            <div className='modelConfigurator'>

                <p>Модель крыльев:</p>
                    <div style={{"display": "flex", "justifyContent": "space-between"}}
                         onClick={() => setWingType("double")}>
                        <label htmlFor="double">Двойные</label>
                        <input id='double' type='checkbox' checked={wingtype === 'double'}/>
                    </div>
                    <div style={{"display": "flex", "justifyContent": "space-between"}}
                         onClick={() => setWingType("quadruples")}>
                        <label htmlFor="quadruples">Четверные</label>
                        <input id='quadruples' type='checkbox' checked={wingtype === 'quadruples'}/>
                    </div>


                <p>Модель камеры:</p>
                    <div style={{"display": "flex", "justifyContent": "space-between"}}
                         onClick={() => setCameraType(true)}>
                        <label htmlFor="withcamera">Есть</label>
                        <input id='withcamera' type='checkbox' checked={cameraType === true}/>
                    </div>
                    <div style={{"display": "flex", "justifyContent": "space-between"}}
                         onClick={() => setCameraType(false)}>
                        <label htmlFor="withoutcamera">Нет</label>
                        <input id='withoutcamera' type='checkbox' checked={cameraType === false}/>
                    </div>

            </div>

            <Canvas style={{width: '100%', height: '70vh'}}>
                <PresentationControls speed={2} global>

                    <Stage
                        shadows={false}
                        environment="city"
                        intensity={0.3}
                        castShadow={false}
                    >
                        <Suspense fallback={null}>
                            <ModelDrone wingtype={wingtype} cameratype={cameraType}/>
                        </Suspense>
                    </Stage>
                </PresentationControls>

            </Canvas>
        </>
    );
}

export default Scene3D;