import React from 'react'
import './Services.css'
import { Card } from '../Card/Card'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"


export const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My awesome</span>
        <span>services</span>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
        
        <button className='button s-button'>Download CV</button>
        
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
      </div>

       {/* right side */}
       <div className="cards">
          <div style={{left:"14rem"}}>
            <Card 
              emoji = {HeartEmoji}
              heading={"Design"}
              detail={"Figma,photoshop,Adobe"}
            />
          </div>
          <div style={{top: "12rem",left:"-4rem"}}>
            <Card 
              emoji = {Glasses}
              heading={"Developer"}
              detail={"html,css,javascript,react"}
            />
          </div>
          <div style={{top: "19rem",left:"25rem"}}>
            <Card 
              emoji = {Humble}
              heading={"UI/UX"}
              detail={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A tempore nemo quibusdam quia, modi mollitia corrupti, placeat sunt facere impedit"}
            />
          </div>
          <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
       </div>
    </div>
  )
}
