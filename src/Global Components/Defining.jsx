export default function Defining(props){
    return(
        <div>
            <div className="py-6 grid grid-cols-6 text-jet px-20 sm:px-20 md:px-40 ">
                <div className='m-auto col-start-2 col-span-4 pt-5 pb-5'>
                    <h2 className="text-center font-bold text-3xl text-jet mb-2">Defining the Project</h2>
                    <div className="bg-gradient-to-r from-[#FF3C35] via-[#fbb21b] to-[#ff3c35] h-1  animate-bganimate "></div>
                </div>
                <div className="col-span-6 mb-10">
                    <h2 className="text-lg font-semibold mb-2">Identify:</h2>
                    <p>{props.identify}</p>
                    <h2 className="text-lg font-semibold mb-2 mt-4">Purpose:</h2>
                    <p>{props.purpose}</p>
                    <h2 className="text-lg font-semibold mb-2 mt-4">Features:</h2>
                    <p>
                    {props.features}</p>
                </div>
            </div>
        </div>
    )
}