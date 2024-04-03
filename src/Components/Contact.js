import React from 'react'
import Header from './Header'

const Contact = () => {
  return (
    <>
    <Header />
    <div className="contact_container" style="padding-top:100px;">
        <h2>CONTACT US</h2>
        <div className="g_map">
            <iframe src="https://www.google.com/maps/dir//ConsultIT+House,+TECHZONE+7,+IT+Plots,+Plot+20,+West,+opposite+Bloom+International+School,+Greater+Noida,+Uttar+Pradesh+203207/@28.5935058,77.3842727,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cfb02ca5f41d1:0x73fd29ed90286017!2m2!1d77.4666741!2d28.5935307?entry=ttu" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div className="contact_content">
            <p>We want to hear from you! Drop us a note and someone from our team will get back to you.
                Looking to volunteer or supporting us in any other ways? Call +91-7000766672
                Have a question that involves Donate To NGO? Please head on over to our Locations page to reach our locations.</p>
            <p><b>Call: +91-7000766672</b></p>
            <p><b>Mail: gsankalp587@gmail.com</b></p>
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
        <p>Copyright &copy; 2024 Donate To NGO. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Contact