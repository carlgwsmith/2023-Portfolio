export default function CaseStudyDescBar(props){
    return(
        <div className="grid grid-cols-3 text-center text-jet m-auto justify-center my-6">
            <div className="p-4 justify-center justify-self-center my-auto">
                <p className="font-bold">Year:</p>
                {props.year}
            </div>
            <div className="p-4 justify-center justify-self-center my-auto">
                <p className="font-bold">Role:</p>
                {props.role}
            </div>
            <div className="p-4 justify-center justify-self-center my-auto">
                <p className="font-bold">Duration:</p>
                {props.duration}
            </div>
        </div>
    )
}