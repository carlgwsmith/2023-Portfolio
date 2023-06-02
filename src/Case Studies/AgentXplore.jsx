import Persona from '../Global Components/UserPersona'
import Hero from '../Home/Hero'
import HeroImg from '../assets/agents-hero.png'
import CaseStudyDescBar from './CaseStudyDescBar'
import Objectives from './Objectives'
import Process from './Process'
import Research from './Research'
import persona1 from '../assets/agents-user1.png'
import persona2 from '../assets/agents-user2.png'
import Defining from '../Global Components/Defining'
export default function AgentExplore (){

    const motivations1 = 
    [
    {id: 1, 
    content:'Wants to provide financial security for his family in the event of his death'},
    {id: 2,
    content:'Wants to make sure his family is taken care of financially'},
    {id: 3,
    content:'Wants to find a policy that is affordable and meets her needs'}
    ]
    const motivations2 = 
    [
    {id: 1, 
    content:'Wants to provide financial security for his family in the event of his death'},
    {id: 2,
    content:'Wants to make sure his family is taken care of financially'},
    {id: 3,
    content:'Wants to find a policy that is affordable and meets her needs'}
    ]

    
    const goals1 =
    [
    {id: 1, 
    content:'Find the best life insurance policy for his family'},
    {id: 2,
    content:'Get quotes from multiple companies'},
    {id: 3,
    content:'Compare policies and prices'}
    ]

    const goals2 =
    [
    {id: 1, 
    content:'Find the best life insurance policy for his family'},
    {id: 2,
    content:'Get quotes from multiple companies'},
    {id: 3,
    content:'Compare policies and prices'}
    ]

    const pain1 =[
    {id: 1, 
    content:'Not sure where to start when looking for life insuranceFind the best life insurance policy for his family'},
    {id: 2,
    content:`Don't know what questions to ask`},
    {id: 3,
    content:`Don't want to get overwhelmed by the proces`}
    ]

    const pain2 =[
    {id: 1, 
    content:'Not sure where to start when looking for life insuranceFind the best life insurance policy for his family'},
    {id: 2,
    content:`Don't know what questions to ask`},
    {id: 3,
    content:`Don't want to get overwhelmed by the process`}
    ]

    const challenge1 = [
    {id: 1, 
    content:'Finding the time to research life insurance'},
    {id: 2,
    content:'Understanding the different types of life insurance policies'},
    {id: 3,
    content:'Comparing policies and prices'}
    ]

    const challenge2 = [
        {id: 1, 
        content:'Finding the time to research life insurance'},
        {id: 2,
        content:'Understanding the different types of life insurance policies'},
        {id: 3,
        content:'Comparing policies and prices'}
        ]
    const solutions1 =
    [
        {id: 1, 
        content:'A life insurance search tool that can help him find the best policy for his needs'},
        {id: 2,
        content:'A tool that can provide him with quotes from multiple companies'},
        {id: 3,
        content:'A tool that can help him compare policies and prices'}
        ]
    const solutions2 =
    [
        {id: 1, 
        content:'A life insurance search tool that can help him find the best policy for his needs'},
        {id: 2,
        content:'A tool that can provide him with quotes from multiple companies'},
        {id: 3,
        content:'A tool that can help him compare policies and prices'}
        ]

    const benefits1 =[
        {id: 1, 
        content:'Peace of mind knowing that his family is financially secure'},
        {id: 2,
        content:'The confidence that he is getting the best possible policy for his needs'},
        {id: 3,
        content:'The ability to save money on life insurance'}
        ]



    return(
        <div>
            <Hero title="AgentXplore" desc="This application assists users in finding an insurance agent near them that suits their particular needs. Agents can also sign up to join the site to gain more visibility and engage with potential new clients." rightSide={HeroImg} image='true' />
            <CaseStudyDescBar year="2023" role="Product Designer, Developer" duration="4 mos"/>
            <Objectives/>
            <Process/>
            <Research/>
            <Persona
            pic={persona1}
            name="John Smith"
            title="Software Engineer"
            city="San Francisco, CA"
            age="35"
            motivations={motivations1}
            goals={goals1}
            pain={pain1}
            challenges={challenge1}
            solutions={solutions1}
            benefits={benefits1}
            />
            <Persona
            pic={persona2}
            name="Jane D."
            title="Stay at Home Mom"
            city="Kansas City, KS"
            age="45"
            motivations={motivations2}
            goals={goals2}
            pain={pain2}
            challenges={challenge2}
            solutions={solutions2}
            benefits={benefits1}
            />
            <Defining/>
        </div>
    )

    
}