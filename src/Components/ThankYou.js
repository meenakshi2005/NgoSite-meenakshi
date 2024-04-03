import React from 'react'
import Header from './Header'

const ThankYou = () => {
  return (
    <>
        <Header />
        <div className="donate">
        <div className="donate_container">
            <h1>THANK YOU!</h1>
            <p>The greatest use of a life is to spend it on something that will outlast it.</p>
            <p className="second">Your contribution for<br />the needy children worldwide<br /> is priceless. Thank You for your bringing a change!</p>
            <div className="side_btn">
                <a href="/">BACK TO HOME</a>
            </div>
        </div>
    </div>
    <footer>
        <div className="pages"> 
            <a href="/"><img className="aimg" src="images/logo.png" width="250" /></a> 
            <p>Donate To NGO cares for needy children by empowering their caregivers to do their best work, with compassion, grace, integrity and excellence. Our end goal is to support children worldwide and see every child reach the potential that God has for them.</p>
            <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
        <div className="doc">
            <h3>Navigation</h3>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/donate">Donate</a>
            <a href="/contact">Contact</a>
        </div>
        <div className="contact">
            <h3>Contact Us</h3>
            <a href="/contact" target="_blank">ConsultIT House, TECHZONE 7, IT Plots, Plot 20, West, opposite Bloom International School, Greater Noida, Uttar Pradesh 203207</a>
            <a href="tel: +910000000000">7000766672</a>
            <a href="mailto: ppppppp@gmail.com">gsankalp587@gmail.com</a>
        </div>
        <div className="social">
            <h3>Support</h3>
            <p>Help us shape a better future fot children all over the world</p>
            <div className="side_btn">
                <a href="/donate">JOIN US TODAY</a>
            </div>
        </div>
        <hr />
        <p>Copyright &copy; 2024 Donate To NGo. All rights reserved.</p>
    </footer>
    </>
  )
}

export default ThankYou