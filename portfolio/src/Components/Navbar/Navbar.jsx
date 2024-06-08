import React, { useState } from 'react'
import './Navbar.css'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import mylogo from '../../assets/mylogo.png'
import underline from '../../assets/nav_underline.svg'
const Navbar = () => {
  const [menu,setMenu] = useState("")
  return (
    <div className='navbar'>
      <img  src={mylogo} alt=''/>
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' offeset={50} href='#home' ><p onClick={()=> setMenu('home')}>Home</p></AnchorLink>{menu ==="home"?<img src="" alt=''/>: <></> } </li>
        <li><AnchorLink className='anchor-link' offeset={50} href='#about' ><p onClick={()=> setMenu('about')}>About Me</p></AnchorLink>{menu === "about"? <img src="" alt=''/>: <></> }</li>
        <li><AnchorLink className='anchor-link' offeset={50} href='#services' ><p onClick={()=> setMenu('services')}>Services</p></AnchorLink>{menu === "services"? <img src="" alt=''/>: <></> }</li>
        <li><AnchorLink className='anchor-link' offeset={50} href='#work' ><p onClick={()=> setMenu('word')}>Portfolio</p></AnchorLink>{menu === "word"? <img src="" alt='' />: <></> }</li>
        <li><AnchorLink className='anchor-link' offeset={50} href='#contact' ><p onClick={()=> setMenu('contact')}>Contact</p></AnchorLink>{menu === "contact"? <img src="" alt='' />: <></> }</li>
      </ul>


      <div className="nav-connect"><AnchorLink className='anchor-link' offeset={50} href='#contact'> Contact With Me </AnchorLink> </div>
    </div>
  )
}

export default Navbar
