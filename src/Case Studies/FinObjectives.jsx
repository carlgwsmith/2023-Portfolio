import {BiChevronRight} from 'react-icons/bi'

export default function Objectives(){
    return(
        <div className="grid grid-cols-6 text-jet bg-background-light py-10 xs:px-10 sm:px-10 md:px-40 gap-10">
            <div className="mt-4 md:col-span-3 sm:col-span-6 col-span-6">
                <h2 className="text-center text-xl font-semibold">Objectives & Goals</h2>
                <ol className="list-decimal mt-4 ml-10 text-sm">
                    <li className='mb-4'>Improve customer service by providing financial advisors with a centralized system for managing customer interactions, storing customer data, and tracking customer satisfaction.</li>
                    <li className='mb-4'>Customer relationship management. The tool should allow financial advisors to store customer data, track customer interactions, and manage customer relationships.</li>
                    <li className='mb-4'>Reporting. The tool should allow financial advisors to track and measure their progress, and to gain insights into their business.</li>
                    <li className='mb-4'>Lead management. The tool should allow financial advisors to track leads, nurture them, and close deals.</li>
                </ol>
            </div>
            <div className="mt-4 md:col-span-3 sm:col-span-6 col-span-6">
            <h2 className="text-center text-xl font-semibold">Business Challenges</h2>
            <ul className='xs:ml-0 md:ml-20 mt-4 text-md font-medium'>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Attracting & Retaining Clients</li>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Managing Risk</li>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Regulatory Compliance</li>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Complex Data Structures</li>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Keeping up with Industry Changes</li>
            </ul>
            </div>

        </div>
    )
}