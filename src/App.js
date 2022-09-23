import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useThemeHook} from './GlobleComponent/ThemeProvider'
import Header from './components/Header'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import {Router} from "@reach/router"

function App() {
  const [theme]=useThemeHook()
  return (
    <main className={theme ? 'bg-black':'bg-light-2'} style={{height:'100vh',overflow:'auto'}}>
    <Header/>
    <Router>
    <Home path="/" />
    <Cart path="/cart" />
    </Router>
   
      
    </main>
  );
}

export default App;
