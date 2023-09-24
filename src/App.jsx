import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'

function App() {

  return (
    <>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/auth/signin'  element={<Signin />}/>
      <Route path='/auth/signup' element={<Signup />} />
    </Routes>
    </>
  )
}

export default App
