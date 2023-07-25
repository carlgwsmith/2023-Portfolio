import Hero from '../Home/Hero'
import HeroImg from '../IptiqAssets/imaciptiq.png'
import CaseStudyDescBar from './CaseStudyDescBar'
import Objectives from './IptiqObjectives'
import Process from './Process'
import Research from './Research'
import Persona from '../Global Components/UserPersona'
import persona1 from '../assets/agents-user1.png'
import Defining from '../Global Components/Defining'
import DesignSystem from '../IptiqAssets/DesignSystem'
import Mockups from '../IptiqAssets/Mockups'
export default function IptiQ (){
    const motivations1 = 
    [
    {id: 1, 
    content:'To help his clients achieve their financial goals, and to be successful in his career.'},
    {id: 2,
    content:'To maintain clients and grow his book of business by creating an edge.'},
    ]


    
    const goals1 =
    [
    {id: 1, 
    content:'Wants to streamline their practice to save time and and the process for their clients.'},
    {id: 2,
    content:'Wants to be able to provide their clients with more accurate quotes and coverage options.'},
    {id: 3,
    content:'Would like a centralized location to find pending and in-process applications.'}
    ]



    const pain1 =[
    {id: 1, 
    content:'Finds their current workflow time-consuming and inefficent.'},
    {id: 2,
    content:`Finds manually entry error prone and spends a lot of time comparing quotes and policy options.`},

    ]



    const challenge1 = [
    {id: 1, 
    content:'Wants the process to be easier to use and to get help if needed.'},
    {id: 2,
    content:'Expects secure functionality that is easily accessible.'},
    {id: 3,
    content:'Wants to be able to hand off to the insurance company easier.'}
    ]


    const solutions1 =
    [
        {id: 1, 
        content:'An insurance application that is easy-to-use.'},
        {id: 2,
        content:'A portal which they can see their progress, completed work and pending applications.'},
        {id: 3,
        content:'Quick and accurate policy options and quotes.'}
        ]


    const benefits1 =[
        {id: 1, 
        content:'Peace of mind by providing a secure option directly managed by the insurance company, no third parties.'},
        {id: 2,
        content:'The confidence that he is getting the best possible policy for his needs'},
        {id: 3,
        content:'The ability to save money on life insurance for their clients by shopping different options.'}
        ]
    return(
        <div>
           <Hero title="IptiQ E-App" desc="The IptiQ Electronic insurance applications are designed to make the process of applying for insurance easier and more efficient for both consumers and insurance companies. They allow consumers to complete their applications online, at their convenience, and without having to mail in any paperwork saving consumers time, money, and it can also help to reduce the risk of errors in the application process." rightSide={HeroImg} image='true'/>
            <CaseStudyDescBar year="2022" role="Product Designer, Developer" duration="1 Yr"/>
            <Objectives/>
            <Process/>
            <Research content={<div><p className='mb-10'>The need for an internal e-application came from the need to remove reliance on a third party, improve user experience, and be more agile with new features while growing business. A deep analysis of the previous e-application was taken and critiqued. External analysis of competitor products were conducted by our competitive audit team. </p></div>}/>
            <Persona
            pic={persona1}
            name="John Smith"
            title="Insurance Agent"
            city="Denver, CO"
            age="42"
            motivations={motivations1}
            goals={goals1}
            pain={pain1}
            challenges={challenge1}
            solutions={solutions1}
            benefits={benefits1}
            />
            <Defining
            identify="Online applications allow you to apply for insurance at any time, from anywhere. You can also save time by completing the application online, rather than having to visit an insurance agent in person."
            purpose="Online applications can be processed more quickly than traditional applications. This is because the information is entered directly into the insurance company's system, rather than being sent through a third party."
            features="Online applications are more efficient for both the insurance company and the applicant. The insurance company can save money on processing costs, and the applicant can save time and hassle."/>
            <DesignSystem/>
            <Mockups/>
        </div>
    )
}