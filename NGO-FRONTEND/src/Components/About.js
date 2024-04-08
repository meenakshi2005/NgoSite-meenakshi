import React from 'react'
import Header from './Header'

const About = () => {
    return (
        <>
        <Header />
            <div className="main_about">
                <div className="main_content_about">
                    <h2>What We Do?</h2>
                </div>
            </div>
            <div className="product product_about">
                <h2>HOW WE HELP</h2>
                <div className="product_container">

                    <div className="item">
                        <div className="item_img">
                            <img src="images/pro1.svg" />
                        </div>
                        <div className="item_content">
                            <h3>Pure Food & Water</h3><br />
                            <p>We supply needy childen with basic necessities like pure food and water</p>
                            <br /><br /><br />
                        </div>
                    </div>

                    <div className="item">
                        <div className="item_img">
                            <img src="images/pro2.svg" />
                        </div>
                        <div className="item_content">
                            <h3>Health and Medicine</h3><br />
                            <p>Health being the foremost priority, we aim at giving children every medical support</p>
                            <br /><br />
                        </div>
                    </div>

                    <div className="item">
                        <div className="item_img">
                            <img src="images/pro3.svg" />
                        </div>
                        <div className="item_content">
                            <h3>Education</h3><br />
                            <p>We provide education facilities to children all over the world</p>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
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
                        <a href="contact" target="_blank">ConsultIT House, TECHZONE 7, IT Plots, Plot 20, West, opposite Bloom International School, Greater Noida, Uttar Pradesh 203207</a>
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

export default About