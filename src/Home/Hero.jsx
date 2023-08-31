function Hero(props) {

    return(
        <>
        <div className="grid grid-cols-12 min-h-[400px] ease-in-out duration-500 bg-background-light xs:px-10 sm:px-10 md:px-40">
            <div className="xs: col-span-12 sm:col-span-6 m-auto grid-rows-2">
                <div className="row-span-1">
                <div className="iphone:text-2xl xs: mt-10 xs: text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wider text-jet sm:mt-0">{props.title}</div>
                <div className="bg-gradient-to-r from-[#FF3C35] via-[#fbb21b] to-[#ff3c35] h-1 animate-bganimate "></div>
                </div>
                <div className="row-span-1">
                <div className="pt-5">{props.desc}</div>
                </div>
            </div>
            <div className="xs: col-span-12 sm:col-span-6 text-center m-auto">
                {props.image ? <img src={props.rightSide}/> : props.rightSide}
            </div>
        </div>
        </>
    )
}

export default Hero