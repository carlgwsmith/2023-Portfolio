import { useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"
import { Sparkles, CameraShake } from '@react-three/drei'
import { useEffect, useRef } from 'react'
export default function Model(){
    const modelprim = useRef()
    const model = useLoader(GLTFLoader, './carlsoffice1.gltf',
    (loader)=>{
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('./draco/')
        loader.setDRACOLoader(dracoLoader)
    })
    useFrame((state, delta) =>
    {
        const time = state.clock.elapsedTime
        // modelprim.current.position.x=1 +Math.cos(time/4)
        // modelprim.current.rotation.y +=(delta * 0.2)
    })
    return (
    <>
    <primitive ref={modelprim} object={model.scene} position={[-1.2,-.5,-1]} scale={.4} rotation-y={4.7} rotation-z={0.02} rotation-x={0} className="model"/>
    </>
    )
} 