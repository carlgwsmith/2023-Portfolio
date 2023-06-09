import { useFrame,extend, useThree } from "@react-three/fiber"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function Experience(){

    const model = useLoader(GLTFLoader, './carlsoffice.gltf')
    const{camera, gl} = useThree()

    // extend({OrbitControls: OrbitControls})

    return(
        <>
         {/* <orbitControls args={[camera, gl.domElement]}/> */}
        <directionalLight position={[1, 2, 1]}  intensity={.8}/>
        <ambientLight intensity={0.5}/>
    
        <primitive object={model.scene} position={[-1,-.5,-1]} scale={.4} rotation-y={4.7} rotation-z={0.02} rotation-x={0}/>

        </>
    )
}