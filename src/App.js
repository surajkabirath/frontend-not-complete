import React, { useEffect } from 'react'
import "./App.css"
import Header from './components/Home/Header'
import Home from './components/Home/Home'
import WebFont from 'webfontloader'
import Footer from './components/Layout/Footer/Footer'

const App = () => {
  useEffect(()=>{
WebFont.load({
  google:{
    families:["Roboto","Droid sans", "Chilanks"]
  },
});
  });
  return (
    < >
     <Header/>
     <Home/>

     <Footer/>


    </>
  )
}

export default App
