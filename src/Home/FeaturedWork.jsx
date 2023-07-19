import WorkCard from "../Home/WorkCard"
import { Link } from "react-router-dom"

export default function FeaturedWork(props){

    const studyBtn = {
        padding:'10px',
        borderRadius: '4px'
    }
    return(
        <div className="m-auto grid grid-cols-3 mt-16 mb-28">
            <div className="m-auto col-start-2">
            <h2 className="text-center font-bold text-3xl text-jet">{props.title}</h2>
        <div className="bg-gradient-to-r from-[#FF3C35] via-[#fbb21b] to-[#ff3c35] h-1  animate-bganimate "></div>
            </div>
            <div className="col-span-3 m-auto">
                <div className="grid grid-cols-auto sm:grid-cols-1 mdlg:grid-cols-3 gap-6 items-center mt-10">
                    <div className={props.cardMargin}>
                    <WorkCard
                        featuredImg="/AgentXploreFeatureImage.png"
                        projName="Agentxplore"
                        projDesc="A design case study for an insurance agent search tool that allows users to find professionals that match their specific needs."
                        buttonCTA="View AgentXplore Study"
                        buttonLink={`/portfolio/agentxplore#top`}
                    />
                    </div>
                    <div>
                    <WorkCard
                        featuredImg="/FinaryFeatureImage.png"
                        projName="Finary"
                        projDesc="A design case study for an financial advisor CRM to track client’s progress and analyze their needs and goals."
                        buttonCTA="View Finary Study"
                        buttonLink={`/portfolio/finary#top`}
                    />
                    </div>
                    <div className={props.cardMargin}>
                    <WorkCard
                        featuredImg="/iptiqEappFeatureImage.png"
                        projName="IptiQ E-App"
                        projDesc="A case study for an insurance agent electronic application tool that allows users to input and apply for insurance products."
                        buttonCTA="View iptiQ Study"
                        buttonLink={`/portfolio/iptiq`}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}