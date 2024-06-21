import Footer from "../../Home/Footer"

import MainContent from "../../Home/MainContent"

import styles from "../../styles/Home.module.css"

import  Link  from 'next/link'

import Navigation from "../../Navigation"

import {motion, useAnimation} from "framer-motion"

import { useState, useRef, useEffect } from "react"

import { useInView } from 'react-intersection-observer';

import {FaToriiGate} from "react-icons/fa"

import Torilog1 from "../../public/images/Torilog1.svg"

import Image from 'next/image';

// import "../Home/index.css"


function Homes(){

    let pickupRef = useRef(null);
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const [openPopup, setOpenPopup] = useState(false)
    const [dialogData, setDialogData] = useState(null)

    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
      }, [controls, inView]);

    return(
        <div className = {styles.container0}>
            <Navigation />
            <section className = {styles.home}>
            <div className = {styles.startcontainer}>
            <img className = {styles.vd} src = "/images/homepage_img.jpg" >
                 
               </img>
               </div>
                <div className = {styles.introcontainer}>
                <motion.div className = {styles.introSubcontainer} initial = "hidden" animate = "visible" 
                variants = {{
                    hidden: {
                        // scale: .8,
                        opacity: 0
                    },
                    visible: {
                        // scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 1
                        }
                    }
                }}>
            <Image className = {styles.logoImg1} priority src ={Torilog1}/>
                    <div className = {styles.landingContainer}>
                        {/* <motion.div 
                        className = {styles.circle}
                        initial = "hidden"
                        animate = "visible"
                        variants = {{
                            hidden: {
                                left: '425px'
                            },
                            visible: {
                                left: '0px',
                                transition: {duration: 1.1}
                            }
                        }}> */}
                            {/* <Image className = {styles.logoImg1} priority src ={Torilog1}/> */}
                        {/* </motion.div> */}
                        
                        <div className = {styles.linkingContainer}>
                            <motion.h1 
                            className = {styles.title}
                            initial = "hidden"
                            animate = "visible"
                            variants = {{
                                hidden: {
                                    left: '-1000px'
                                },
                                visible: {
                                    left: '0px',
                                    transition: {
                                        duration: 1.1,
                                        delay: 1.1
                                    }
                                }
                            }}
                            >A little taste of home
                            </motion.h1>
                            <div className = {styles.buttonContainer}>
                                <div className = {styles.extra}>
                                    <Link href = "/Menu">
                                        <motion.button 
                                        className = {styles.button}
                                        initial = "hidden"
                                        animate = "visible"
                                        variants = {{
                                            hidden: {
                                                opacity: 0,
                                                left: '0px'
                                            },
                                            visible: {
                                                opacity: 1,
                                                left: '0px',
                                                transition: {
                                                    duration: 1.1,
                                                    delay: 2.3
                                                }
                                            }
                                        }}>
                                            Menu
                                        </motion.button>
                                    </Link>
                                </div>
                                <div className = {styles.extra}>
                                    <Link href = "/About">
                                        <motion.button 
                                        className = {styles.button}
                                        initial = "hidden"
                                        animate = "visible"
                                        variants = {{
                                            hidden: {
                                                opacity: 0,
                                                left: '0px'
                                            },
                                            visible: {
                                                opacity: 1,
                                                left: '0px',
                                                transition: {
                                                    duration: 1.1,
                                                    delay: 2.3
                                                }
                                            }
                                        }}>
                                            Pickup
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
                </motion.div>


                <motion.div initial = "hidden" animate = "visible" variants = {{
                    hidden: {
                        scale: 1,
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
                </div>
            </section>
            
            <MainContent onClick = {() => {setOpenPopup(true); setDialogData(null);}}  />
            <Footer />
           
        </div>
        
    )
}

export default Homes