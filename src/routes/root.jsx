import { Outlet } from "react-router-dom";
import Footer from "../Global Components/footer";
import Header from "../Global Components/header";
import ScrollToTop from '../utils/ScrollToTop'

export default function Root(){
    return(
        <>
        <ScrollToTop />
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}