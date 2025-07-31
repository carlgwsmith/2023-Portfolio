import { useThree } from "@react-three/fiber";
import { PresentationControls, Float } from "@react-three/drei";
import Model from "./model";
import { Suspense } from "react";
import Placeholder from "./placeholder";

export default function Experience() {
    const { camera, gl } = useThree();

    return (
        <>
            <directionalLight position={[1, 2, 1]} intensity={1.5} />
            <ambientLight intensity={0.75} />

            <Suspense
                fallback={
                    <Placeholder position-x={0.8} scale={[0.75, 0.75, 0.75]} />
                }
            >
                <PresentationControls
                    global
                    anchor={[0.3, 0.4, 0]} // Move anchor slightly right on X axis
                    rotation={[0, 3.5, 0]}
                    polar={[-Math.PI / 14, Math.PI / 14]} // Allow up/down drag (±30°)
                    azimuth={[-Math.PI / 2, Math.PI / 2]} // Allow 180° left/right drag
                    config={{ mass: 1, tension: 1000 }} // Higher tension, snappier
                    snap={{ mass: 2, tension: 300 }} // Smoother snap-back
                >
                    <Float
                        rotationIntensity={0.4}
                        floatingRange={0.8}
                        floatIntensity={0.1}
                    >
                        <Model />
                    </Float>
                </PresentationControls>
            </Suspense>
        </>
    );
}