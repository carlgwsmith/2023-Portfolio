export default function Research(props){
    return(
        <div className="bg-background-light p-10 pt-6 pb-10 text-jet sm:p-2">
            <div className="grid grid-cols-6">
                <div className='m-auto col-start-2 col-span-4 pt-5 pb-5 xs:col-span-6 xs:col-start-1'>
                    <h2 className="text-center font-bold text-3xl text-jet mb-3">Research</h2>
                    <div className="bg-gradient-to-r from-[#FF3C35] via-[#fbb21b] to-[#ff3c35] h-1 animate-bganimate "></div>
                </div>
            </div>
            <div className="grid grid-cols-6">
                <div className="col-span-full col-start-1 md:col-start-2 md:col-span-4">
                    {props.content}
                </div>
            </div>

        </div>
    )
}