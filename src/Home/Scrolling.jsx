import Marquee from "react-fast-marquee"
import {RxDotFilled} from 'react-icons/rx'
export default function Scrolling() {
const tickerItem={
    padding:'0 2rem',
    fontSize:'1rem',
    color:'white'
}
return(
    <div className="bg-jet w-full -rotate-1 mb-3">
    <Marquee className="p-8" pauseOnHover='true' speed='30'>
        <div style={tickerItem}>Product Design</div>
        <div><RxDotFilled size={14} className="m-1" color={'white'}/></div>
        <div style={tickerItem}>Javascript</div>
        <div><RxDotFilled size={14} className="m-1" color={'white'}/></div>
        <div style={tickerItem}>Figma</div>
        <div><RxDotFilled size={14} className="m-1" color={'white'}/></div>
        <div style={tickerItem}>ThreeJS</div>
        <div><RxDotFilled size={14} className="m-1" color={'white'}/></div>
        <div style={tickerItem}>User Research</div>
        <div><RxDotFilled size={14} className="m-1" color={'white'}/></div>
        <div style={tickerItem}>Design Thinking</div>
        <div><RxDotFilled size={14} className="m-1" color={'white'}/></div>
        <div style={tickerItem}>ReactJS</div>
        <div><RxDotFilled size={14} className="m-1" color={'white'}/></div>
        <div style={tickerItem}>CSS</div>
        <div><RxDotFilled size={14} className="m-1" color={'white'}/></div>
        <div style={tickerItem}>UX/UI Design</div>
        <div><RxDotFilled size={14} className="m-1" color={'white'}/></div>
        <div style={tickerItem}>Data Visualization</div>
        <div><RxDotFilled size={14} className="m-1" color={'white'}/></div>
        <div style={tickerItem}>VueJS</div>
        <div><RxDotFilled size={14} className="m-1" color={'white'}/></div>
        <div style={tickerItem}>Angular</div>
        <div><RxDotFilled size={14} className="m-1" color={'white'}/></div>
    </Marquee>
    </div>
)
}