import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/shared/navbar';
import { Home } from "./component/pages/home/home"

function App() {

  return (
    <>
      <main className='font-onest'>

          <Routes>
            
            <Route path='' element={<Navbar/>}>
              <Route path='/' element={<Home/>}/>
            </Route>

          </Routes>
      </main>
    </>
  )
}

export default App

