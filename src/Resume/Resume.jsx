export default function Resume(){
    return(
    <div>
        <div className="grid grid-cols-12 min-h-[200px] ease-in-out duration-500 bg-white px-4">
        <div className="col-span-12 m-auto grid-rows-2">
            <h1 className="text-4xl font-bold tracking-wide">Carl G.W. Smith</h1>
            <div className="bg-gradient-to-r from-[#FF3C35] via-[#fbb21b] to-[#ff3c35] h-1 animate-bganimate "></div>
            <h1 className="text-xl mt-2 tracking-wide text-center font-bold uppercase">Creative Developer</h1>
            </div>
        </div>
        <div className="grid grid-cols-12 min-h-[200px] ease-in-out duration-500 bg-background-light">
        <div className="sm: col-span-12 mdlg:col-span-6  sm: px-20 sm: py-20 sm: gap-20">
            <h2 className="font-bold uppercase text-2xl">Experience</h2>
            <div className="mt-5">
                <h3 className="text-lg font-semibold">Senior Software Engineer</h3>
                <h4 className="text-base text-gray-500">T. Rowe Price</h4>
                <h4 className="text-base text-gray-500">June 2022 - Current</h4> 
                <p className="text-sm pt-2">Design and engineer UI for enterprise financial software using ReactJS, VueJS and more.</p>
            </div>
            <div className="mt-5">
                <h3 className="text-lg font-semibold">Product Design Lead</h3>
                <h4 className="text-base text-gray-500">Iptiq by Swiss Re</h4>
                <h4 className="text-base text-gray-500">Boston, MA | February 2022 - June 2023</h4> 
                <p className="text-sm pt-2">Lead product design team in maintaining global design system, creating new product design requirements, areas of opportunity, implementing design in development environments (Unqork, Angular).</p>
            </div>
            <div className="mt-5">
                <h3 className="text-lg font-semibold">Senior UX & UI Designer / Developer</h3>
                <h4 className="text-base text-gray-500">Social Security Solutions</h4>
                <h4 className="text-base text-gray-500">Kansas City, KS | September 2019 - February 2022</h4>
                <p className="text-sm pt-2">Competitive audits, user journeys, wireframes, prototypes and mockups of interactions for our suite of financial software. Usability testing and research. Handing off to development. Develop UI in VueJs.</p>
            </div>
            <div className="mt-5">
                <h3 className="text-lg font-semibold">Lead Web & Graphic Designer</h3>
                <h4 className="text-base text-gray-500">Legacy Financial Partners</h4>
                <h4 className="text-base text-gray-500">Topeka, KS | March 2012 - September 2019</h4>
                <p className="text-sm pt-2">Full service marketing agency for Independent Life Insurance and Annuity Agents.
                <br/><br/>
                Motivate and manage a team of creatives. Create functional and accessible websites, develop print and digital collateral, troubleshoot SaSS technical issues develop proprietary applications, brand development remain flexible.
                </p>
            </div>
        </div>
        <div className="sm: col-span-12 mdlg:col-span-6 sm: px-20 sm: py-20 sm: gap-20">
            <h2 className="font-bold uppercase text-2xl">Education</h2>
            <div className="mt-5">
                <h3 className="text-lg font-semibold">Master of Professional Studies</h3>
                <h4 className="text-base text-gray-500">Web & Mobile Application Development</h4>
                <h4 className="text-base text-gray-500">Fort Hays State University | 2021</h4>
                <p className="text-sm pt-2">Gained expert knowledge in frontend and backend web development utilizing the latest technology for building desktop and mobile application. Database design and programming, research methods, human computer interaction, law of cyberspace.</p>
            </div>
            <div className="mt-5">
                <h3 className="text-lg font-semibold">Bachelor of Fine Arts</h3>
                <h4 className="text-base text-gray-500">Digital & Graphic Design</h4>
                <h4 className="text-base text-gray-500">Washburn University | 2017</h4>
                <p className="text-sm pt-2">Gained expert knowledge in digital and print media using industry standard tools and technology. Sharpened skills in typography, color theory, accessibility, history of design, modern trends and use of software</p>
            </div>
            <div className="mt-5">
                <h3 className="text-lg font-semibold">UX Professional Certificate</h3>
                <h4 className="text-base text-gray-500">Google Certificates | 2021</h4>
                <p className="text-sm pt-2">Foundations of UX design, including empathizing with users, building wireframes and prototypes, and conducting research to test designs. Practice in user-centered design, the design process, and accessibility.
                </p>
            </div>
            <div className="mt-5">
                <h3 className="text-lg font-semibold">Data Visualization Specialization Certificate</h3>
                <h4 className="text-base text-gray-500">NYU Tandon | 2022</h4>
                <p className="text-sm pt-2">Foundations of Data Visualization, Best practices for communicating business-relevant data analyses using various technology. Developing visualizations using D3.js and other tools.
                </p>
            </div>
        </div>
        </div>
        <div className="grid grid-cols-12 min-h-[200px] ease-in-out duration-500 bg-white">
            <div className="xs: col-span-12 mdlg:col-span-6 sm: px-20 sm: py-20 sm: gap-20">
                <h2 className="font-bold uppercase text-2xl">Hard Skills</h2>
                <ul className="list-none">
                    <li>HTML</li>
                    <li>CSS (SCSS, SASS, Styled Components, Quasar, Tailwind)</li>
                    <li>JS (ES6, JSX, VueJS, React, Native, Angular)</li>
                    <li>Adobe Creative Suite</li>
                    <li>Figma</li>
                    <li>CMS (Hubspot CMS, Wordpress, Unqork)</li>
                </ul>
            </div>
            <div className="xs: col-span-12 sm:col-span-6 sm: px-20 sm: py-20 sm: gap-20">
                <h2 className="font-bold uppercase text-2xl">Soft Skills</h2>
                <ul className="list-none">
                    <li>User & Accessibilty Focused</li>
                    <li>Diligent and Timely</li>
                    <li>Responsive to Criticism</li>
                    <li>Team Forward</li>
                    <li>Holistically Empathetic</li>
                    <li>Open & Adaptive</li>
                </ul>
            </div>

        </div>
    </div>)
}