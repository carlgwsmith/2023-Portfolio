import {BiSearchAlt, BiBulb, BiVector, BiRepeat, BiCodeAlt} from 'react-icons/bi'
export default function Process(){

    const roundIcon = 'border-solid border-2 border-jet rounded-full p-3 w-fit drop-shadow-md bg-white m-auto'
    const iconName = 'font-medium mt-2'

    return(
        <div className="px-40 py-6 grid grid-cols-6 text-jet">
        <div className='m-auto col-start-2 col-span-4 pt-5 pb-5'>
            <h2 className="text-center font-bold text-3xl text-jet mb-2">Process</h2>
            <div className="bg-gradient-to-r from-[#FF3C35] via-[#fbb21b] to-[#ff3c35] h-1  animate-bganimate "></div>
        </div>
        <div className='col-span-4 col-start-2 pb-5'>
            <div className="grid grid-cols-auto md:grid-cols-5 mt-10 text-center">
                <div>
                    <div className={roundIcon}>
                    <BiSearchAlt size="40px" color="#323031" />
                    </div>
                    <h3 className={iconName}>Research</h3>
                </div>
                <div>
                    <div className={roundIcon}>
                    <BiBulb size="40px" color="#323031"/>
                    </div>
                    <h3 className={iconName}>Define</h3>
                </div>
                <div>
                    <div className={roundIcon}>
                    <BiVector size="40px" color="#323031"/>
                    </div>
                    <h3 className={iconName}>Design</h3>
                </div>
                <div>
                    <div className={roundIcon}>
                    <BiRepeat size="40px" color="#323031"/>
                    </div>
                    <h3 className={iconName}>Ideate</h3>
                </div>
                <div>
                    <div className={roundIcon}>
                    <BiCodeAlt size="40px" color="#323031"/>
                    </div>
                    <h3 className={iconName}>Develop</h3>
                </div>
            </div>
        </div>
    </div>
    )
}