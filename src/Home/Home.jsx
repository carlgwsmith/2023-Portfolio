import HeroHome from './HeroHome'
import FeaturedWork from "./FeaturedWork"
import Scrolling from "./Scrolling"
import Experience from "../3D/Environment"
import { Canvas } from "@react-three/fiber"
export default function Home(){
    return(
        <>
        <HeroHome title="Carl G.W. Smith" desc="I’m Carl, a senior product designer and creative developer.
I design and implement thoughtful and easy to use experiences for companies with complex problems." rightSide={<Canvas style={{width: '800px', height: '600px'}} camera={{
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