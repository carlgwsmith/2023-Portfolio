import './App.css'
import 'react-loading-skeleton/dist/skeleton.css'
import Header from './Global Components/header'
import Home from './Global Components/Home'
import Footer from './Global Components/footer'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {

  return (
    <div className="App">
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
      <Header/>
      <Home/>
      <Footer/>
      </SkeletonTheme>
    </div>
  )
}

export default App
