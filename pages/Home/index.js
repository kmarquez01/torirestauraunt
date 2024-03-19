import Footer from "../../Home/Footer"

import MainContent from "../../Home/MainContent"

import styles from "../../styles/Home.module.css"

import  Link  from 'next/link'

import Navigation from "../../Navigation"

import {motion} from "framer-motion"

import {FaToriiGate} from "react-icons/fa"

// import "../Home/index.css"


function Homes(){

    return(
        <div className = {styles.container0}>
            <Navigation />
            <section className = {styles.home}>
            <div className = {styles.startcontainer}>
            <video autoPlay muted loop playsInline className = {styles.vd}>
                   <source src = "/videos/053_Trim.mp4" type = "video/mp4"/>
               </video>
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

                    <div className = {styles.landingContainer}>
                        <motion.div 
                        className = {styles.circle}
                        initial = "hidden"
                        animate = "visible"
                        variants = {{
                            hidden: {
                                left: 'auto'
                            },
                            visible: {
                                left: '0px',
                                transition: {duration: 1.1}
                            }
                        }}>
                            <i className = {styles.gate}><FaToriiGate /></i>
                        </motion.div>
                        
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
                            >Where food cravings are satisfied!
                            </motion.h1>
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
            <MainContent />
            <Footer />
           
        </div>
        
    )
}

export default Homes