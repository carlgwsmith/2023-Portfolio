import mock1 from '../FinaryAssets/mock1.png'
import mock2 from '../FinaryAssets/mock2.png'
import mock3 from '../FinaryAssets/mock3.png'

export default function Mockups(){
    return(
        <div className="bg-white p-10 pt-6 pb-10 text-jet">
            <div className="grid grid-cols-6 gap-4 align-middle items-center">
                <div className='m-auto col-start-2 col-span-4 pt-5 pb-5'>
                    <h2 className="text-center font-bold text-3xl text-jet mb-3">Mockups & Prototypes</h2>
                    <div className="bg-gradient-to-r from-[#FF3C35] via-[#fbb21b] to-[#ff3c35] h-1  animate-bganimate "></div>
                </div>
                <div className="col-start-2 col-span-4">
                <p className='mb-10'>When designing, we needed to take account for not only the desktop view but the mobile view as well. We also had to take into account how the application would look from the perspective of both the searcher vs. the agent. There we are a set of key features that I wanted to included like customer reviews, and contextual search. </p>
                </div>
                <div className="col-span-6 text-center mt-10">
                <h2 className="text-xl font-semibold mb-2">Home Page</h2>
                    <img src={mock1} className='m-auto'/>
                </div>
                <div className="col-span-6 text-center mt-10">
                <h2 className="text-xl font-semibold mb-2">Client View</h2>
                    <img src={mock2} className='m-auto'/>
                </div>
                <div className="col-span-6 text-center mt-10">
                <h2 className="text-xl font-semibold mb-2">Quick Analysis</h2>
                    <img src={mock3} className='m-auto'/>
                </div>
            </div>
        </div>
    )
}