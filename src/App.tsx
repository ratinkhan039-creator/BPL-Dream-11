import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import FixturesPage from "./pages/Fixtrue"
import { useState } from "react"
import TeamsPage from "./pages/Teams"

function App() {
  const [coin, setCoin] = useState(2000)
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home coin={coin} setCoin={setCoin}/>} />
      <Route path="/fixture" element={<FixturesPage coin={coin} />} />
      <Route path="/teams" element={<TeamsPage coin={coin} />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
