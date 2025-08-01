import { useFrame, extend } from "@react-three/fiber";
import { Center, useGLTF, shaderMaterial } from '@react-three/drei';
import { useState, useRef } from 'react';
import { useWindowSize } from "@uidotdev/usehooks";
import portalVertexShader from '../shaders/vertex.glsl';
import portalFragmentShader from '../shaders/fragment.glsl';
import * as THREE from 'three';

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#f6e0cb'),
    uColorEnd: new THREE.Color('#cacccc'),
  },
  portalVertexShader,
  portalFragmentShader
);
extend({ PortalMaterial });

function getModelTransform(width) {
  if (width <= 400) {
    return { posX: 0, posY: -0.4, scale: 0.12 };
  } else if (width <= 500) {
    return { posX: 0, posY: -0.4, scale: 0.15 };
  } else if (width < 860) {
    return { posX: 0, posY: -0.5, scale: 0.18 };
  } else if (width < 940) {
    return { posX: 0, posY: -0.4, scale: 0.15 };
  } else if (width < 1054) {
    return { posX: -1.0, posY: -0.1, scale: 0.20 };
  } else if (width < 1200) {
    return { posX: -1.2, posY: 0.02, scale: 0.22 };
  } else if (width < 1400) {
    return { posX: -1.3, posY: -0.13, scale: 0.24 };
  } else {
    return { posX: -1.5, posY: -.14, scale: 0.24 };
  }
}

