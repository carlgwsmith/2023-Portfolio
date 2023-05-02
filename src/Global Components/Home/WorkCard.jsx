import { Link } from "react-router-dom";

export default function WorkCard(props){
    return(
        <div className="w-[300px] bg-[#F0F7F8] rounded-lg border-solid border-jet-light border-2">
            <div className="grid">
                <div><img src={props.featuredImg}/></div>
                <div className="p-5">
                    <div className="text-lg font-semibold">{props.projName}</div>
                    <div className="text-sm">{props.projDesc}</div>
                </div>
                <div className="text-center p-5">
                    <Link to={props.buttonLink}>
                        <div className="button border-solid border-jet-light border-2 p-4 text-sm font-semibold rounded-lg bg-[#fff] hover:bg-opacity-40 hover:shadow-md">
                            {props.buttonCTA}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}