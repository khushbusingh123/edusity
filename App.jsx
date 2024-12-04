import React from 'react'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Testimonials from './Components/Teatimonials/Testimonials'
import Title from './Components/Title/Title'
 
 const App = () => {
   return (
     <div>
       <Navbar />
       <Hero />

       <div className="container">
       <Title subtitle='OUR PROGRAM' title='WHAT WE OFFER'/>
       <Programs />
       <About/>
       <Title subtitle='Gallery' title='Campus photos'/>
       <Campus/>
       <Title subtitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials />
        <Title subtitle='CONTACT US' title='Get in Touch '/>
        <Contact/>
        <Footer/>
       </div>
             </div>
   )
 }
 
 export default App
 