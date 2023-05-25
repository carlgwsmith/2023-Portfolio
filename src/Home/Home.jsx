import Hero from "./Hero"
import FeaturedWork from "./FeaturedWork"
import Scrolling from "./Scrolling"
export default function Home(){
    return(
        <>
        <Hero title="Carl G.W. Smith" desc="I’m Carl, a senior product designer and creative developer.
I design and implement thoughtful and easy to use experiences for companies with complex problems." rightSide="placeholder"/>
        <Scrolling/>
        <FeaturedWork cardMargin="mt-16" title="Featured Work"/>
        </>
    )
}