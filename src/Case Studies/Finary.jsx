import Hero from '../Home/Hero'
import HeroImg from '../assets/finary-hero.png'
import CaseStudyDescBar from './CaseStudyDescBar'
import Objectives from './FinObjectives'
import Process from './Process'
import Persona from '../Global Components/UserPersona'
import Research from './Research'
import persona1 from '../assets/agents-user1.png'
import userFlow from '../assets/UserFlow.png'
import Defining from '../Global Components/Defining'
import DesignSystem from '../FinaryAssets/DesignSystem'
import Mockups from '../FinaryAssets/Mockups'
export default function Finary (){
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
    content:'To grow his client base and provide them with the best possible financial advice.'},
    {id: 2,
    content:'He is passionate about helping people achieve their financial goals.'},
    {id: 3,
    content:'He is always looking for new ways to improve his skills and knowledge.'}
    ]



    const pain1 =[
    {id: 1, 
    content:'Finding the time to meet with clients, and keeping track of all of his client data.'},
    {id: 2,
    content:`It takes time and effort to build a network and gain a reputation as a trusted advisor.`},

    ]



    const challenge1 = [
    {id: 1, 
    content:'To stay up-to-date on the latest financial news and trends, and to manage his time effectively.'},
    {id: 2,
    content:'John doesn’t feel his is most efficient about his time management'},
    {id: 3,
    content:'John has trouble keeping track of all of his clients data.'}
    ]


    const solutions1 =
    [
        {id: 1, 
        content:'A CRM tool can help John to stay informed about the latest financial news and trends. This can help him to provide his clients with the best possible advice.'},
        {id: 2,
        content:'A CRM tool can help John to store and organize all of his client data in one place. This can help him to easily access the information he needs when he needs it.'},
        {id: 3,
        content:'A CRM tool can help John keep track of his appointments, tasks, and deadlines. This can help him to be more efficient and productive.'}
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
            <Hero title="Finary CRM" desc="This application assists financial advisors and representatives in tracking customer interactions, managing data, engagement and performance of their financial portfolio.  The tool is intended to improve customer service and increase an advisors book of business." rightSide={HeroImg} image='true' id="top"/>
            <CaseStudyDescBar year="2023" role="Product Designer, Developer" duration="4 mos"/>
            <Objectives/>
            <Process/>
            <Research content={<div><p>We began the research process by conducting user research. We looked up potential users of the tool to understand their needs and pain points. We also analyzed data from existing financial advisor CRMs to get a sense of the market.</p>
                    <p className="mt-5">Based on our research, we developed a set of user personas. These personas represent the different types of users who would use the tool. We used the personas to guide our design decisions.</p>
                    <p className="mt-5">We then created wireframes and prototypes of the tool.</p></div>}/>
            <Persona
            pic={persona1}
            name="John Smith"
            title="Financial Advisor"
            city="New York, NY"
            age="35"
            motivations={motivations1}
            goals={goals1}
            pain={pain1}
            challenges={challenge1}
            solutions={solutions1}
            benefits={benefits1}
            isFlow="true"
            flowSrc={userFlow}
            />
            <Defining
            identify="a CRM system can be a valuable tool for financial advisors in a number of ways. By helping to track client interactions, automate tasks, generate reports, and comply with regulations, a CRM system can help financial advisors improve their service, increase their efficiency, and reduce their risk."
            purpose="A CRM can help financial advisors build stronger relationships with their clients by keeping track of their interactions and preferences. This information can be used to personalize communications and provide more relevant advice, increase profitability, and increase efficency."
            features="The CRM should be able to track client interaction, performance and relationships. The CRM should be able to generate a report and insights to show the consumer their performance and give the advisor the position of subject matter expert."/>
            <DesignSystem/>
            <Mockups/>
        </div>
    )
}