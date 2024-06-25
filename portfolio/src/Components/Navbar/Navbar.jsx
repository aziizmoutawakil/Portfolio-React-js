import React, { useState,useRef } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import mylogo from '../../assets/mylogo.png'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {
  const [menu,setMenu] = useState("")
  const menuRef = useRef()
 
  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }

  const openMenu = () => {
    menuRef.current.style.right="0"
  }

  return (
    <div className='navbar'>
      <img  className='image-logo' src={mylogo} alt=''/>
      <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' offeset={50} href='#home' ><p onClick={()=> setMenu('home')}>Home</p></AnchorLink>{menu ==="home"?<img src="" alt=''/>: <></> } </li>
        <li><AnchorLink className='anchor-link' offeset={50} href='#about' ><p onClick={()=> setMenu('about')}>About Me</p></AnchorLink>{menu === "about"? <img src="" alt=''/>: <></> }</li>
        <li><AnchorLink className='anchor-link' offeset={50} href='#services' ><p onClick={()=> setMenu('services')}>Services</p></AnchorLink>{menu === "services"? <img src="" alt=''/>: <></> }</li>
        <li><AnchorLink className='anchor-link' offeset={50} href='#work' ><p onClick={()=> setMenu('word')}>My Work</p></AnchorLink>{menu === "word"? <img src="" alt='' />: <></> }</li>
        <li><AnchorLink className='anchor-link' offeset={50} href='#contact' ><p onClick={()=> setMenu('contact')}>Contact</p></AnchorLink>{menu === "contact"? <img src="" alt='' />: <></> }</li>
      </ul>


      <div className="nav-connect"><AnchorLink className='anchor-link' offeset={50} href='#contact'> Contact With Me </AnchorLink> </div>
    </div>
  )
}

export default Navbar
