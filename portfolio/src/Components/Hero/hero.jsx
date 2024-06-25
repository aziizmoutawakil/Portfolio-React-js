import React from 'react'
import './Hero.css'
import aza from '../../assets/hahahahah.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='image-hero' src={aza} alt="" />
      <h1><span>I'm Aziz Moutaoikil</span> , Full <br /> Stack Devlopper. </h1>
      <p>I'm Full  Stack Devlopper, Based In Morocco With 2 Years of Experience In MERN Stack</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offeset={50} href='#contact'> Contact With me</AnchorLink></div>
        <div className="hero-resume">My resume</div>    
      </div>
    </div>
  )
}

export default hero
