import {BiChevronRight} from 'react-icons/bi'

export default function Objectives(){
    return(
        <div className="grid grid-cols-2 text-jet bg-background-light py-5 px-10 gap-4">
            <div className="mt-4">
                <h2 className="text-center text-xl font-semibold">Objectives & Goals</h2>
                <ol className="list-decimal mt-4">
                    <li>Provide an easy-to-use platform for users to search and compare life insurance products offered by different agents.</li>
                    <li>Enable users to easily contact licensed life insurance agents who can provide personalized guidance and advice on choosing the right policy.</li>
                    <li>Provide a forum or community for users to share their experiences with different life insurance providers and agents, and to ask questions or seek advice from other users.</li>
                    <li>Provide a secure platform for users to submit their personal information and receive quotes from different insurance companies.</li>
                </ol>
            </div>
            <div className="mt-4">
            <h2 className="text-center text-xl font-semibold">Business Challenges</h2>
            <ul className='mt-4 text-md font-medium'>
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