import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ItemProp from './ItemProp'

const Home = () => {
    return (
        <>
            {/* --------------------------HEADER------------------------------ */}
            <Header />

            {/* ------------------------------FORM---------------------------- */}
            <div className="main">
                <div className="main_content">
                    <h2>“Giving is not just about making a donation. It is about making a difference.”
                        <br />
                        <span>Give a helping hand to children who NEED it!</span>
                    </h2>

                    <div className="btn">
                        <Link to={'/Form'}>Donate Now</Link>
                    </div>
                </div>
            </div>

            {/* --------------------------JOINING AND HELPING------------------------------ */}
            <div className="side">
                <div className="left">
                    <img src="./images/donation.jpg" height={500} />
                </div>
                <div className="right">
                    <h2>HELP A CHILD TODAY</h2>
                    <p>
                        Service to man is service to God. Donate To NGO cares for needy children by empowering their caregivers to do their best work, with compassion, grace, integrity and excellence. Our end goal is to support children worldwide and see every child reach the potential that God has for them.
                    </p>
                    <div className="side_btn">
                        <a href="/donate">JOIN US TODAY</a>
                    </div>
                </div>

            </div>

            {/* -----------------------------------OUR MISSION AND VISION--------------------------------- */}


            <div className="mission-vision">
                <div className="mission">
                    <div className="mission-1">
                        <h1>Our Mission</h1>
                        <p>Our mission is to alleviate suffering
                            and promote sustainable development
                            by providing essential 
                            services, advocating for social justice
                            and empowering communities to create
                            lasting change. Grounded in compassion
                            and driven by integrity, we work tirelessly
                            to address the root causes of poverty,
                            inequality, and injustice, striving
                            towards a world where every individual
                            has the opportunity to thrive
                            with dignity and equality</p>
                    </div>
                    <div className="mission-2">
                        <img src="./images/mission.jpg" height={450} alt="mission" />
                    </div>
                </div>
                <div className="vision">
                    <div className="vision-1">
                        <img src="./images/vision.jpg" alt="vision" height={450} />

                    </div>
                    <div className="vision-2">
                        <h1>Our Vision</h1>
                        <p>Our vision is a world where every
                            person, regardless of circumstance
                            has access to the resources,
                            opportunities, and support
                            needed to live a life of dignity,
                            equality, and fulfillment.
                            We envision vibrant communities
                            empowered to overcome challenges,
                            build resilience, and shape
                            their own destinies, fostering
                            a global culture of compassion,
                            collaboration, and sustainability. </p>
                    </div>
                </div>
            </div>


            {/* --------------------------------HOW WE HELP------------------------------ */}
            <div className="product">
                <div className="top">
                    <h1>HOW WE HELP</h1>
                </div>
                <div className="product_container">

                    <ItemProp
                        img={"images/pro1.svg"}
                        text={"Food"}
                        para={"We supply needy childen with basic necessities like pure food"}
                    />

                    <ItemProp
                        img={"images/pro3.svg"}
                        text={"Books"}
                        para={"We provide education facilities to children all over the world"}
                    />
                    <ItemProp
                        img={"images/pro2.svg"}
                        text={"Clothes"}
                        para={"We supply needy childen with basic necessities."}
                    />

                    <ItemProp
                        img={"images/pro2.svg"}
                        text={"Shoes"}
                        para={"We provide facilities to children all over the world"}
                    />

                    <ItemProp
                        img={"images/pro2.svg"}
                        text={"Essential"}
                        para={"We provide facilities to children all over the world"}
                    />

                </div>
            </div>
            <hr />

            {/* ------------------------------FOOTER---------------------------------- */}

            <Footer />
        </>
    )
}

export default Home