export default function Model(props) {
  const modelprim = useRef();
  const portalMaterial = useRef();
  const bulb = useRef();
  const { nodes, materials } = useGLTF("/carlsOfficeAug21.gltf");
  const size = useWindowSize();
  const { posX, posY, scale } = getModelTransform(size.width);
  const [hover, setHover] = useState(false);

  useFrame((_, delta) => {
    if (portalMaterial.current) {
      portalMaterial.current.uTime += delta;
    }
  });

  // Early return if GLTF not loaded yet
  if (!nodes || !materials) return null;

  return (
    <>
      <color args={['#fff6d7']} attach='background' />
      <Center
        position={[posX, posY, 0]}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <group
          {...props}
          dispose={null}
          className="model"
          scale={scale}
          ref={modelprim}
          rotation-y={0.5}
          rotation-z={0}
          rotation-x={0}
        >
          {/* Example check for a mesh */}
          {nodes.poster?.geometry && materials["Material.014"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.poster.geometry}
              onPointerOver={e => e.stopPropagation()}
              material={materials["Material.014"]}
              position={[-0.228, 3.625, 4.41]}
              rotation={[1.559, -0.044, 1.312]}
            />
          )}
          {nodes.Floor?.geometry && nodes.Floor?.material && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor.geometry}
              material={nodes.Floor.material}
              position={[0.577, 0, -0.796]}
              rotation={[0, -1.312, 0]}
            />
          )}
          {nodes.WallBack?.geometry && materials["Material.005"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.WallBack.geometry}
              material={materials["Material.005"]}
              position={[1.853, 2.905, 3.954]}
              rotation={[0, 0.259, 0]}
            />
          )}
          {nodes.WallRight?.geometry && materials["Material.006"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.WallRight.geometry}
              material={materials["Material.006"]}
              position={[-4.21, 3.006, 0.388]}
              rotation={[0, -1.312, 0]}
            />
          )}
          {nodes.Carpet?.geometry && materials["Material.012"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Carpet.geometry}
              material={materials["Material.012"]}
              position={[0.613, 0.018, -0.86]}
              rotation={[0, -1.312, 0]}
            />
          )}
          {nodes.Cube001?.geometry && materials["Material.007"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001.geometry}
              material={materials["Material.007"]}
              color={'red'}
              position={[4.27, 3.977, 2.734]}
              rotation={[0, -1.312, 0]}
            />
          )}
          {nodes.Cube002?.geometry && materials["Material.008"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002.geometry}
              material={materials["Material.008"]}
              position={[4.27, 3.03, 2.734]}
              rotation={[0, -1.312, 0]}
            />
          )}
          {nodes.Plane001?.geometry && materials["Material.062"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001.geometry}
              material={materials["Material.062"]}
              position={[-2.61, 2.261, -0.21]}
              rotation={[1.65, 0.293, -1.844]}
            />
          )}
          {nodes.Cube003?.geometry && materials["Material.003"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube003.geometry}
              material={materials["Material.003"]}
              position={[-2.067, 1.553, -0.096]}
              rotation={[0, -1.312, 0]}
            />
          )}
          {nodes.Cylinder001?.geometry && nodes.Cylinder001?.material && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001.geometry}
              material={nodes.Cylinder001.material}
              position={[-0.759, 0.762, 2.662]}
              rotation={[0, -1.312, 0]}
            />
          )}
          {nodes.Cylinder002?.geometry && nodes.Cylinder002?.material && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002.geometry}
              material={nodes.Cylinder002.material}
              position={[-2.295, 0.762, -3.139]}
              rotation={[0, -1.312, 0]}
            />
          )}
          {nodes.Cylinder003?.geometry && materials["Material.004"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003.geometry}
              material={materials["Material.004"]}
              position={[-1.814, 0.762, 2.941]}
              rotation={[0, -1.312, 0]}
            />
          )}
          {nodes.Cylinder004?.geometry && nodes.Cylinder004?.material && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004.geometry}
              material={nodes.Cylinder004.material}
              position={[-3.349, 0.762, -2.86]}
              rotation={[0, -1.312, 0]}
            />
          )}
          <group
            position={[-1.601, 2.052, 1.791]}
            rotation={[Math.PI / 2, 0, -2.398]}
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
          {nodes.Chair?.geometry && materials.Chair && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chair.geometry}
              material={materials.Chair}
              position={[-0.489, 1.243, -0.482]}
              rotation={[0, 0.834, 0]}
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
          )}
          {nodes.Cube004?.geometry && materials["Material.060"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube004.geometry}
              material={materials["Material.060"]}
              position={[-2.63, 2.232, -0.204]}
              rotation={[1.607, 0.136, 1.31]}
              scale={[0.75, 0.021, 0.685]}
            />
          )}
          {nodes.Cube005?.geometry && materials["Material.054"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005.geometry}
              material={materials["Material.054"]}
              position={[-2.209, 1.709, -0.33]}
              rotation={[-Math.PI, 1.312, -Math.PI]}
              scale={[0.049, 0.004, 0.042]}
            />
          )}
          {nodes.Cube006?.geometry && materials["Material.026"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube006.geometry}
              material={materials["Material.026"]}
              position={[-2.511, 1.681, -0.235]}
              rotation={[-Math.PI, 1.312, 0]}
              scale={[-0.025, -0.016, -0.017]}
            />
          )}
          {nodes.Cube007?.geometry && materials["Material.055"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube007.geometry}
              material={materials["Material.055"]}
              position={[-1.979, 1.69, -0.384]}
              rotation={[0, -1.312, 0]}
              scale={[0.747, 0.021, 0.68]}
            />
          )}
          {nodes.Plant_leafs_Plane030?.geometry && materials["Material.009"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant_leafs_Plane030.geometry}
              material={materials["Material.009"]}
              position={[-3.935, 1.517, -3.831]}
              rotation={[Math.PI / 2, 0, 1.312]}
              scale={2.334}
            />
          )}
          <group
            position={[-3.94, 0.386, -3.808]}
            rotation={[Math.PI / 2, 0, 1.312]}
            scale={2.334}
          >
            {nodes.Plant_jar_Cube001_1?.geometry && materials.jar && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plant_jar_Cube001_1.geometry}
                material={materials.jar}
              />
            )}
            {nodes.Plant_jar_Cube001_2?.geometry && materials.soil && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plant_jar_Cube001_2.geometry}
                material={materials.soil}
              />
            )}
          </group>
          <group
            position={[5.612, 3.344, 2.523]}
            rotation={[Math.PI, -0.252, 3.02]}
            scale={2.971}
          >
            {nodes.Book0_1?.geometry && materials["Material.027"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_1.geometry}
                material={materials["Material.027"]}
              />
            )}
            {nodes.Book0_2?.geometry && materials["Material.028"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_2.geometry}
                material={materials["Material.028"]}
              />
            )}
            {nodes.Book0_3?.geometry && materials["Material.029"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_3.geometry}
                material={materials["Material.029"]}
              />
            )}
            {nodes.Book0_4?.geometry && materials["Material.011"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_4.geometry}
                material={materials["Material.011"]}
              />
            )}
            {nodes.Book0_5?.geometry && materials["Material.030"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_5.geometry}
                material={materials["Material.030"]}
              />
            )}
            {nodes.Book0_6?.geometry && materials["Material.031"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_6.geometry}
                material={materials["Material.031"]}
              />
            )}
            {nodes.Book0_7?.geometry && materials["Material.032"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_7.geometry}
                material={materials["Material.032"]}
              />
            )}
            {nodes.Book0_8?.geometry && materials["Material.033"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_8.geometry}
                material={materials["Material.033"]}
              />
            )}
            {nodes.Book0_9?.geometry && materials["Material.034"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_9.geometry}
                material={materials["Material.034"]}
              />
            )}
            {nodes.Book0_10?.geometry && materials["Material.035"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_10.geometry}
                material={materials["Material.035"]}
              />
            )}
            {nodes.Book0_11?.geometry && materials["Material.036"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_11.geometry}
                material={materials["Material.036"]}
              />
            )}
            {nodes.Book0_12?.geometry && materials["Material.037"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_12.geometry}
                material={materials["Material.037"]}
              />
            )}
            {nodes.Book0_13?.geometry && materials["Material.038"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_13.geometry}
                material={materials["Material.038"]}
              />
            )}
            {nodes.Book0_14?.geometry && materials["Material.039"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_14.geometry}
                material={materials["Material.039"]}
              />
            )}
            {nodes.Book0_15?.geometry && materials["Material.040"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_15.geometry}
                material={materials["Material.040"]}
              />
            )}
            {nodes.Book0_16?.geometry && materials["Material.041"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_16.geometry}
                material={materials["Material.041"]}
              />
            )}
            {nodes.Book0_17?.geometry && materials["Material.042"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_17.geometry}
                material={materials["Material.042"]}
              />
            )}
            {nodes.Book0_18?.geometry && materials["Material.043"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_18.geometry}
                material={materials["Material.043"]}
              />
            )}
            {nodes.Book0_19?.geometry && materials["Material.044"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_19.geometry}
                material={materials["Material.044"]}
              />
            )}
            {nodes.Book0_20?.geometry && materials["Material.045"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_20.geometry}
                material={materials["Material.045"]}
              />
            )}
            {nodes.Book0_21?.geometry && materials["Material.046"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_21.geometry}
                material={materials["Material.046"]}
              />
            )}
            {nodes.Book0_22?.geometry && materials["Material.047"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_22.geometry}
                material={materials["Material.047"]}
              />
            )}
            {nodes.Book0_23?.geometry && materials["Material.048"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_23.geometry}
                material={materials["Material.048"]}
              />
            )}
            {nodes.Book0_24?.geometry && materials["Material.049"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_24.geometry}
                material={materials["Material.049"]}
              />
            )}
            {nodes.Book0_25?.geometry && materials["Material.050"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_25.geometry}
                material={materials["Material.050"]}
              />
            )}
            {nodes.Book0_26?.geometry && materials["Material.051"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_26.geometry}
                material={materials["Material.051"]}
              />
            )}
            {nodes.Book0_27?.geometry && materials["Material.052"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_27.geometry}
                material={materials["Material.052"]}
              />
            )}
            {nodes.Book0_28?.geometry && materials["Material.053"] && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Book0_28.geometry}
                material={materials["Material.053"]}
              />
            )}
          </group>
          {nodes.Sphere?.geometry && materials.Eye && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere.geometry}
              material={materials.Eye}
              position={[3.261, 4.323, 2.907]}
              rotation={[Math.PI / 2, 0, 2.935]}
              scale={0}
            />
          )}
          {nodes.Cube008?.geometry && materials.Body && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008.geometry}
              material={materials.Body}
              position={[3.26, 4.246, 2.941]}
              rotation={[Math.PI / 2, 0, 2.935]}
              scale={0}
            />
          )}
          {nodes.Plane?.geometry && materials.rubber && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane.geometry}
              material={materials.rubber}
              position={[4.708, 4.118, 2.352]}
              rotation={[3.05, -0.051, 1.266]}
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
          )}
          {nodes["02LP"]?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["02LP"].geometry}
              material={materials.lamp_base}
              position={[-3.126, 2.724, -2.542]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes["03LP"]?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["03LP"].geometry}
              material={materials.lamp_base}
              position={[-3.066, 2.742, -2.497]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Box009?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box009.geometry}
              material={materials.lamp_base}
              position={[-3.398, 2.222, -2.747]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Box024?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box024.geometry}
              material={materials.lamp_base}
              position={[-3.195, 2.726, -2.593]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Box055?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box055.geometry}
              material={materials.lamp_base}
              position={[-3.279, 1.741, -2.658]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Box060?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box060.geometry}
              material={materials.lamp_base}
              position={[-3.235, 1.71, -2.624]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Box061?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box061.geometry}
              material={materials.lamp_base}
              position={[-3.413, 2.301, -2.759]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Box062?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box062.geometry}
              material={materials.lamp_base}
              position={[-3.456, 2.194, -2.791]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Box063?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box063.geometry}
              material={materials.lamp_base}
              position={[-3.293, 1.756, -2.668]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder001_1?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_1.geometry}
              material={materials.lamp_base}
              position={[-3.233, 1.632, -2.623]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder002_1?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002_1.geometry}
              material={materials.lamp_base}
              position={[-3.233, 1.632, -2.623]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder003_1?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_1.geometry}
              material={materials.lamp_base}
              position={[-3.271, 1.686, -2.651]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder018?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder018.geometry}
              material={materials.lamp_base}
              position={[-3.158, 2.718, -2.545]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder037?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder037.geometry}
              material={materials.lamp_base}
              position={[-3.281, 2.449, -2.659]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder044?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder044.geometry}
              material={materials.lamp_base}
              position={[-3.096, 2.724, -2.582]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder056?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder056.geometry}
              material={materials.lamp_base}
              position={[-3.09, 2.78, -2.515]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder059?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder059.geometry}
              material={materials.lamp_base}
              position={[-3.078, 2.92, -2.505]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder060?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder060.geometry}
              material={materials.lamp_base}
              position={[-3.023, 2.822, -2.464]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder061?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder061.geometry}
              material={materials.lamp_base}
              position={[-2.971, 2.731, -2.424]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder069?.geometry && materials.base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder069.geometry}
              material={materials.base}
              position={[-3.429, 2.283, -2.733]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder070?.geometry && materials.base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder070.geometry}
              material={materials.base}
              position={[-3.252, 1.797, -2.609]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder071?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder071.geometry}
              material={materials.lamp_base}
              position={[-3.138, 2.718, -2.572]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder072?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder072.geometry}
              material={materials.lamp_base}
              position={[-3.416, 2.275, -2.762]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder073?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder073.geometry}
              material={materials.lamp_base}
              position={[-3.328, 1.963, -2.695]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder074?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder074.geometry}
              material={materials.lamp_base}
              position={[-3.37, 2.221, -2.786]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder075?.geometry && materials.plastik && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder075.geometry}
              material={materials.plastik}
              position={[-3.08, 2.747, -2.47]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder076?.geometry && materials.plastik && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder076.geometry}
              material={materials.plastik}
              position={[-3.04, 2.745, -2.52]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder077?.geometry && materials.base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder077.geometry}
              material={materials.base}
              position={[-3.392, 2.283, -2.782]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cylinder079?.geometry && materials.base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder079.geometry}
              material={materials.base}
              position={[-3.225, 1.797, -2.645]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Helix007?.geometry && (
            <mesh
              castShadow
              receiveShadow
              ref={bulb}
              geometry={nodes.Helix007.geometry}
              
              position={[-2.958, 2.706, -2.414]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            >
              <meshStandardMaterial color={[5, 2, 1]} toneMapped={false}/>
              </mesh>
          )}
          {nodes.LP01?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.LP01.geometry}
              material={materials.lamp_base}
              position={[-3.416, 2.276, -2.761]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.LP01_lowpart?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.LP01_lowpart.geometry}
              material={materials.lamp_base}
              position={[-3.256, 1.737, -2.641]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.LP_01?.geometry && materials.base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.LP_01.geometry}
              material={materials.base}
              position={[-3.056, 2.88, -2.489]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Plane009?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane009.geometry}
              material={materials.lamp_base}
              position={[-3.44, 2.239, -2.759]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Plane011?.geometry && materials.base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane011.geometry}
              material={materials.base}
              position={[-3.306, 2.444, -2.641]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Plane012?.geometry && materials.base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane012.geometry}
              material={materials.base}
              position={[-3.429, 2.282, -2.734]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Plane013?.geometry && materials.lamp_base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane013.geometry}
              material={materials.lamp_base}
              position={[-3.421, 2.239, -2.784]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Plane014?.geometry && materials.base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane014.geometry}
              material={materials.base}
              position={[-3.335, 1.957, -2.673]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Plane015?.geometry && materials.base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane015.geometry}
              material={materials.base}
              position={[-3.252, 1.797, -2.61]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Plane016?.geometry && materials.base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane016.geometry}
              material={materials.base}
              position={[-3.27, 2.444, -2.688]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Plane017?.geometry && materials.base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane017.geometry}
              material={materials.base}
              position={[-3.393, 2.282, -2.782]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Plane020?.geometry && materials.base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane020.geometry}
              material={materials.base}
              position={[-3.308, 1.957, -2.708]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Plane021?.geometry && materials.base && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane021.geometry}
              material={materials.base}
              position={[-3.225, 1.797, -2.645]}
              rotation={[0, 0.923, 0]}
              scale={0.03}
            />
          )}
          {nodes.Cube?.geometry && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube.geometry}
              position={[0.642, 0, -0.839]}
              rotation={[0, 1.045, 0]}
            >
                  <portalMaterial ref={portalMaterial}/>
              </mesh>
          )}
          {/* <Html transform wrapperClass="htmlScreen" distanceFactor={.75} position={[-2.5, 2.3, -.25]} rotation-x={0} rotation-y={1.8} >
          <iframe src="https://www.youtube.com/embed/FB-_FgKLM90?&modestbranding=1&showinfo=0&controls=0&autoplay=1&mute=1&loop=1" scrolling="no" ></iframe>
        </Html> */}
        </group>
      </Center>
    </>
  );
}
useGLTF.preload('./carlsOfficeAug21.gltf');
