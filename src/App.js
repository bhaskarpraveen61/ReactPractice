import React,{createContext,useState} from 'react'
import Navigator from './Navigator.js'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import About from './About'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

export const store = createContext(); 
const App= ()=> {
  const [data, setData] = useState(0);
  return (
    <div>
      {/* <BrowserRouter>
        <Navigator />
          <Routes >
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/about" element={<About/>}/>
          </Routes>
      </BrowserRouter> */}

    <store.Provider value={[data,setData]}>
      <ComponentA />
      <ComponentB />
    </store.Provider>
      
    </div>
  )
}

export default App;