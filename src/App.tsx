import { Navbar } from "./Components/Navbar"
import { Home } from "./Components/Home"
import {About } from "./Components/About"
import { Skills } from "./Components/Skills"
import { Projects } from "./Components/Projects"
import { Footer } from "./Components/Footer"

function App() {
  
  return (
    <>
      <div className = "bg-emerald-900 h-auto w-full overflow-hidden">
         <Navbar/>
         <Home/>
         <About/>
         <Skills/>
         <Projects/>
         <Footer/>
      </div>
    </>
  )
}

export default App
