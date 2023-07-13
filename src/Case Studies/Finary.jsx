import Hero from '../Home/Hero'
import HeroImg from '../assets/finary-hero.png'
import CaseStudyDescBar from './CaseStudyDescBar'
import Objectives from './FinObjectives'
import Process from './Process'
export default function Finary (){
    return(
        <div>
            <Hero title="Finary CRM" desc="This application assists financial advisors and representatives in tracking customer interactions, managing data, engagement and performance of their financial portfolio.  The tool is intended to improve customer service and increase an advisors book of business." rightSide={HeroImg} image='true' />
            <CaseStudyDescBar year="2023" role="Product Designer, Developer" duration="4 mos"/>
            <Objectives/>
            <Process/>
        </div>
    )
}