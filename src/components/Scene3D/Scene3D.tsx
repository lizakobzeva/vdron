import {Canvas} from "@react-three/fiber";
import { PresentationControls, Stage} from "@react-three/drei";
import {Suspense, useState} from "react";
import style from './Scene3D.module.css'
import {ModelDrone} from "../ModelDrone.tsx";
import type {CameraType, WingType} from "../../types/drone.ts";


function Scene3D() {
    const [wingtype, setWingType] = useState<WingType>('double')
    const [cameraType, setCameraType] = useState<CameraType>(true)
    return (
        <div className={style.scene3D}>
            <Canvas className={style.droneCanvas}>
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
            <div className={style.modelConfigurator}>
                <div>
                    <p>Модель крыльев:</p>
                    <ul>
                        <li style={{"display": "flex", "justifyContent": "space-between"}}
                            onClick={() => setWingType("double")}>
                            <label htmlFor="double">Двойные</label>
                            <input id='double' type='checkbox' checked={wingtype === 'double'}/>
                        </li>
                        <li style={{"display": "flex", "justifyContent": "space-between"}}
                            onClick={() => setWingType("quadruples")}>
                            <label htmlFor="quadruples">Четверные</label>
                            <input id='quadruples' type='checkbox' checked={wingtype === 'quadruples'}/>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Модель камеры:</p>
                    <ul>
                        <li style={{"display": "flex", "justifyContent": "space-between"}}
                            onClick={() => setCameraType(true)}>
                            <label htmlFor="withcamera">Есть</label>
                            <input id='withcamera' type='checkbox' checked={cameraType === true}/>
                        </li>
                        <li style={{"display": "flex", "justifyContent": "space-between"}}
                            onClick={() => setCameraType(false)}>
                            <label htmlFor="withoutcamera">Нет</label>
                            <input id='withoutcamera' type='checkbox' checked={cameraType === false}/>
                        </li>
                    </ul>
                </div>
        </div>
        </div>
    );
}

export default Scene3D;