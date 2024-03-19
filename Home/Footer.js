

import Link from 'next/link'

import {useRouter} from "next/router"

import styles from "../styles/Home.module.css"

function Footer(){

    return (
      <div className='footer-container'>
          <section className= {styles.footer_subscription}>
            <div className ={styles.footer_subscription_box}>
            <p>
              Keep in touch with future updates and coupons!
            </p>
            <div className= {styles.input_areas}>
              <form>
                <input
                  className='footer-input'
                  name='email'
                  type='email'
                  placeholder='Your Email'
                />
              </form>
              <input type ="submit" value ="Subscribe" className = {styles.sub_btn}></input>
              </div>
            </div>
          <div className='footer-links'>
            {/* <div className='footer-link-wrapper'> */}
            <div className= {styles.footer_link_wrapper}> 
              <div className={styles.footer_link_items}>
                <h2>About Us</h2>
                <Link href="About/#WhoWeAre">Who we are</Link>
                <Link href = "About/#Locations" >Locations</Link>
                <Link href="About/#contact">Contact</Link>
              </div>
              <div className={styles.footer_link_items}>
                <h2>Social Media</h2>
                <Link href="/">Instagram</Link>
                <Link href="/">Facebook</Link>
                <Link href="/">Youtube</Link>
              </div>
              <div className={styles.footer_link_items}>
                  <h2>Opening Hours</h2>
                  {/* <div className = "footer-information"> */}
                    <p>Sunday: Closed</p>
                    <p>Monday: 8:00am - 11:00pm</p>
                    <p>Tuesday: 8:00am - 11:00pm</p>
                    <p>Wednesday: 8:00am - 11:00pm</p>
                    <p>Thursday: 8:00am - 11:00pm</p>
                    <p>Friday: 8:00am - 12:00am</p>
                    <p>Saturday: Closed</p>
                  {/* </div> */}
              </div>
            </div>
          </div>
          </section>
          <section className='social-media'>
            <div className='social-media-wrap'>
              <div className='footer-logo'>
                <Link href="/" className='social-logo'>
                  <div className = "social-logo">
                    Tori
                    <i className='fab fa-typo3' />
                  </div>
                </Link>
              </div>
              <small className='website-rights'>Tori © 2024</small>
            </div>
          </section>
      </div>
    );
  }



export default Footer