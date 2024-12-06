import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Homepage from './components/Homepage'
import Details from './components/Details'
import MyNav from './components/MyNav'
import NotFound from './components/NotFound'
import SingleDay from './components/SingleDay'

function App() {
  const apiKey = '156e0685a3a248416123a854e9812417'
  const [loc, setLoc] = useState([
    'Valverde',
    'Hello',
    'Stefano',
    'How',
    'Are',
    'You',
  ])

  const addLoc = (location) => setLoc([...loc, location])
  const removeLoc = (location) =>
    setLoc(loc.filter((singleLoc) => singleLoc !== location))

  return (
    <BrowserRouter>
      <header>
        <MyNav addLoc={addLoc} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage loc={loc} apiKey={apiKey} />} />
          <Route
            path="/details/:city"
            element={<Details removeLoc={removeLoc} apiKey={apiKey} />}
          />
          <Route
            path="/singleDay/:city/:day"
            element={<SingleDay apiKey={apiKey} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
