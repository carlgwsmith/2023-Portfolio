import Hero from '../Home/Hero'
import HeroImg from '../assets/agents-hero.png'
import CaseStudyDescBar from './CaseStudyDescBar'
import Objectives from './Objectives'
import Process from './Process'
export default function AgentExplore (){
    return(
        <div>
            <Hero title="AgentXplore" desc="This application assists users in finding an insurance agent near them that suits their particular needs. Agents can also sign up to join the site to gain more visibility and engage with potential new clients." rightSide={HeroImg} image='true' />
            <CaseStudyDescBar year="2023" role="Product Designer, Developer" duration="4 mos"/>
            <Objectives/>
            <Process/>
        </div>
    )
}