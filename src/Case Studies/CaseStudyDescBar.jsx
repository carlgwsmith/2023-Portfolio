export default function CaseStudyDescBar(props){
    return(
        <div className="sm:text-base md:text-base lg:text-base grid grid-cols-3 text-center text-jet m-auto justify-center my-6 xs:my-4 xs:text-xs/5">
            <div className="sm:p-1 p-4 justify-center justify-self-center my-auto">
                <p className="font-bold">Year:</p>
                {props.year}
            </div>
            <div className="sm:p-1 p-4 justify-center justify-self-center my-auto">
                <p className="font-bold">Role:</p>
                {props.role}
            </div>
            <div className="sm:p-1 p-4 justify-center justify-self-center my-auto">
                <p className="font-bold">Duration:</p>
                {props.duration}
            </div>
        </div>
    )
}