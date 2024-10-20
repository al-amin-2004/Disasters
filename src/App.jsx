import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/shared/navbar';
import { Home } from "./component/pages/home"
import { Incidents } from './component/pages/incidents';
import { Error } from './component/shared/error';
import { Location } from './component/pages/locations';

function App() {

  return (
    <>
      <main className='font-onest'>

          <Routes>
            
            <Route path='' element={<Navbar/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/incidents' element={<Incidents/>}/>
              <Route path='/locations' element={<Location/>}/>
              <Route path='*' element={<Error/>}/>
            </Route>

          </Routes>
      </main>
    </>
  )
}

export default App

