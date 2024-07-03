
import React, {useState} from "react"

import  {SlideshowData}  from "./SlideshowData"

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import { Fade } from "@mui/material";


const Slideshow = ({slides}) => {
const [current, setNew] = useState(0);
const [animationActive, setAnimationActive] = useState(true);

const imagestyle = {
    image: {
        width: "100%",
        height: "25%",
        borderRadius: "10px",
        animation: "fade 5s infinite"
        
    },
    

    stillimage: {
        width: "100%",
        height: "25%",
        borderRadius: "10px",
    }

}


const next = () => {
    setNew(current === slides.length - 1 ? 0 : current + 1)
    setAnimationActive(false)

}

const prev = () => {
    setNew(current === 0 ? slides.length - 1: current - 1);
    setAnimationActive(false)
}

// console.log(current)

if (!Array.isArray(slides) || slides.length <= 0){
    return null;
}

const  delay = 5000;

console.log(animationActive);

React.useEffect(() => {
    if(animationActive === true){   
    setTimeout(
      () =>
        setNew((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    // return () => {};  
}
else{
    
    {   clearTimeout(delay, 0)  }
}
    }, [current])


        




    //   else{
        
    //         {   clearTimeout(delay, 0)  }
    //   };


    return(

    
        <div className = "slide">
            <div className = "slidesub">
            <FaArrowAltCircleLeft className ="left" onClick = {prev} />

            
            <div className = "slide-images">
            {SlideshowData.map((slide, index) => {
                return(
                    // <div className = {index === current ? 'slide active' : 'slide'} key ={index}>
                    <div className = 'slide-active' key ={index}>
                    
                        {index === current  && (<img src = {slide.image} alt = "whatever" className = "image" style = {animationActive ? imagestyle.image : imagestyle.stillimage}/>) }
                        
                    </div>
                    
                    
                )
                
            })}
            </div>
            
            
            <FaArrowAltCircleRight className ="right" onClick = {next} /> 
            
            </div>
            <div className = "aboutus-container">
                <div className = "aboutus-title">Who we are</div> 
                <p className = "aboutus-p">We are a japanese based restaurant who thrives on providing the highest quality food from our culture. Innovation and motivation is what drives us forward, and we hope to show that through our dishes!</p>
            </div>
             
        </div>
    )
    

}


export default Slideshow
