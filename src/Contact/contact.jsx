export default function Contact(){

    console.log(import.meta.env.REACT_APP_WEB3FORMS_KEY)

    const inputStyle='p-2 border-solid border-2 border-slate-900 rounded-md mb-5 focus:bg-slate-100'
    const submitStyle='bg-midnight-green h-10 px-4 text-white float-right rounded-md hover:opacity-80'
    const labelStyle='block text-jet mb-1'
    return(
    <div className="h-[500px]">
        <div className="m-auto grid mt-16 mb-28 px-[100px]">
            <div>
                <h1 className="text-4xl font-bold mb-10 text-jet">
                Would love to hear from you, Let’s talk. <span class="wobble-hor-bottom">👋</span>
                </h1>
            <form action="https://api.web3forms.com/submit" method="POST">
            <input className={inputStyle} type="hidden" name="access_key" value={import.meta.env.VITE_REACT_APP_WEB3FORMS_KEY}/>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label  className={labelStyle} for="fullname">Full Name <span className="text-rose-800">*</span></label>
                        <input className={inputStyle + ' h-14 w-full'} type="text" name="name" id="fullname" placeholder="John Doe" required/>
                    </div>
                    <div>
                        <label  className={labelStyle} for="emailaddress">Email Address <span className="text-rose-800">*</span></label>
                        <input className={inputStyle + ' h-14 w-full'} id="emailaddress" type="email" name="email" required placeholder="test@test.com"/>
                    </div>
                </div>
                <label for="message" className={labelStyle}>Full Name <span className="text-rose-800">*</span></label>
                <textarea className={inputStyle + ' w-full h-40'} name="message" id="message" required placeholder="type your message here..."></textarea>
                <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
                <button type="submit" className={submitStyle}>Submit Form</button>
            </form>
            </div>
        </div>
    </div>)
}