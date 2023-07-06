import React from 'react'
import './Intro.css'
import { FloatingDiv } from '../FloatingDiv/FloatingDiv'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Vector3 from '../../img/vector3.png'
import Boy from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesimoji from '../../img/glassesimoji.png'

export const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I am </span>
                <span>Didau Vedau</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minus quidem impedit doloribus tempore a earum cumque totam dolor accusamus quos itaque, possimus voluptatibus. Facere nihil quam tempora! Ab, vitae!</span>
            </div>
            <button className="button i-button">hire me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>


        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Vector3} alt="" />
            <img src={Boy} alt="" />
            <img src={Glassesimoji} alt="" />
            <div style={{top:'-4%', left:'60%'}}>
                <FloatingDiv image={Crown} txt1={"Web"} txt2={'Develope'}/>
            </div>

            <div style={{top:'64%'}}>
                <FloatingDiv image={Thumbup} txt1={"best design"} txt2={'award'}/>
            </div>
            {/* blur div */}
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur"
            style={{left:'-7rem',background: '#C1F5FF',top:'8rem',width:'21rem',height:'11rem'}}></div>
            

        </div>
    </div>
  )
}
