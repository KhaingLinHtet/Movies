import React from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import { Route,Routes } from 'react-router'
import Details from './components/Details.jsx'
import NotFound from './components/NotFound.jsx'
const App = () => {
  return (
    <div>
      <Header/>
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/movies/details/:movieId' element={<Details/>}/>
      
      
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
