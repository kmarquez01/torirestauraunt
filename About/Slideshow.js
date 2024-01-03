
import React, {useState} from "react"

import  {SlideshowData}  from "./SlideshowData"

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"


const Slideshow = ({slides}) => {
const [current, setNew] = useState(0);
// const  delay = 5000;

// React.useEffect(() => {
//     setTimeout(
//       () =>
//         setNew((prevIndex) =>
//           prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {};
//   }, [current]);

const next = () => {
    setNew(current === slides.length - 1 ? 0 : current + 1) 
}

const prev = () => {
    setNew(current === 0 ? slides.length - 1: current - 1)
}

console.log(current)

if (!Array.isArray(slides) || slides.length <= 0){
    return null;
}




    return(
    
        <div className = "slide">
            <div className = "slidesub">
            <FaArrowAltCircleLeft className ="left" onClick = {prev} />
            
            <div className = "slide-images">
            {SlideshowData.map((slide, index) => {
                return(
                    // <div className = {index === current ? 'slide active' : 'slide'} key ={index}>
                    <div className = 'slide-active' key ={index}>
                         
                        {index === current && (<img src = {slide.image} alt = "whatever" className = "image"/>) }
                        
                    </div>
                    
                    
                )
                
            })}
            </div>
            
            
            <FaArrowAltCircleRight className ="right" onClick = {next} /> 
            </div>
            <div className = "aboutus-container">
                <title className = "aboutus-title">Who We are</title> 
                <p className = "aboutus-p">We are a japanese based restaurant who thrives on providing the highest quality food from our culture. Innovation and motivation is what drives us forward, and we hope to show that through our dishes!</p>
            </div>
             
        </div>
    )

}
export default Slideshow
