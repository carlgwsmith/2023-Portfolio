export default function FeaturedWork(){

    const studyBtn = {
        padding:'10px',
        borderRadius: '4px'
    }
    return(
        <div className="m-auto grid grid-cols-3 mt-16">
            <div className="m-auto col-start-2">
            <h2 className="text-center font-bold text-3xl text-jet">Featured Work</h2>
        <div className="bg-gradient-to-r from-[#FF3C35] via-[#fbb21b] to-[#ff3c35] h-1  animate-bganimate "></div>
            </div>
            <div className="col-span-3 m-auto">
                <div className="grid grid-cols-3 gap-4">
                    <div className="w-[300px] bg-[#F0F7F8] rounded-lg mt-16 border-solid border-jet-light border-2">
                        <div className="grid grid-rows-3">
                            <div className="h-[60%]">feature image</div>
                            <div className="p-5">
                                <div className="text-lg font-semibold">AgentXplore</div>
                                <div className="text-sm">A design case study for an insurance agent search tool that allows users to find professionals that match their specific needs.</div>
                            </div>
                            <div className="text-center p-5">
                               <div className="button border-solid border-jet-light border-2 p-4 text-sm font-semibold rounded-lg bg-[#fff]">View AgentXplore Study</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] bg-jet-light  rounded-lg">proj 2</div>
                    <div className="w-[300px] bg-jet-light rounded-lg mt-16">proj 3</div>
                </div>
            </div>
        </div>
    )
}