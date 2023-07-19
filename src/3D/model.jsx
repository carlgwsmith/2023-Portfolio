import { useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"
import { Sparkles, CameraShake, OrbitControls, Html, Text } from '@react-three/drei'
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
    
    const play = 'w-[100px] mr-[20px] p-3 bg-white text-jet bg-opacity-60 rounded-full fade-in'
    return (
    <>
    <Html className={play}>DRAG ME!</Html>
     <OrbitControls makeDefault />
    <primitive ref={modelprim} object={model.scene} position={[-1.2,-.5,-1]} scale={.4} rotation-y={4.7} rotation-z={0.02} rotation-x={0} className="model"/>
    </>
    )
} 