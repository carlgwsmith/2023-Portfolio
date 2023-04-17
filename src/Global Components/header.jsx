import { useState } from "react"
import {HiMenu} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'

function Header(){

const [navbarOpen, setNavbarOpen] = useState(false);
    
const handleNav = ()=>{
    setNavbarOpen(!navbarOpen)
}


    return(
        <div className="flex justify-between items-center max-w-[1240px] bg-white border-b-2 p-4 mb-3 border-gray-900 h-12">
                <div className="w-full text-xl font-bold tracking-tighter">CGWS</div>
                <ul className="hidden md:flex">
                    <li className="p-4">Portfolio</li>
                    <li className="p-4">Home</li>
                    <li className="p-4">Contact</li>
                    <li className="p-4">Resume</li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    <HiMenu size={20} navBarOpen={true}/>
                </div>
                <div className={navbarOpen ? 'fixed left-0 top-0 w-[100%] border-right border-r-gray-900 h-full bg-gray-100 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <div className="grid grid-cols-6">
                    <div className="col-span-3 text-xl font-bold tracking-tighter m-4 w-[75%] inline-block">CGWS</div>
                    <div className="col-span-3 p-4 inline-block">
                <AiOutlineClose size={20} navBarOpen={false} onClick={handleNav} className="float-right"/>
                </div>
                    </div>
                    <ul className="uppercase">
                        <li className="p-4">Portfolio</li>
                        <li className="p-4">Home</li>
                        <li className="p-4">Contact</li>
                        <li className="p-4">Resume</li>
                </ul>
                </div>
        </div>
    )
}
export default Header