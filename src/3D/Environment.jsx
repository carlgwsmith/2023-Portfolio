import { useFrame, extend, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


export default function Experience(){
    const{camera, gl} = useThree()
    const cubeRef= useRef()
    const sphereandcube = useRef()

    useFrame((state, deltaTime)=>{

        //ROTATE SCENE
        // const angle = state.clock.elapsedTime * .2
        // state.camera.position.x = Math.sin(angle) * 10
        // state.camera.position.z = Math.cos(angle) * 10

        // state.camera.lookAt(0,0,0)

        //ROTATE CUBE
        cubeRef.current.rotation.y += deltaTime
        // sphereandcube.current.rotation.y += deltaTime

    })


    return(
        <>

        <directionalLight position={[1, 2, 1]} color="red" intensity={1.4}/>
        <ambientLight intensity={0.5}/>
        <group ref={sphereandcube}>
        <mesh 
        // scale={[3,2,1]}
        scale={1.2}
        position={[2,0,0]}
        // position={[0,2,0]}
        position-x={1.5}
        rotation-y={Math.PI * 0.25}
        ref={cubeRef}
        >
          {/* <sphereGeometry args={ [1.5, 32, 32] }/> */}
          <boxGeometry/>
          <meshStandardMaterial color='purple'/>
        </mesh>

        <mesh
            position={[-2,0,0]}
        >
            <sphereGeometry/>
            <meshStandardMaterial color='#ff0000'/>
        </mesh>
        </group>

        </>
    )
}