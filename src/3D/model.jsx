import {  useFrame } from "@react-three/fiber"
import {   Center, Html, useGLTF } from '@react-three/drei'
import { useState, useRef, useEffect } from 'react'
import { useWindowSize, useMouse } from "@uidotdev/usehooks"
export default function Model(props){
    const modelprim = useRef()
    const bulb = useRef()
    const [hover, setHover] = useState(false);
    const [rightValue, setRight] = useState('true')
    const [posX, setPosX] = useState(.5)
    const [posY, setPosY] = useState(.1)
    const [scale, setScale] = useState(.2)
    const { nodes, materials } = useGLTF("/carlsoffice1a.gltf");
    const [mouse, ref] = useMouse();
    // const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const size = useWindowSize()


    useFrame((state, delta)=>{
      const time = state.clock.elapsedTime
      console.log(modelprim.current.rotation.x)
      if(hover){
        // modelprim.current.rotation.x += .0005
        
        modelprim.current.rotation.y = 5 + Math.cos(time/3) / 6
      }

    })
    useFrame((state, delta) =>
    {
        const time = state.clock.elapsedTime


        if(size.width <= 400){
          setRight('false')
          setPosX(-1.3)
          setPosY(-.4)
          setScale(.15)
          // console.log('less than 1400' + modelprim.current.scale)
        }
        else if(size.width <= 500){
          setRight('false')
          setPosX(-1.2) 
          setPosY(-.4)
          setScale(.15)
          // console.log('less than 1400' + modelprim.current.scale)
        }
        else if(size.width < 800){
          setRight('false')
          setPosX(-1.4)
          setPosY(-.4)
          setScale(.18)
          // console.log('less than 1400' + modelprim.current.scale)
          // modelprim.current.position = [1,1,1]
        }
        else if(size.width < 940){
          setRight('false')
          setPosX(-1.8)
          setPosY(-.4)
          setScale(.18)
          // console.log('less than 1400' + modelprim.current.scale)
          // modelprim.current.position = [1,1,1]
        }
        else if(size.width < 1200){
          setRight('true')
          setPosX(-.1)
          setPosY(.15)
          setScale(.2)
          // console.log('less than 1200')
        }
        else if(size.width < 1400){
          setRight('true')
          setPosX(-.1)
          setPosY(.15)
          setScale(.2)
          // console.log('less than 1400')
        }
         else{
          setRight('true')
          setPosX(.14)
          setPosY(.15)
          setScale(.24)
        }
    })

    const play = 'w-[140px] fixed ml-[60px] p-3 bg-white text-jet bg-opacity-60 rounded-full fade-in pointer-events-none'
    const noplay = 'w-[140px] fixed ml-[60px] p-3 bg-white text-jet bg-opacity-60 rounded-full fade-out pointer-events-none'
    return (
    <>
    {/* <Html wrapperClass="htmlCanvas" className={hover ? noplay : play}>PLAY WITH ME!</Html> */}
    <Center position-y={posY} position-x={posX} right={rightValue} onPointerOver={(e) => {
        setHover(true);
      }}
      onPointerOut={(e) => {
        setHover(false);
      }}>
    <group {...props} dispose={null}
    className="model"
    scale={scale}
    ref={modelprim}
    rotation-y={5}
    rotation-z={0.03}
    rotation-x={0}
    >
      <mesh
        castShadow
        receiveShadow
        onPointerOver={(e)=>{e.stopPropagation()}}
        geometry={nodes.poster.geometry}
        material={materials["Material.014"]}
        position={[-4.977, 3.625, 1.882]}
        rotation={[1.603, -0.032, 2.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={nodes.Floor.material}
        position={[-0.07, 0, -0.035]}
        rotation={[Math.PI, -0.785, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WallBack.geometry}
        material={materials["Material.005"]}
        position={[-3.537, 2.905, 3.454]}
        rotation={[0, -0.786, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WallRight.geometry}
        material={materials["Material.006"]}
        position={[-3.497, 3.006, -3.58]}
        rotation={[Math.PI, -0.785, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Carpet.geometry}
        material={materials["Material.012"]}
        position={[0.004, 0.018, -0.036]}
        rotation={[Math.PI, -0.785, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.007"]}
        position={[-1.269, 3.977, 4.931]}
        rotation={[Math.PI, -0.785, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.008"]}
        position={[-1.269, 3.03, 4.931]}
        rotation={[Math.PI, -0.785, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.062"]}
        position={[-2.176, 2.261, -2.497]}
        rotation={[1.353, 0.212, -0.764]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.003"]}
        position={[-2.003, 1.553, -1.97]}
        rotation={[Math.PI, -0.785, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[-3.731, 0.762, 0.546]}
        rotation={[Math.PI, -0.785, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[0.515, 0.762, -3.695]}
        rotation={[Math.PI, -0.785, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.004"]}
        position={[-4.503, 0.762, -0.226]}
        rotation={[Math.PI, -0.785, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[-0.256, 0.762, -4.467]}
        rotation={[Math.PI, -0.785, Math.PI]}
      />
      <group
        position={[-3.4, 2.052, -0.62]}
        rotation={[Math.PI / 2, 0, -1.353]}
        scale={0.026}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_1.geometry}
          material={materials.base_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_2.geometry}
          material={materials.base_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_3.geometry}
          material={nodes.monitor_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_4.geometry}
          material={materials.screen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_5.geometry}
          material={materials.frame}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair.geometry}
        material={materials.Chair}
        position={[-0.877, 1.243, -0.799]}
        rotation={[0, -0.211, 0]}
        scale={[0.75, 0.152, 0.75]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve001.geometry}
          material={materials.Metal}
          position={[0.175, -1.622, -0.743]}
          rotation={[0, 1.544, 0]}
          scale={[0.85, 4.204, 0.85]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069.geometry}
          material={materials.Chair}
          position={[1.376, 3.312, 0.001]}
          scale={[0.169, 5.262, 0.914]}
        />
        <group position={[0.077, -7.365, 0]} scale={[0.234, 0.752, 0.234]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder000.geometry}
            material={materials["Steel Black Polished"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder000_1.geometry}
            material={materials["Steel White"]}
          />
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.060"]}
        position={[-2.191, 2.232, -2.511]}
        rotation={[1.471, 0.099, 2.362]}
        scale={[0.75, 0.021, 0.685]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.054"]}
        position={[-1.871, 1.709, -2.21]}
        rotation={[0, 0.785, 0]}
        scale={[0.049, 0.004, 0.042]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.026"]}
        position={[-2.105, 1.681, -2.424]}
        rotation={[0, 0.785, -Math.PI]}
        scale={[-0.025, -0.016, -0.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.055"]}
        position={[-1.71, 1.69, -2.039]}
        rotation={[Math.PI, -0.785, Math.PI]}
        scale={[0.747, 0.021, 0.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_leafs_Plane030.geometry}
        material={materials["Material.009"]}
        position={[0.29, 1.517, -5.46]}
        rotation={[Math.PI / 2, 0, 2.357]}
        scale={2.334}
      />
      <group
        position={[0.267, 0.386, -5.454]}
        rotation={[Math.PI / 2, 0, 2.357]}
        scale={2.334}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plant_jar_Cube001_1.geometry}
          material={materials.jar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plant_jar_Cube001_2.geometry}
          material={materials.soil}
        />
      </group>
      <group
        position={[-0.413, 3.344, 5.986]}
        rotation={[Math.PI, 0.793, 3.02]}
        scale={2.971}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_1.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_2.geometry}
          material={materials["Material.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_3.geometry}
          material={materials["Material.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_4.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_5.geometry}
          material={materials["Material.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_6.geometry}
          material={materials["Material.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_7.geometry}
          material={materials["Material.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_8.geometry}
          material={materials["Material.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_9.geometry}
          material={materials["Material.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_10.geometry}
          material={materials["Material.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_11.geometry}
          material={materials["Material.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_12.geometry}
          material={materials["Material.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_13.geometry}
          material={materials["Material.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_14.geometry}
          material={materials["Material.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_15.geometry}
          material={materials["Material.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_16.geometry}
          material={materials["Material.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_17.geometry}
          material={materials["Material.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_18.geometry}
          material={materials["Material.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_19.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_20.geometry}
          material={materials["Material.045"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_21.geometry}
          material={materials["Material.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_22.geometry}
          material={materials["Material.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_23.geometry}
          material={materials["Material.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_24.geometry}
          material={materials["Material.049"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_25.geometry}
          material={materials["Material.050"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_26.geometry}
          material={materials["Material.051"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_27.geometry}
          material={materials["Material.052"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book0_28.geometry}
          material={materials["Material.053"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.Eye}
        position={[-1.925, 4.323, 4.145]}
        rotation={[Math.PI / 2, 0, -2.303]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.Body}
        position={[-1.955, 4.246, 4.162]}
        rotation={[Math.PI / 2, 0, -2.303]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.rubber}
        position={[-0.719, 4.118, 5.119]}
        rotation={[2.974, 0.987, 1.41]}
        scale={[0.17, 0.154, 0.154]}
      >
        <group
          position={[-0.038, -1.981, 0.86]}
          rotation={[-1.424, 1.448, 2.997]}
          scale={[0.948, 0.949, 0.739]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004_1.geometry}
            material={materials["metal cp"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004_2.geometry}
            material={materials["rubber.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004_3.geometry}
            material={materials.sony}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005.geometry}
          material={materials["metal cp"]}
          position={[-0.062, -1.119, 1.264]}
          rotation={[-1.424, 1.448, 2.997]}
          scale={[0.948, 0.949, 0.739]}
        />
        <group
          position={[0.037, -1.873, -0.866]}
          rotation={[-1.568, -1.494, -0.015]}
          scale={[0.949, 0.949, 0.739]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009.geometry}
            material={materials["metal cp"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009_1.geometry}
            material={materials["rubber.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009_2.geometry}
            material={materials.sony}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007.geometry}
          material={materials["metal cp"]}
          position={[0.074, -1.163, -1.295]}
          rotation={[-1.568, -1.494, -0.015]}
          scale={[0.949, 0.949, 0.739]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["02LP"].geometry}
        material={materials.lamp_base}
        position={[-0.419, 2.724, -4.114]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["03LP"].geometry}
        material={materials.lamp_base}
        position={[-0.428, 2.742, -4.039]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box009.geometry}
        material={materials.lamp_base}
        position={[-0.378, 2.222, -4.452]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box024.geometry}
        material={materials.lamp_base}
        position={[-0.409, 2.726, -4.199]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box055.geometry}
        material={materials.lamp_base}
        position={[-0.396, 1.741, -4.304]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box060.geometry}
        material={materials.lamp_base}
        position={[-0.403, 1.71, -4.249]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box061.geometry}
        material={materials.lamp_base}
        position={[-0.375, 2.301, -4.471]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box062.geometry}
        material={materials.lamp_base}
        position={[-0.369, 2.194, -4.524]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box063.geometry}
        material={materials.lamp_base}
        position={[-0.394, 1.756, -4.322]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_1.geometry}
        material={materials.lamp_base}
        position={[-0.403, 1.632, -4.247]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_1.geometry}
        material={materials.lamp_base}
        position={[-0.403, 1.632, -4.247]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003_1.geometry}
        material={materials.lamp_base}
        position={[-0.397, 1.686, -4.294]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={materials.lamp_base}
        position={[-0.432, 2.718, -4.143]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder037.geometry}
        material={materials.lamp_base}
        position={[-0.395, 2.449, -4.306]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder044.geometry}
        material={materials.lamp_base}
        position={[-0.369, 2.724, -4.108]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder056.geometry}
        material={materials.lamp_base}
        position={[-0.424, 2.78, -4.069]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder059.geometry}
        material={materials.lamp_base}
        position={[-0.427, 2.92, -4.054]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder060.geometry}
        material={materials.lamp_base}
        position={[-0.435, 2.822, -3.986]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder061.geometry}
        material={materials.lamp_base}
        position={[-0.443, 2.731, -3.92]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder069.geometry}
        material={materials.base}
        position={[-0.406, 2.283, -4.472]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder070.geometry}
        material={materials.base}
        position={[-0.424, 1.797, -4.256]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder071.geometry}
        material={materials.lamp_base}
        position={[-0.399, 2.718, -4.139]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder072.geometry}
        material={materials.lamp_base}
        position={[-0.374, 2.275, -4.475]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder073.geometry}
        material={materials.lamp_base}
        position={[-0.388, 1.963, -4.366]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder074.geometry}
        material={materials.lamp_base}
        position={[-0.33, 2.221, -4.447]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder075.geometry}
        material={materials.plastik}
        position={[-0.458, 2.747, -4.039]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder076.geometry}
        material={materials.plastik}
        position={[-0.395, 2.745, -4.028]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder077.geometry}
        material={materials.base}
        position={[-0.345, 2.283, -4.464]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder079.geometry}
        material={materials.base}
        position={[-0.38, 1.797, -4.251]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        ref={bulb}
        geometry={nodes.Helix007.geometry}
        material={materials.Material}
        position={[-0.445, 2.706, -3.905]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LP01.geometry}
        material={materials.lamp_base}
        position={[-0.375, 2.276, -4.475]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LP01_lowpart.geometry}
        material={materials.lamp_base}
        position={[-0.399, 1.737, -4.276]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LP_01.geometry}
        material={materials.base}
        position={[-0.43, 2.88, -4.027]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials.lamp_base}
        position={[-0.388, 2.239, -4.494]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials.base}
        position={[-0.424, 2.444, -4.319]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials.base}
        position={[-0.405, 2.282, -4.473]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials.lamp_base}
        position={[-0.357, 2.239, -4.49]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials.base}
        position={[-0.411, 1.957, -4.36]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials.base}
        position={[-0.424, 1.797, -4.257]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={materials.base}
        position={[-0.365, 2.444, -4.312]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials.base}
        position={[-0.346, 2.282, -4.465]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane020.geometry}
        material={materials.base}
        position={[-0.367, 1.957, -4.355]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={materials.base}
        position={[-0.38, 1.797, -4.252]}
        rotation={[0, -0.122, 0]}
        scale={0.03}
      />
    </group>

  </Center>
  </>
    )

    
} 
useGLTF.preload('./carlsoffice1a.gltf')
