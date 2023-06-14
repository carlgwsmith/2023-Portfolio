import HeroHome from './HeroHome'
import FeaturedWork from "./FeaturedWork"
import Scrolling from "./Scrolling"
import Experience from "../3D/Environment"
import { Canvas } from "@react-three/fiber"
import { useRef, useEffect, useState } from 'react'

export default function Home(){
    const [expWidth, setExpWidth] = useState('800px')
    const [expHeight, setExpHeight] = useState('600px')
    
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        console.log(windowSize.current[0])
        if(windowSize.current[0] <= 500){
            console.log('smaller')
            setExpWidth('400px')
            setExpHeight('400px')
        }
        else if(windowSize.current[0] < 800){
            setExpWidth('500px')
            setExpHeight('300px')
        }
        else if(windowSize.current[0] < 1400){
            setExpWidth('600px')
            setExpHeight('400px')
            console.log('small')
        }
         else{
            setExpWidth('800px')
            setExpHeight('600px')
        }
    }, [windowSize]);
    return(
        <>
        <HeroHome title="Carl G.W. Smith" desc="I’m Carl, a senior product designer and creative developer.
I design and implement thoughtful and easy to use experiences for companies with complex problems." rightSide={<Canvas style={{width: expWidth, height: expHeight, overflow:'hidden'}} camera={{
    fov: 60,
    zoom: 1.45,
    near: 0.1,
    far:100,
    position:[2 , 1, 6]
  }}><Experience/></Canvas>}/>
        <Scrolling/>
        <FeaturedWork cardMargin="mt-16" title="Featured Work"/>
        </>
    )
}