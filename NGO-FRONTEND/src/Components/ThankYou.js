import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

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
    <Footer />
    </>
  )
}

export default ThankYou