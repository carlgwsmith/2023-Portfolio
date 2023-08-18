import { useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
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

    <Model onPointOver={()=>{}} position-x={.8}/>
    </Suspense>
        </>
    )
}