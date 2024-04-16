import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Donate = () => {
  return (
    <>
        <Header />
         <div className="donate">
        <div className="donate_container">
            <h1>Let's Make a Change Together!</h1>
            <p>The greatest use of a life is to spend it on something that will outlast it.</p>
            <p className="second">Any help or donation,<br />no matter how big or small,<br /> will be whole-heartedly and deeply appreciated.</p>
            <div className="side_btn">
                <Link to={"/Form"}>DONATE NOW</Link>
                {/* <!-- <a href="https://www.upilinks.in/payment-link/upi2046326871">DONATE NOW</a> --> */}
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Donate