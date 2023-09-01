import { useThree } from "@react-three/fiber"
import { OrbitControls, PresentationControls, Float } from "@react-three/drei"
import Model from "./model"
import { Suspense, useRef } from 'react'
import Placeholder from "./placeholder"


export default function Experience(){
    const ref = useRef()
    const{camera, gl} = useThree()

    // extend({OrbitControls: OrbitControls})

    return(
        <>
        
         {/* <orbitControls args={[camera, gl.domElement]}/>  */}

        <directionalLight position={[1, 2, 1]}  intensity={1.5}/>
        <ambientLight intensity={0.75}/>
    
    <Suspense
    fallback={
    <Placeholder position-x={.8} scale={[.75,.75,.75]}/>
    }
    >
    <PresentationControls 
        global
        rotation={[0,3.5,0]}
        polar={[-0.01, 0.01]}
        azimuth={[0,0.2]}
        config={{mass:1, tension: 400}}
        snap={{mass: 1, tension: 200}}
        >
        <Float rotationIntensity={.4} floatingRange={.8} floatIntensity={0.1}>
    <Model />
    </Float>
    </PresentationControls>
    </Suspense>
        </>
    )
}