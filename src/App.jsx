import { BrowserRouter , Routes , Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import OutLet from "./layout/OutLet"
import Contatti from "./pages/Contatti"
import Progetti from "./pages/Progetti"
import Skills from "./pages/Skills"

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route element = {<OutLet/>}>
        <Route path="/progetti" element={<Progetti/>}/>
        <Route path="/contatti" element={<Contatti/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
