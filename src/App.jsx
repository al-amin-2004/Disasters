import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/shared/navbar';
import { Home } from "./component/pages/home/home"
import { Incidents } from './component/pages/incidents/incidents';
import { Error } from './component/shared/error';

function App() {

  return (
    <>
      <main className='font-onest'>

          <Routes>
            
            <Route path='' element={<Navbar/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/incidents' element={<Incidents/>}/>
              <Route path='*' element={<Error/>}/>
            </Route>

          </Routes>
      </main>
    </>
  )
}

export default App

