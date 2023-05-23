import Hero from "./Hero"
import FeaturedWork from "./FeaturedWork"
import Scrolling from "./Scrolling"
export default function Home(){
    return(
        <>
        <Hero/>
        <Scrolling/>
        <FeaturedWork cardMargin="mt-16" title="Featured Work"/>
        </>
    )
}