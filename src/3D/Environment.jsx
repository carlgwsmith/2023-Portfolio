import { useThree } from "@react-three/fiber"
import { OrbitControls, Stage } from "@react-three/drei"
import Model from "./model"
import { Suspense, useRef } from 'react'
import Placeholder from "./placeholder"


export default function Experience(){
    const ref = useRef()
    const{camera, gl} = useThree()

    // extend({OrbitControls: OrbitControls})

    return(
        <>
        
         {/* <orbitControls args={[camera, gl.domElement]}/> */}
         <OrbitControls enableDamping
    enablePan
    enableRotate
    enableZoom={false} />
        <directionalLight position={[1, 2, 1]}  intensity={.8}/>
        <ambientLight intensity={0.5}/>
    
    <Suspense
    fallback={
    <Placeholder position-y={0} scale={[2,2,2]}/>
    }
    >
    <Model/>
    </Suspense>
        </>
    )
}