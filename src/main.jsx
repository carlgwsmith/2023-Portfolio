import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home/Home';
import Finary from './Case Studies/Finary';
import IptiQ from './Case Studies/IptiQ';
import AgentExplore from './Case Studies/AgentXplore';
import Projects from './Portfolio/Portfolio';
import Resume from './Resume/Resume';
import Contact from './Contact/contact';
import Root from './routes/root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const routes = [
  {path:'*',
element:<Home/>},
  {
    path:'',
    element: <Root/>,
    children:[
      {
        index:true,
        element: <Home/>
      },
      {
        path:'/home',
        element: <Home/>
      },
      {
        path: "/portfolio/finary",
        element: <Finary/>,
      },
      {
        path: "/portfolio/iptiq",
        element: <IptiQ/>,
      },
      {
        path: "/portfolio/agentxplore",
        element: <AgentExplore/>,
      },
      {
        path: "/portfolio",
        element: <Projects/>,
      },
      {
        path: "/resume",
        element: <Resume/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ]
  },
]
const router = createBrowserRouter(routes,{
  basename:"/"
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      </RouterProvider>
  </React.StrictMode>,
)
