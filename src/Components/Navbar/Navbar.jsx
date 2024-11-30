import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {

const[sticky,setSticky] = useState(false);//it means dark-navigation bar will not be present initally.

useEffect(()=> {

  //the meaning of below written line is that whenever we scroll on window execute the function and in that function we arechecking if scroll y is greater than 50 apply the dark navbar otherwise not. and 50 here representating the window size greatre han 50%

  window.addEventListener('scroll' , () => {
    window.scrollY > 50 ? setSticky(true) : setSticky(false)
  })

},[])

const[mobileMenu,setMobileMenu] = useState(false);

const toggleMenu = () => {
     mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}



  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>

    {/*it mean if sticky is true means we have scrolled greater the 50% of window size than apply the dark-nav classname otherwise not.*/}

      <img src={logo} className='logo' alt="" />

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><AnchorLink className='anchor-link'  href="#hero" offset={0}>Home</AnchorLink></li>

        {/* offset in anchor-link is the distance from the top in px */}

        <li><AnchorLink className='anchor-link'  href="#programs" offset={280}>Programs</AnchorLink></li>

        <li><AnchorLink className='anchor-link'  href="#about" offset={160}>About Us</AnchorLink></li>

        <li><AnchorLink className='anchor-link'  href="#campus" offset={280}>Campus</AnchorLink></li>

        <li><AnchorLink className='anchor-link'  href="#testimonials" offset={280}>Testimonials</AnchorLink></li>

        <li><AnchorLink className='btn anchor-link' href='#contact' offset={280}>Contact Us</AnchorLink></li>
      </ul>

      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />

    </nav>
  )
}

export default Navbar
