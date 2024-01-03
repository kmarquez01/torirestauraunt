import Footer from "../../Home/Footer"

import MainContent from "../../Home/MainContent"

import styles from "../../styles/Home.module.css"

import  Link  from 'next/link'

import Navigation from "../../Navigation"

import {motion} from "framer-motion"

import {FaToriiGate} from "react-icons/fa"


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
                    <h1 className = {styles.title}>Where food cravings are satisfied!</h1>
                </motion.div>
                <div className = {styles.circle}>
                    <i className = {styles.gate}><FaToriiGate /></i>
                </div>


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
                <div className = {styles.extra}>
                    <Link href = "/Menu">
                        <button className = {styles.button}>Go!</button>
                    </Link>
                </div>
                 </motion.div>
                </div>
            </section>
            <MainContent />
            <Footer />
           
        </div>
        
    )
}

export default Homes