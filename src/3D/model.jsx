import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"
import { Sparkles, CameraShake } from '@react-three/drei'

export default function Model(){
    const model = useLoader(GLTFLoader, './carlsoffice1.gltf',
    (loader)=>{
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('./draco/')
        loader.setDRACOLoader(dracoLoader)
    })
    return (
    <>
    <primitive object={model.scene} position={[-1,-.5,-1]} scale={.4} rotation-y={4.7} rotation-z={0.02} rotation-x={0} className="model"/>
    <Sparkles size={6} scale={4, 2, 5} position-y={1.5} speed={.5} count={150} color={'tan'}/>
    </>
    )
} 