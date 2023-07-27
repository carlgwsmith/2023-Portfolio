function HeroHome(props) {
   
    return(
        <>
        <div className="xs: px-0 overflow-hidden grid grid-cols-12 min-h-[400px] ease-in-out duration-500 bg-background-light sm:px-10" >
            <div className="xs: col-span-12 sm:col-span-5 m-auto grid-rows-2">
                <div className="xs: px-4 row-span-1">
                <div className="xs: px-4 xs: text-5xl sm:text-5xl md:text-6xl font-extrabold tracking-wider text-jet mt-10">{props.title}</div>
                <div className="bg-gradient-to-r from-[#FF3C35] via-[#fbb21b] to-[#ff3c35] h-1 animate-bganimate "></div>
                </div>
                <div className="row-span-1">
                <div className="xs: px-4 pt-5">{props.desc}</div>
                </div>
            </div>
            <div className="xs: mt-5 xs: col-span-12 sm:col-span-7 text-center m-auto">
                {props.image ? <img src={props.rightSide}/> : props.rightSide}
            </div>
        </div>
        </>
    )
}

export default HeroHome