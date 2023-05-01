import {BsDribbble, BsLinkedin, BsGithub} from 'react-icons/bs'

export default function Footer(){
    return(
        <div className="my-10 w-full bg-background-light">
            <div className="p-10 bg-background-light">
                <h2 className="text-center font-bold text-3xl text-jet">Check me out elsewhere</h2>
                <div className="bg-gradient-to-r from-[#FF3C35] via-[#fbb21b] to-[#ff3c35] h-1  animate-bganimate "></div>
                <div className="grid grid-cols-3 mt-10 text-center">
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
            <div className='text-center bg-[#fff] w-full p-4 border-y-[2px] border-solid border-jet'>
                &copy; 2023 Carl G.W. Smith 
            </div>
        </div>
    )
}