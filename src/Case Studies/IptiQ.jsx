import Hero from '../Home/Hero'
import HeroImg from '../IptiqAssets/imaciptiq.png'
import CaseStudyDescBar from './CaseStudyDescBar'
import Objectives from './IptiqObjectives'
import Process from './Process'
import Research from './Research'

export default function IptiQ (){
    return(
        <div>
           <Hero title="IptiQ E-App" desc="The IptiQ Electronic insurance applications are designed to make the process of applying for insurance easier and more efficient for both consumers and insurance companies. They allow consumers to complete their applications online, at their convenience, and without having to mail in any paperwork saving consumers time, money, and it can also help to reduce the risk of errors in the application process." rightSide={HeroImg} image='true'/>
            <CaseStudyDescBar year="2022" role="Product Designer, Developer" duration="1 Yr"/>
            <Objectives/>
            <Process/>
            <Research content={<div><p className='mb-10'>The need for an internal e-application came from the need to remove reliance on a third party, improve user experience, and be more agile with new features while growing business. A deep analysis of the previous e-application was taken and critiqued. External analysis of competitor products were conducted by our competitive audit team. </p></div>}/>
        </div>
    )
}