import { useState } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Review from './pages/Review'


 


function App() {


   useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    }) 
  }, [])




  return (
    <>
    <Review/>
      
    </>
  )
}

export default App
