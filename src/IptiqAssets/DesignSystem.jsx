import Palette from './colors.png'
import ui1 from './Inputs1.png'
import ui2 from './inputs2.png'
import typo from './typo.png'
import Buttons from './buttons.png'



export default function designSystem(){
    return(
        <div className="bg-background-light p-10 pt-6 pb-10 text-jet">
            <div className="grid grid-cols-6 gap-4 align-middle items-center">
                <div className='m-auto col-start-2 col-span-4 pt-5 pb-5'>
                    <h2 className="text-center font-bold text-3xl text-jet mb-3">Design System</h2>
                    <div className="bg-gradient-to-r from-[#FF3C35] via-[#fbb21b] to-[#ff3c35] h-1  animate-bganimate "></div>
                </div>
                <div className="xs:col-span-6 sm:col-span-3">
                    <img src={Palette} width="600px"/>
                </div>
                <div className="xs:hidden sm:block sm:col-span-1">
                    <div className='horizontal-circle m-auto'></div>
                </div>
                <div className='xs:col-span-6 sm:col-span-2'>
                    <h2 className="text-xl font-semibold mb-2">Color Palette</h2>
                    <p>a color palette is a vital aspect of a design system as it helps maintain consistency, establish brand identity, improve accessibility, and streamline the design process.</p>
                </div>
                <div className="xs:col-span-6 sm:col-span-3">
                    <img src={Buttons} width="600px"/>
                </div>
                <div className='xs:hidden sm:block sm:col-span-1'>
                    <div className='horizontal-circle m-auto'></div>
                </div>
                <div className='xs:col-span-6 sm:col-span-2'>
                    <h2 className="text-xl font-semibold mb-2">Buttons</h2>
                    <p>buttons have a consistent style, size, and placement, users can quickly understand how to navigate the product.</p>
                </div>
                <div className="xs:col-span-6 sm:col-span-3">
                    <img src={typo} width="600px"/>
                </div>
                <div className='xs:hidden sm:block sm:col-span-1'>
                    <div className='horizontal-circle m-auto'></div>
                </div>
                <div className='xs:col-span-6 sm:col-span-2'>
                    <h2 className="text-xl font-semibold mb-2">Typography & Iconography</h2>
                    <p>Type has a consistent style, size, and hierarchy. Using larger text for call to actions, smaller size for body to create a sense of structure. Consistent space between headings, body, and around images create visual separation. The creation of a typography system helps improve the overall usability and design.
                    <br/><br/>
                    The iconography in this project is meant to be modern but familiar, designed to be consistent with the overall theme.</p>
                </div>
                <div className='xs:col-span-6 sm:col-start-2 sm:col-span-4 mt-4'>
                    <h2 className="text-xl font-semibold mb-2 text-center">Input Components</h2>
                     <p className='mt-4'>Each input component has a consistent design crafted for flexibility and reusability. There are defined states that allow users to clearly identify their input selection with visual feedback. The components allow for scalability for added features.</p>
                </div>
                <div className='xs:col-span-6 sm:col-span-6'>
                    <img src={ui2}/>
                </div>
            </div>
        </div>
    )
}