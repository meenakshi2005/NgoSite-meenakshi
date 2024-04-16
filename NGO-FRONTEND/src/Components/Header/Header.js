import React from 'react'
import Button from './Button'
import "./Header.css"

const Header = () => {
  return (
    <>
     <div className="header">
      <div className="header-1">
        <div className="header-1-1">
          <p><i class="far fa-envelope"></i> s3cu4ity.gua4d@gmail.com | <i class="fas fa-phone-volume"></i> 9650208558 </p>
        </div>
        <div className="header-1-2">
          <p>Follow Us:</p>&nbsp;
          <i class="fab fa-instagram"></i>&nbsp;&nbsp;
          <i class="fab fa-facebook-square"></i>&nbsp;&nbsp;
          <i class="fab fa-twitter-square"></i>&nbsp;&nbsp;
        </div>
        <div className="header-1-3">
          <Button props={"Join Us"} clr={"#28cc66"} link={"/Form"} />
          <Button props={"Donate"} fnt={"#686968"} link={"/Donate"} />
        </div>
      </div>
      <div className="line" style={{ border: "1px solid grey"}}></div>
      <div className="header-2">
        <div className="header-2-1">
          <img src="./images/logo.png" alt="logo" height={55}/>
          <div className="header-2-2">
            <Button props={"Home"} fnt={"#686968"} link={"/"} />
            <Button props={"About Us"} fnt={"#686968"} link={"/About"} />
            <Button props={"Services"} fnt={"#686968"} link={"/Services"} />
            <Button props={"Gallery"} fnt={"#686968"} link={"/Gallery"} />
            <Button props={"Blog"} fnt={"#686968"} link={"/Blog"} />
            <Button props={"Contact Us"} fnt={"#686968"} link={"/Contact"} />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Header