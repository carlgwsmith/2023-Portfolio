import { useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"
import {  OrbitControls, Html } from '@react-three/drei'
import { useState, useRef } from 'react'
export default function Model(){
    const modelprim = useRef()
    const [hover, setHover] = useState(false);
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
    
    const play = 'w-[140px] fixed ml-[-40px] p-3 bg-white text-jet bg-opacity-60 rounded-full fade-in pointer-events-none'
    const noplay = 'w-[140px] fixed ml-[-40px] p-3 bg-white text-jet bg-opacity-60 rounded-full fade-out pointer-events-none'
    return (
    <>
    <Html wrapperClass="htmlCanvas" className={hover ? noplay : play}>PLAY WITH ME!</Html>
     <OrbitControls enableDamping
    enablePan
    enableRotate
    enableZoom={false} />
    <primitive 
        ref={modelprim}
        object={model.scene}
        position={[-1.4,-.5,-.75]}
        scale={.4}
        rotation-y={5}
        rotation-z={0.03}
        rotation-x={0}
        onPointerOver={(e) => {
            setHover(true);
          }}
          onPointerOut={(e) => {
            setHover(false);
          }}
        className="model"/>
    </>
    )
} 