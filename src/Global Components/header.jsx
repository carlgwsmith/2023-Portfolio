function Header(){
    return(
        <div className="bg-white flex border-b-2 p-4 mb-3">
            <div className="grid grid-rows-1 grid-cols-2 gap-4">
                <div className="text-xl font-bold tracking-tighter">CGWS</div>
                <div className="float-right">
                <div className="grid grid-cols-4 gap-4">
                    <div>Home</div>
                    <div>Resume</div>
                    <div>Portfolio</div>
                    <div>Contact</div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Header