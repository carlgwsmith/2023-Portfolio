import {BiChevronRight} from 'react-icons/bi'

export default function IptiqObjectives(){
    return(
        <div className="grid grid-cols-6 text-jet bg-background-light py-10 xs:px-10 sm:px-10 md:px-40 gap-10">
            <div className="mt-4 md:col-span-3 sm:col-span-6 col-span-6">
                <h2 className="text-center text-xl font-semibold">Objectives & Goals</h2>
                <ol className="list-decimal mt-4 ml-10 text-sm">
                    <li className='mb-4'>Improve customer service by providing financial advisors with a centralized system for managing customer interactions, storing customer data, and tracking customers.</li>
                    <li className='mb-4'>Provide more convenience for clients by allowing them to complete their applications online, at your their own pace and time.</li>
                    <li className='mb-4'>Reduce inaccuracies that are often found within traditional paper application through the use of validation.</li>
                    <li className='mb-4'>Offer more security to protect private identifiable information for clients and agents by reducing third parties.</li>
                    <li className='mb-4'>Reduce paper and third party costs by bringing digital applications in-house</li>
                </ol>
            </div>
            <div className="mt-4 md:col-span-3 sm:col-span-6 col-span-6">
            <h2 className="text-center text-xl font-semibold">Business Challenges</h2>
            <ul className='xs:ml-0 md:ml-20 mt-4 text-md font-medium'>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Security</li>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Usability</li>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Regulatory Compliance</li>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Business Ownership/Integration</li>
                <li className='mb-4'><BiChevronRight className='inline -mt-1' size="22px"/> Cost</li>
            </ul>
            </div>

        </div>
    )
}