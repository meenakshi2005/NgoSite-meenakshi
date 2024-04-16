import React from 'react'
import Button from '../Header/Button'
import "./Footer.css"
import LinkProp from './LinkProps'

const Footer = () => {
    return (
        <>
            <div className="footer center">
                <div className="footer-1">
                    <div className="row-1">
                        <div className="col-1">
                            <h3>About Us</h3>
                            <p>Doante To NGO cares for needy children <br />
                                by empowering their caregivers to do <br />
                                their best work, with compassion, grace, <br />
                                integrity and excellence. Our end goal is <br />
                                to support children worldwide and <br />
                                see every child reach the potential <br />
                                that God has for them.</p>
                        </div>
                        <div className="col-2">
                            <h3>Links</h3>
                            <LinkProp link={"/About"} props={"About"}/>
                            <LinkProp link={"/About"} props={"Portfolio"}/>
                            <LinkProp link={"/About"} props={"Latest Jobs"}/>
                            <LinkProp link={"/About"} props={"Gallery"}/>
                            <LinkProp link={"/About"} props={"Contact Us"}/>

                            
                        </div>
                        <div className="col-3">
                            <h3>Contact Us</h3>
                            <p>A7/144,Amarpali Dream Valley Villas,Greater Noida</p>
                            <p>Phone:9650208558</p>
                            <p>Email:s3cu4ity.gua4d@gmail.com</p>
                            <p>Web:www.ngoWebsite.in</p>
                        </div>
                    </div>
                    <div className="row-2">
                        <div className="r-2-c-1">
                            <LinkProp link={"/"} props={"Home"} />
                            <LinkProp link={"/About"} props={"About"} />
                            <LinkProp link={"/Gallery"} props={"Gallery"} />
                            <LinkProp link={"/Services"} props={"Services"} />
                            <LinkProp link={"/Blog"} props={"Blog"} />
                            <LinkProp link={"/Contact"} props={"Contact"} />
                        </div>
                        <div className="r-2-c-2">
                            <Button props={"Donate Now"} clr={"#28cc66"} link={"/Form"} style />
                        </div>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="row-3">
                        <div className="r-3-c-1">
                            <p>2024 &copy; All Rights Reserved | Designed and Developed by ConsultIT</p>
                        </div>
                        <div className="r-3-c-2">
                            <i class="fab fa-instagram"></i>&nbsp;&nbsp;
                            <i class="fab fa-facebook-square"></i>&nbsp;&nbsp;
                            <i class="fab fa-twitter-square"></i>&nbsp;&nbsp;
                            <i class="fab fa-google"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer