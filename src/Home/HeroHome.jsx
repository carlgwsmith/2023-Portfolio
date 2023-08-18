import Experience from "../3D/Environment"
import { Canvas } from "@react-three/fiber"
import { useRef, useEffect, useState } from 'react'
function HeroHome(props) {
    const [expWidth, setExpWidth] = useState('800px')
    const [expHeight, setExpHeight] = useState('600px')
    const [fov, setFov] = useState(30)
    const [zoom, setZoom] = useState(1.2)
    const [near, setNear] = useState(0.5)
    const [far, setFar] = useState(120)
    const [position, setPosition] = useState([4.2, .4, 4.75])
    
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const canvasExperience = useRef()
    console.log(canvasExperience)

    // useEffect(() => {
    //     console.log(windowSize.current[0])
    //     if(windowSize.current[0] <= 400){
    //         setExpWidth('300px')
    //         setExpHeight('200px')
    //     }
    //     else if(windowSize.current[0] <= 500){
    //         console.log('smaller')
    //         setExpWidth('400px')
    //         setExpHeight('400px')
    //     }
    //     else if(windowSize.current[0] < 800){
    //         setExpWidth('500px')
    //         setExpHeight('300px')
    //         console.log(canvasExperience)
    //         setFov(40)
    //         setZoom(.5)
    //         setPosition([4, .5, 4])
    //     }
    //     else if(windowSize.current[0] < 1400){
    //         setExpWidth('600px')
    //         setExpHeight('400px')
    //         console.log('small')
    //     }
    //      else{
    //         setExpWidth('800px')
    //         setExpHeight('600px')
    //     }
    // }, [windowSize]);
    return(
        <div className="bg-background-light h-[500px]">
        <div className="modelScene">
        <Canvas shadows ref={canvasExperience} camera={{
    fov: fov,
    zoom: zoom,
    near: near,
    far:far,
    position:position
  }}><Experience/></Canvas>
  </div>
  <div className="interface">
        <div className="xs:px-0 overflow-hidden grid grid-cols-12 min-h-[400px] ease-in-out duration-500  sm:px-10" >
            <div className="xs:col-span-12 sm:col-span-12 sm:mt-14 mdlg:col-span-5 mdlg:m-auto md:col-span-10 md:mt-2 xs:mt-10 xs:mx-5 grid-rows-2">
                <div className="xs:px-4 row-span-1">
                <div className="xs:px-4 xs:text-[42px] sm:text-5xl md:text-6xl md:text-5xl font-extrabold tracking-wider text-jet sm:mt-1 md:mt-10">{props.title}</div>
                <div className="bg-gradient-to-r from-[#FF3C35] via-[#fbb21b] to-[#ff3c35] h-1 animate-bganimate "></div>
                </div>
                <div className="row-span-1">
                <div className="xs: px-4 pt-5">{props.desc}</div>
                </div>
            </div>
            {/* <div className="xs: mt-5 xs: col-span-12 sm:col-span-7 text-center m-auto">
                {props.image ? <img src={props.rightSide}/> : props.rightSide}
            </div> */}
        </div>
        </div>
        </div>
    )
}

export default HeroHome