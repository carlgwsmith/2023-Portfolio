import { useEffect, useState } from "react"
import {HiMenu} from 'react-icons/hi'
import {MdClose} from 'react-icons/md'
import { NavLink, useLocation } from "react-router-dom";

function Header(){

const [navbarOpen, setNavbarOpen] = useState(false);
    
const handleNav = ()=>{
    setNavbarOpen(!navbarOpen)
}


const location = useLocation()
useEffect(() => {
    setNavbarOpen(false)
}, [location]);

const linkStyle= 'm-4 hover:underline'

    return(
        <div className="flex justify-between items-center w-full bg-white border-b-2 py-8 px-10 border-jet h-12 text-jet">
                <div className="w-full text-xl font-bold tracking-tighter text-jet">CGWS</div>
                <ul className="hidden md:flex text-sm ease-in-out duration-500">
                    <li className={linkStyle}> 
                        <NavLink to={`/`}>
                            Home
                        </NavLink>
                    </li>
                    <li className={linkStyle}> 
                        <NavLink to={`portfolio`}>
                            Portfolio
                        </NavLink>
                    </li>
                    <li className={linkStyle}>
                    <NavLink to={`resume`}>
                            Resume
                        </NavLink>
                    </li>
                    <li className={linkStyle}> 
                    <NavLink to={`contact`}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    <HiMenu size={20} navbarOpen={true}/>
                </div>
                <div className={navbarOpen ? 'fixed left-0 top-0 w-[100%] border-right border-r-gray-900 h-full bg-background-light ease-in-out duration-500 z-[9999]' : 'z-[9999] bg-light fixed left-[-100%] ease-in-out duration-500'}>
                    <div className="grid grid-cols-6">
                    <div className="col-span-3 text-xl font-bold tracking-tighter m-4 w-[75%] inline-block">CGWS</div>
                    <div className="col-span-3 p-4 inline-block">
                <MdClose size={20} navbarOpen={false} onClick={handleNav} className="float-right"/>
                </div>
                    </div>
                    <ul className="uppercase">
                        <li className="p-4">
                        <NavLink to={`home`}>Home</NavLink>
                        </li>
                        <li className="p-4">
                            <NavLink to={`portfolio`}>Portfolio</NavLink>
                        </li>
                        <li className="p-4">
                        <NavLink to={`resume`}>Resume</NavLink>
                        </li>
                        <li className="p-4">
                        <NavLink to={`contact`}>Contact</NavLink>
                        </li>
                </ul>
                </div>
        </div>
    )
}
export default Header