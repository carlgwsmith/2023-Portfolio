import {BiChevronRight} from 'react-icons/bi'

export default function Objectives(){
    return(
        <div className="grid grid-cols-6 text-jet bg-background-light py-10 xs:px-10 sm:px-10 md:px-40 gap-10">
            <div className="mt-4 md:col-span-3 sm:col-span-6 col-span-6">
                <h2 className="text-center text-xl font-semibold">Objectives & Goals</h2>
                <ol className="list-decimal mt-4 text-sm">
                    <li className='mb-4'>Provide an easy-to-use platform for users to search and compare life insurance products offered by different agents.</li>
                    <li className='mb-4'>Enable users to easily contact licensed life insurance agents who can provide personalized guidance and advice on choosing the right policy.</li>
                    <li className='mb-4'>Provide a forum or community for users to share their experiences with different life insurance providers and agents, and to ask questions or seek advice from other users.</li>
                    <li className='mb-4'>Provide a secure platform for users to submit their personal information and receive quotes from different insurance companies.</li>
                </ol>
            </div>
            <div className="mt-4 md:col-span-3 sm:col-span-6 col-span-6">
            <h2 className="text-center text-xl font-semibold">Business Challenges</h2>
            <ul className='xs:ml-0 md:ml-20 mt-4 text-md font-medium'>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Competition</li>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Building Trust</li>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Regulatory Compliance</li>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Complex Data Structures</li>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Keeping up with Industry Changes</li>
            </ul>
            </div>

        </div>
    )
}