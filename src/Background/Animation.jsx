import React from 'react'
import video from '../assets/video.mp4'
import img from '../assets/1.jpg'
import img1 from '../assets/2.jpg'
import img2 from '../assets/3.jpg'
import './Animation.css'

const Animation = ({playstatus, hercount}) => {
  
    if(playstatus){
      return(
          <video className='background zoom-in-out' muted autoPlay loop>
              <source src= {video} type='video/mp4' />
          </video>
      )
    }
    else if(hercount === 0){
      return(
          <img className='background zoom-in-out' src= {img}  alt="" />
      )
    }
    else if(hercount === 1){
      return(
          <img className='background zoom-in-out' src= {img1}  alt="" />
      )
    }
    else if(hercount === 2){
      return(
          <img className='background zoom-in-out' src= {img2}  alt="" />
      )
    }
  
}
export default Animation