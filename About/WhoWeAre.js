

import Slideshow from "./Slideshow"

import {SlideshowData} from "./SlideshowData"

import {motion} from "framer-motion"

function WhoWeAre(){
    return(
        <section className = "WhoWeAre" >
            <motion.div initial = "hidden" animate = "visible" variants = {{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 1
                        }
                    }
                }}>
                
                </motion.div>
            
            <Slideshow slides={SlideshowData} />
        </section>
    )
}

export default WhoWeAre

