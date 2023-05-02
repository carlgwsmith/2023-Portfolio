import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Finary from './Case Studies/Finary';
import IptiQ from './Case Studies/IptiQ';
import AgentExplore from './Case Studies/AgentXplore';
import Projects from './Portfolio/Portfolio';
import Resume from './Resume/Resume';
import Contact from './Contact/contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
