import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

  

const slider = useRef(); //here we took reference of ul containing 4 testimonials.

let tx = 0; //initially we took translate/movement along x direction 0;

//function to slide forward with next button

const slideForward = () => {

  if(tx > -50) { //because here we took 4 list items so the two that have been move left will be moved with translate x of atmost -50%
      tx -= 25;
  }

  slider.current.style.transform= `translateX(${tx}%)`
}

const slideBackward = () => {

  if(tx < 0) { //because here we took 4 list items so the two that have been move left will be moved with translate x of atmost -50%
      tx += 25;
  }

  slider.current.style.transform= `translateX(${tx}%)`;
}






  return (
    <div className='testimonials' id="testimonials">

    <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
    <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />

    <div className="slider">

        <ul ref={slider}>
      
      <li>
        <div className="slide">

            <div className="user-info">
                <img src={user_1} alt="" />

                <div>
                <h3>Abhinav Singh</h3>
                <span>Student at CRSSIET,Jhajjar</span>
                </div>

                </div>

                <div className="">

                <p>Being a student of computer science & choosing to pursue my degree at CRSSIET,Jhajjar is one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>

                </div>

            </div>
        
      </li>


            
      <li>
        <div className="slide">

            <div className="user-info">
                <img src={user_2} alt="" />

                <div>
                <h3>Nitesh Sharma</h3>
                <span>Student at CRSSIET,Jhajjar</span>
                </div>

                </div>

                <div className="">

                <p>Being a student of Computer Science & choosing to pursue my degree at CRSSIET,Jhajjar is one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>

                </div>

            </div>
        
      </li>



            
      <li>
        <div className="slide">

            <div className="user-info">
                <img src={user_3} alt="" />

                <div>
                <h3>Chirag Singh</h3>
                <span>Student at CRSSIET,Jhajjar</span>
                </div>

                </div>

                <div className="">

                <p>Being a student of Computer Science & choosing to pursue my degree at CRSSIET,Jhajjar is one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>

                </div>

            </div>
        
      </li>




            
      <li>
        <div className="slide">

            <div className="user-info">
                <img src={user_4} alt="" />

                <div>
                <h3>Mayur Aggarwal</h3>
                <span>Student at CRSSIET,Jhajjar</span>
                </div>

                </div>

                <div>

                <p>Being a student of Computer Science & choosing to pursue my degree at CRSSIET,Jhajjar is one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>

                </div>

            </div>
        
      </li>



        </ul>
    </div>
      
    </div>
  )
}

export default Testimonials
