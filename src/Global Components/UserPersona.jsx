export default function Persona(props){

    return(
        <div className="bg-background-light md:px-40 pt-6 pb-10 text-jet sm:px-10 px-10">
        <div className="grid grid-cols-3 gap-4 rounded border-solid border-2 border-stone-800 bg-white p-10">
            <div className="sm:col-span-3 md:col-span-1 col-span-1">
                <img src={props.pic} className="sm:hidden md:flex m-auto w-[150px]"></img>
                <h2 className="sm:text-left md:text-center text-xl font-semibold mt-3">{props.name}</h2>
                <p className="sm:text-left md:text-center text-sm text-poppy-red font-semibold">{props.title}</p>
                <p className="sm:text-left md:text-center mt-2 text-xs font-semibold">{props.city}</p>
                <p className="sm:text-left md:text-center text-xs">Age: {props.age}</p>
            </div>
            <div className="sm:col-span-3 md:col-span-1 col-span-1">
                <h2 className="font-semibold mt-4">Motivations</h2>
                {props.motivations.map((item)=>{
                return <li key={item.id} className="text-xs mt-1 mb-1">{item.content}</li>
            })}
                <h2 className="font-semibold mt-4">Goals</h2>
            
                {props.goals.map((item)=>{
                return <li key={item.id} className="text-xs mt-1 mb-1">{item.content}</li>
            })}
                
                <h2 className="font-semibold mt-4">Pain Points</h2>
            
                {props.pain.map((item)=>{
                return <li key={item.id} className="text-xs mt-1 mb-1">{item.content}</li>
            })}
                
            </div>
            <div className="sm:col-span-3 md:col-span-1 col-span-1">
            <h2 className="font-semibold mt-4">Challenges</h2>
            
                {props.challenges.map((item)=>{
                return <li key={item.id} className="text-xs mt-1 mb-1">{item.content}</li>
            })}
                
                <h2 className="font-semibold mt-4">Solutions</h2>
            
                {props.solutions.map((item)=>{
                return <li key={item.id} className="text-xs mt-1 mb-1">{item.content}</li>
            })}
                
                <h2 className="font-semibold mt-4">Benefits</h2>
            
                {props.benefits.map((item)=>{
                return <li key={item.id} className="text-xs mt-1 mb-1">{item.content}</li>
            })}
                
            </div>
        </div>
        </div>
    )
}