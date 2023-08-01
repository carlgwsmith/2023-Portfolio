import {  useFrame } from "@react-three/fiber"
import {   Html, useGLTF } from '@react-three/drei'
import { useState, useRef } from 'react'
export default function Model(props){
    const modelprim = useRef()
    const [hover, setHover] = useState(false);
    const { nodes, materials } = useGLTF("/carlsoffice1.gltf");
    // const model = useGLTF('./carlsoffice1.gltf')
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
    <group {...props} dispose={null} className="model" position={[-1.4,-.5,-.75]}
    scale={.4}
    rotation-y={5}
    rotation-z={0.03}
    rotation-x={0}
    onPointerOver={(e) => {
        setHover(true);
      }}
      onPointerOut={(e) => {
        setHover(false);
      }}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.poster.geometry}
      material={materials["Material.014"]}
      position={[4.075, 4.363, -2.935]}
      rotation={[1.605, -0.03, 2.423]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Floor.geometry}
      material={nodes.Floor.material}
      position={[4.075, 0, -2.935]}
      rotation={[Math.PI, -0.719, Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.WallBack.geometry}
      material={materials["Material.005"]}
      position={[0.385, 2.905, 0.318]}
      rotation={[0, -0.852, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.WallRight.geometry}
      material={materials["Material.006"]}
      position={[4.075, 0, -2.935]}
      rotation={[Math.PI, -0.719, Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Carpet.geometry}
      material={materials["Material.012"]}
      position={[4.062, -0.027, -2.855]}
      rotation={[Math.PI, -0.719, Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube001.geometry}
      material={materials["Material.007"]}
      position={[2.878, 3.977, 1.655]}
      rotation={[Math.PI, -0.719, Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube002.geometry}
      material={materials["Material.008"]}
      position={[2.878, 3.03, 1.655]}
      rotation={[Math.PI, -0.719, Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane001.geometry}
      material={materials["Material.062"]}
      position={[2.239, 2.488, -5.466]}
      rotation={[1.339, 0.197, -0.698]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube003.geometry}
      material={materials["Material.003"]}
      position={[4.075, 3.233, -2.935]}
      rotation={[Math.PI, -0.719, Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder001.geometry}
      material={nodes.Cylinder001.material}
      position={[0.383, 0.037, -2.596]}
      rotation={[Math.PI, -0.719, Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder002.geometry}
      material={nodes.Cylinder002.material}
      position={[4.9, 0.037, -6.548]}
      rotation={[Math.PI, -0.719, Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder003.geometry}
      material={materials["Material.004"]}
      position={[-0.336, 0.037, -3.418]}
      rotation={[Math.PI, -0.719, Math.PI]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder004.geometry}
      material={nodes.Cylinder004.material}
      position={[4.181, 0.037, -7.369]}
      rotation={[Math.PI, -0.719, Math.PI]}
    />
    <group
      position={[-0.393, 1.634, -4.492]}
      rotation={[Math.PI / 2, 0, -1.287]}
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
      position={[3.375, 1.243, -3.735]}
      rotation={[0, -0.277, 0]}
      scale={[0.75, 0.152, 0.75]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve001.geometry}
        material={materials.Metal}
        position={[0, -1.453, -0.231]}
        rotation={[0, 1.544, 0]}
        scale={[0.85, 4.204, 0.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube069.geometry}
        material={materials.Chair}
        position={[1.147, 4.909, 0]}
        scale={[0.169, 5.262, 0.914]}
      />
      <group position={[0, -1.021, 0]} scale={[0.234, 0.752, 0.234]}>
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
      position={[2.118, 2.235, -5.549]}
      rotation={[1.465, 0.093, 2.428]}
      scale={[0.75, 0.021, 0.685]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube005.geometry}
      material={materials["Material.054"]}
      position={[2.43, 1.709, -5.196]}
      rotation={[0, 0.719, 0]}
      scale={[0.049, 0.004, 0.042]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube006.geometry}
      material={materials["Material.026"]}
      position={[2.283, 1.697, -5.504]}
      rotation={[0, 0.719, -Math.PI]}
      scale={[-0.025, -0.016, -0.017]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube007.geometry}
      material={materials["Material.055"]}
      position={[2.68, 1.704, -5.013]}
      rotation={[Math.PI, -0.719, Math.PI]}
      scale={[0.747, 0.021, 0.68]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plant_leafs_Plane030.geometry}
      material={materials["Material.009"]}
      position={[4.768, 0, -8.321]}
      rotation={[Math.PI / 2, 0, 2.423]}
      scale={2.334}
    />
    <group
      position={[4.768, 0, -8.321]}
      rotation={[Math.PI / 2, 0, 2.423]}
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
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.picture_178c48b8f65689327e5625340d34cc39.geometry}
      material={materials["178c48b8f65689327e5625340d34cc39"]}
      position={[4.075, 0, -2.935]}
      rotation={[Math.PI / 2, 0, 2.423]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book0.geometry}
      material={materials["Material.027"]}
      position={[3.229, 3.081, 3.254]}
      rotation={[-Math.PI, 0.859, 3.02]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book1.geometry}
      material={materials["Material.028"]}
      position={[3.156, 3.081, 3.169]}
      rotation={[-Math.PI, 0.859, 3.02]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book2.geometry}
      material={materials["Material.029"]}
      position={[3.081, 3.075, 3.082]}
      rotation={[-Math.PI, 0.859, 3.02]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book3.geometry}
      material={materials["Material.011"]}
      position={[3.039, 3.08, 3.034]}
      rotation={[-Math.PI, 0.859, 3.02]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book4.geometry}
      material={materials["Material.030"]}
      position={[2.973, 3.082, 2.957]}
      rotation={[-Math.PI, 0.859, 3.02]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book5.geometry}
      material={materials["Material.031"]}
      position={[2.895, 3.076, 2.867]}
      rotation={[-Math.PI, 0.859, 3.02]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book6.geometry}
      material={materials["Material.032"]}
      position={[2.815, 3.068, 2.774]}
      rotation={[-Math.PI, 0.859, -Math.PI]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book7.geometry}
      material={materials["Material.033"]}
      position={[2.733, 3.09, 2.679]}
      rotation={[Math.PI, 0.859, 2.965]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book8.geometry}
      material={materials["Material.034"]}
      position={[2.649, 3.082, 2.582]}
      rotation={[Math.PI, 0.859, 2.965]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book9.geometry}
      material={materials["Material.035"]}
      position={[2.596, 3.087, 2.521]}
      rotation={[Math.PI, 0.859, 2.965]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book10.geometry}
      material={materials["Material.036"]}
      position={[2.524, 3.083, 2.437]}
      rotation={[Math.PI, 0.859, 2.965]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book11.geometry}
      material={materials["Material.037"]}
      position={[2.468, 3.084, 2.372]}
      rotation={[Math.PI, 0.859, 2.965]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book12.geometry}
      material={materials["Material.038"]}
      position={[2.32, 3.068, 2.2]}
      rotation={[-Math.PI, 0.859, -Math.PI]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book13.geometry}
      material={materials["Material.039"]}
      position={[2.268, 3.071, 2.14]}
      rotation={[-Math.PI, 0.859, 3.086]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book14.geometry}
      material={materials["Material.040"]}
      position={[2.23, 3.071, 2.096]}
      rotation={[-Math.PI, 0.859, 3.086]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book15.geometry}
      material={materials["Material.041"]}
      position={[2.186, 3.074, 2.044]}
      rotation={[-Math.PI, 0.859, 3.086]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book16.geometry}
      material={materials["Material.042"]}
      position={[2.112, 3.073, 1.959]}
      rotation={[-Math.PI, 0.859, 3.086]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book17.geometry}
      material={materials["Material.043"]}
      position={[2.044, 3.071, 1.881]}
      rotation={[-Math.PI, 0.859, 3.086]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book18.geometry}
      material={materials["Material.044"]}
      position={[1.982, 3.068, 1.808]}
      rotation={[-Math.PI, 0.859, -Math.PI]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book19.geometry}
      material={materials["Material.045"]}
      position={[1.912, 3.076, 1.727]}
      rotation={[Math.PI, 0.859, 3.045]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book20.geometry}
      material={materials["Material.046"]}
      position={[1.851, 3.074, 1.657]}
      rotation={[Math.PI, 0.859, 3.045]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book21.geometry}
      material={materials["Material.047"]}
      position={[1.805, 3.08, 1.604]}
      rotation={[Math.PI, 0.859, 3.045]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book22.geometry}
      material={materials["Material.048"]}
      position={[1.719, 3.074, 1.504]}
      rotation={[Math.PI, 0.859, 3.045]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book23.geometry}
      material={materials["Material.049"]}
      position={[1.674, 3.074, 1.451]}
      rotation={[Math.PI, 0.859, 3.045]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book24.geometry}
      material={materials["Material.050"]}
      position={[1.58, 3.068, 1.342]}
      rotation={[-Math.PI, 0.859, -Math.PI]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book25.geometry}
      material={materials["Material.051"]}
      position={[1.498, 3.075, 1.247]}
      rotation={[Math.PI, 0.859, 3.016]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book26.geometry}
      material={materials["Material.052"]}
      position={[1.46, 3.075, 1.204]}
      rotation={[Math.PI, 0.859, 3.016]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Book27.geometry}
      material={materials["Material.053"]}
      position={[1.423, 3.079, 1.16]}
      rotation={[Math.PI, 0.859, 3.016]}
      scale={2.971}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Sphere.geometry}
      material={materials.Eye}
      position={[1.874, 4.032, 1.173]}
      rotation={[Math.PI / 2, 0, -2.237]}
      scale={0}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube008.geometry}
      material={materials.Body}
      position={[1.874, 4.032, 1.173]}
      rotation={[Math.PI / 2, 0, -2.237]}
      scale={0}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane.geometry}
      material={materials.rubber}
      position={[3.09, 4.117, 2.169]}
      rotation={[2.956, 1.052, 1.433]}
      scale={[0.17, 0.154, 0.154]}
    >
      <group
        position={[-0.021, -1.83, 0.829]}
        rotation={[-1.453, 1.45, 3.021]}
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
        position={[-0.076, -1.166, 1.249]}
        rotation={[-1.453, 1.45, 3.021]}
        scale={[0.948, 0.949, 0.739]}
      />
      <group
        position={[0.022, -1.845, -0.857]}
        rotation={[-1.42, -1.495, 0.13]}
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
        position={[0.058, -1.209, -1.267]}
        rotation={[-1.42, -1.495, 0.13]}
        scale={[0.949, 0.949, 0.739]}
      />
    </mesh>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["uploads-files-49092-LegLampBottom-final_2"].geometry}
      material={materials["Material.002"]}
      position={[3.98, 1.622, -6.98]}
      rotation={[0, -0.205, 0]}
      scale={0.007}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["uploads-files-49092-LegLampShade-final"].geometry}
      material={materials["Material.010"]}
      position={[3.855, 2.037, -6.967]}
      rotation={[Math.PI, -1.337, Math.PI]}
      scale={0.012}
    />
  </group>
  </>
    )

    
} 
useGLTF.preload('./carlsoffice1.gltf')
