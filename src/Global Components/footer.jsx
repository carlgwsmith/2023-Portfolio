import {BsDribbble, BsLinkedin, BsGithub} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

export default function Footer(){
    return(
        <div className="left-0 bottom-0 mt-10 pb-4 w-full bg-background-light text-jet">
            <div className="p-10 bg-background-light grid grid-cols-6">
                <div className='m-auto col-start-2 col-span-4 pt-5 pb-5'>
                    <h2 className="text-center font-bold text-3xl text-jet">Check me out elsewhere</h2>
                    <div className="bg-gradient-to-r from-[#FF3C35] via-[#fbb21b] to-[#ff3c35] h-1  animate-bganimate "></div>
                </div>
                <div className='col-span-4 col-start-2 pb-5'>
                    <div className="grid grid-cols-auto md:grid-cols-3 mt-10 text-center">
                        <div>
                            <a href="" className='hover:underline'><BsDribbble size={20} style={{display:'inline-block'}}/> Dribbble</a>
                        </div>
                        <div>
                            <a href="" className='hover:underline'><BsLinkedin size={20} style={{display:'inline-block'}}/> LinkedIn</a>
                        </div>
                        <div>
                            <a href="" className='hover:underline'><BsGithub size={20} style={{display:'inline-block'}}/> GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center bg-[#fff] w-full p-4 border-y-[2px] border-solid border-jet text-sm font-semibold text-jet'>
                &copy; 2023 <RxDotFilled size={14} className="inline-block"/> Carl G.W. Smith 
            </div>
        </div>
    )
}