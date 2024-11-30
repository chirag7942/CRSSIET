import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState,setPlayState] = useState(false);

  //The work flow for this playstate will be app.jsx -> about.jsx -> videoplayer.jsx

  // Because we need to update this playstate value by clicking on the play icon present in the about component and when it get set we will remove hide classname from videoplayer

  return (

    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle="Our PROGRAMS" title="What We Offer"/>
      <Programs/>
      <About setPlayState = {setPlayState}/>
      <Title subTitle="Gallery" title="Campus Photos"/>
      <Campus/>
      <Title subTitle="testimonials" title="What Student Says"/>
      <Testimonials/>
      <Title subTitle="contact us" title="Get in Touch"/>
      <Contact/>
      <Footer/>
      </div>

      <VideoPlayer setPlayState={setPlayState} playState={playState}/>
     
    </div>
  )
}

export default App
