import FeaturedWork from '../Home/FeaturedWork'
import Microprojects from './Microprojects'
export default function Projects (){
    return(
        <div className='min-h-[500px]'>
           <FeaturedWork cardMargin="mt-0" title="Case Studies"/>
           {/* <Microprojects title="Micro Projects"/> */}
           
        </div>
    )
}