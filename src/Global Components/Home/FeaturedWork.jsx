export default function FeaturedWork(){
    return(
        <div className="m-auto min-h-[200px] grid grid-cols-3">
            <div className="m-auto col-start-2">
            <h2 className="text-center text-xl font-bold">Featured Work</h2>
        <div className="bg-gradient-to-r from-[#FF3C35] via-[#fbb21b] to-[#ff3c35] h-1  animate-bganimate "></div>
            </div>
            <div className="col-span-3 m-auto">
                <div className="grid grid-cols-3 items-center text-center">
                    <div className="w-[300px]">proj 1</div>
                    <div className="w-[300px]">proj 2</div>
                    <div className="w-[300px]">proj 3</div>
                </div>
            </div>
        </div>
    )
}