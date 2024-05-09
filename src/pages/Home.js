import React from 'react'
import { useState, useEffect } from 'react'
import menu from '../assets/menu-icon.png'
import backgroundone from '../assets/background-one.png'
import line from '../assets/line.png'
import backgroundtwo from '../assets/background-one.png'
import backgroundthree from '../assets/Airbus A380.jpg'
import backgroundfour from '../assets/airplane-sign-pencil-sketch.jpg'
import homeImg from '../assets/Aeroflot-Air-HostessForDetails.jpg'
import './Home.css'

import drop from '../assets/drop-down.png'
import projectOne from '../assets/projectOne.png'
import projectTwo from '../assets/projectTwo.png'
import projectThree from '../assets/projectThree.png'
import projectFour from '../assets/projectFour.png'
import projectFive from '../assets/projectFive.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import linked from '../assets/linked.png'
import pint from '../assets/pint.png'
import rep from '../assets/rep.png'
import { Link } from "react-router-dom";
import arrowIcon from '../assets/arrow-down-right.png'
import logo from '../assets/Logo.png'
import footerBackground from '../assets/footerBackground.png'
import Footer from '../assets/Footer.png'
import tip from '../assets/tip.png'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function Home() {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState("home")
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [rep, backgroundone, backgroundtwo];
    const handleClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };



    const backgrounds = [backgroundone, backgroundtwo, backgroundthree, backgroundfour];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    }

    const handleMouseLeave = () => {
        setHover(false);
    }
    // const slides = [
    //     { image: 'url_to_image1', text: 'Text for slide 1' },
    //     { image: 'url_to_image2', text: 'Text for slide 2' },
    //     { image: 'url_to_image3', text: 'Text for slide 3' },
    //   ];

    //   const Slide = ({ image, text }) => {
    //     return (
    //       <div style={{ backgroundImage: url(${image}), height: '100vh', backgroundSize: 'cover' }}>
    //         <div className="text-overlay">
    //           <h1>{text}</h1>
    //         </div>
    //       </div>
    //     );
    //   };
    //   const Slideshow = () => {
    //     const settings = {
    //       dots: true,
    //       infinite: true,
    //       speed: 500,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       autoplay: true,
    //       autoplaySpeed: 3000,
    //     };

    //     return (
    //       <Slider {...settings}>
    //         {slides.map((slide, index) => (
    //           <Slide key={index} image={slide.image} text={slide.text} />
    //         ))}
    //       </Slider>
    //     );
    //   };

    const ClickableBackground = () => {
        // State to hold the current background image
        const [backgroundImage, setBackgroundImage] = useState(backgroundone);

        // Click event handler for the arrow
        const changeBackground = () => {
            setBackgroundImage(backgroundfour);
        };

        return (
            <div className="background-container">
                <img
                    src={backgroundImage}
                    alt="Background"
                    className="background-image"
                />
                {/* Arrow for clicking */}
                <div className="arrow" onClick={changeBackground}></div>
            </div>
        );
    };
    useEffect(() => {
        // Rotate background image every 5 seconds
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (

        <div style={{ backgroundColor: '#403E3D', overflow: 'hidden' }} >
            <div style={{ backgroundColor: 'black', paddingTop: 5, paddingBottom: 30 }} >
                <div style={{ backgroundColor: 'black' }} >
                    <h1 style={{ fontSize: 14, textAlign: 'end', marginRight: 60, color: 'white' }} >Phone: <span style={{ color: '#abadb0' }} >(+433 200 3170) </span> | Support: <span style={{ color: '#abadb0' }} > placeholer@pdbs@gmail.com </span></h1>
                    <hr style={{ marginTop: 15, borderColor: '#b3a9a2' }} />

                </div>
                <div
                    style={{ backgroundColor: 'black', flexDirection: 'row', paddingLeft: 60, paddingRight: 60, display: 'flex', justifyContent: 'space-between', marginBottom: -15, }}
                >
                    <img src={logo} alt='logo' style={{ width: 40, height: 40 }} />
                    {/* <h1 style={{ color: 'white', fontSize: 25,  }} >Proactive DBS</h1> */}
                    {/* <img src={menu} /> */}
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 30, backgroundColor: 'black' }} >
                        <h1 style={{ fontSize: 14, color: 'white', gap: 0, marginLeft: 300, width: 60, marginBottom: 5, borderBottomWidth: currentPage === "home" ? 3 : 0, borderBottomColor: 'yellow', borderBottomStyle: 'solid', textAlign: 'center' }} >Home</h1>
                        <h1 style={{ fontSize: 14, color: 'white', gap: 0, width: 60, marginBottom: 5, borderBottomWidth: currentPage === "services" ? 3 : 0, borderBottomColor: 'yellow', borderBottomStyle: 'solid', textAlign: 'center' }} >Services</h1>
                        <h1 style={{ fontSize: 14, color: 'white', gap: 0, width: 60, marginBottom: 5, borderBottomWidth: currentPage === "gallery" ? 3 : 0, borderBottomColor: 'yellow', borderBottomStyle: 'solid', textAlign: 'center' }} >Gallery</h1>
                        <h1 style={{ fontSize: 14, color: 'white', gap: 0, width: 120, marginBottom: 5, borderBottomWidth: currentPage === "virtual" ? 3 : 0, borderBottomColor: 'yellow', borderBottomStyle: 'solid', textAlign: 'center' }} >Virtual Estimates</h1>
                        <h1 style={{ fontSize: 14, color: 'white', gap: 0, width: 60, marginBottom: 5, borderBottomWidth: currentPage === "testimonial" ? 3 : 0, borderBottomColor: 'yellow', borderBottomStyle: 'solid', textAlign: 'center' }} >Testimonial</h1>

                    </div>
                    <button style={{ backgroundColor: 'yellow', paddingLeft: 25, paddingRight: 25, borderRadius: 20, }} >Get in Touch</button>
                </div>
            </div>
            <div style={{ backgroundColor: 'black', paddingBottom: 60, }} >
                <div

                    style={{
                        backgroundColor: 'black', marginTop: -35,
                        backgroundImage: `url(${backgrounds[backgroundIndex]})`,
                        height: "500px",
                    }}
                >
                    <div >
                        <div style={{ alignItems: 'flex-start', }} >

                            <h1 style={{ textAlign: 'left', paddingTop: 200, paddingLeft: 20, color: 'white', fontSize: 50 }} >Project Title</h1>
                            <p style={{ textAlign: 'left', paddingTop: 40, paddingLeft: 20, width: 400, color: 'white' }} >Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Eligendi non quis
                                exercitationem culpa nesciunt nihil aut
                                nostrum explicabo reprehenderit optio amet ab
                                temporibus asperiores quasi cupiditate.
                                Voluptatum ducimus</p>


                        </div>

                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#403E3D' }} >
                <div style={{ marginRight: 85, marginLeft: 85, marginTop: 40, }} >
                    <hr style={{ marginBottom: 90, borderColor: '#b3a9a2', marginTop: 150 }} />
                </div>
                <div style={{ backgroundColor: '#403E3D', display: 'flex', flexDirection: 'row', marginTop: 40, height: 800, }} >
                    <div>
                        <img style={{ height: 600, width: 500, marginLeft: 90, }} src={rep} />
                    </div>
                    <div style={{
                        width: 500,
                        marginLeft: 60, overflow: 'scroll',
                        scrollbarWidth: 'none', height: 600, marginRight: 90


                    }} >
                        <div>
                            <h1 style={{ color: '#b3a9a2', marginTop: 0, textAlign: 'justify', fontSize: 30, fontWeight: 'normal' }} >We are dedicated to addressing the evolving <span style={{ color: 'white' }} >requirements of the world's most dynamic companies.</span></h1>
                            <hr style={{ marginBottom: 20, marginTop: 30, borderColor: '#b3a9a2' }} />


                            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', }} >
                                <h1 style={{ textAlign: 'justify', marginRight: 100, color: 'white', marginTop: 8, fontWeight: 'normal' }} >01</h1>
                                <p style={{ textAlign: 'justify', color: 'white', fontWeight: 'normal' }} >Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Eligendi non quis
                                    exercitationem culpa nesciunt nihil aut
                                    nostrum explicabo reprehenderit optio amet ab
                                    temporibus asperiores quasi
                                    cupiditate. Voluptatum ducimus</p>

                            </div>
                            <hr style={{ marginBottom: 20, marginTop: 30, borderColor: '#b3a9a2' }} />
                            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }} >
                                <h1 style={{ textAlign: 'justify', marginRight: 100, color: 'white', marginTop: 8, fontWeight: 'normal' }} >02</h1>
                                <p style={{ textAlign: 'justify', color: 'white', fontWeight: 'normal' }} >Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Eligendi non quis
                                    exercitationem culpa nesciunt nihil aut
                                    nostrum explicabo reprehenderit optio amet ab
                                    temporibus asperiores quasi
                                    cupiditate. Voluptatum ducimus</p>
                            </div>
                            <hr style={{ marginBottom: 20, marginTop: 30, borderColor: '#b3a9a2' }} />
                            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }} >
                                <h1 style={{ textAlign: 'justify', marginRight: 100, color: 'white', marginTop: 8, fontWeight: 'normal' }} >03</h1>
                                <p style={{ textAlign: 'justify', color: 'white', fontWeight: 'normal' }} >Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Eligendi non quis
                                    exercitationem culpa nesciunt nihil aut
                                    nostrum explicabo reprehenderit optio amet ab
                                    temporibus asperiores quasi
                                    cupiditate. Voluptatum ducimus</p>
                            </div>
                            <hr style={{ marginBottom: 20, marginTop: 30, borderColor: '#b3a9a2' }} />
                            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }} >
                                <h1 style={{ textAlign: 'justify', marginRight: 100, color: 'white', marginTop: 8, fontWeight: 'normal' }} >04</h1>
                                <p style={{ textAlign: 'justify', color: 'white', fontWeight: 'normal' }} >Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Eligendi non quis
                                    exercitationem culpa nesciunt nihil aut
                                    nostrum explicabo reprehenderit optio amet ab
                                    temporibus asperiores quasi
                                    cupiditate. Voluptatum ducimus</p>
                            </div>
                        </div>
                        <div className="app">
                            <img
                                src={images[currentImageIndex]}
                                alt="Your Image"
                                onClick={handleClick}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                style={{ cursor: hover ? `url(${arrowIcon}), auto` : 'auto' }}
                            />
                        </div>

                        {/* <img style={{ marginTop: 30, width: 1200, height: 600 }} src={rep} /> */}
                    </div>

                </div>

            </div>
           
            <hr style={{ color: 'white', marginTop: 70, borderColor: '#b3a9a2' }} />

            {/* <div style={{ marginTop: 50, marginBottom: 20 }} >
                <h1 style={{ color: 'white', marginBottom: 40, textAlign: 'center' }} >All Projects</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 40, marginRight: 60, backgroundColor: 'white', }} >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '30%', borderRight: '1px', borderRightStyle: 'solid', borderRightColor: 'black' }} >
                        <h2 style={{ fontSize: 20, fontWeight: "normal", marginLeft: 20 }} >Project Type</h2>
                        <h2 style={{ fontSize: 20, }} >All</h2>
                        <img src={drop} style={{ width: 15, height: 15, paddingTop: 20, paddingRight: 22, marginLeft: -150, marginTop: 2 }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '22%', borderRight: '1px', borderRightStyle: 'solid', borderRightColor: 'black', marginLeft: 0 }} >
                        <h2 style={{ fontSize: 20, fontWeight: "normal", marginLeft: -40 }} >Region</h2>
                        <h2 style={{ fontSize: 20, }} >All</h2>
                        <img src={drop} style={{ width: 15, height: 15, paddingTop: 20, paddingRight: 22, marginLeft: -150, marginTop: 2 }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '22%', borderRight: '1px', borderRightStyle: 'solid', borderRightColor: 'black', marginLeft: 0 }} >
                        <h2 style={{ fontSize: 20, fontWeight: "normal", marginLeft: -40 }} >Country</h2>
                        <h2 style={{ fontSize: 20, }} >All</h2>
                        <img src={drop} style={{ width: 15, height: 15, paddingTop: 20, paddingRight: 22, marginLeft: -150, marginTop: 2 }} />

                    </div>
                    <div style={{ width: '2%', }}  >
                        <h1 style={{ fontSize: 20, fontWeight: "normal", marginLeft: -80,  }} >Sort A-Z</h1>
                    </div>
                </div>
            </div> */}
            <div>
                <img src={tip} style={{ marginLeft: 40, marginRight: 20, width: '92%', marginTop: 20, marginBottom: -40 }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginRight: 20, marginLeft: 35, marginTop: 40, }} >
                <div style={{ display: 'flex', flexDirection: 'column', margin: 10, width: '30%' }} >
                    <Link to="/Project">   <div>
                        <div style={{ position: 'absolute', marginTop: "22%", marginLeft: 20 }} >
                            <h1 style={{ color: 'white', marginBottom: -10, fontSize: '1em' }} >Project Title</h1>
                            <p style={{ textAlign: 'left', color: 'white', fontSize: '1em' }} >Category</p>
                        </div>

                        <img src={projectOne} style={{ marginTop: 30, width: 370 }} />
                    </div>    </Link>
                    <Link to="/Project">   <div>
                        <div style={{ position: 'absolute', marginTop: "25%", marginLeft: 20 }} >
                            <h1 style={{ color: 'white', marginBottom: -10, fontSize: '1em' }} >Project Title</h1>
                            <p style={{ textAlign: 'left', color: 'white', fontSize: '1em' }} >Category</p>
                        </div>
                        <img src={projectTwo} style={{ marginTop: 30, width: 370, height: 370 }} /> </div> </Link>
                </div>

                <Link to="/Project">  <div style={{ width: '35%', marginRight: 20, marginLeft: 20, }} >
                    <div style={{ position: 'absolute', marginTop: "54%", marginLeft: 20 }} >
                        <h1 style={{ color: 'white', marginBottom: -10, fontSize: '1em' }} >Project Title</h1>
                        <p style={{ textAlign: 'left', color: 'white', fontSize: '1em' }} >Category</p>
                    </div>
                    <img src={projectThree} style={{ marginTop: 30, height: 740, width: 370 }} />
                </div> </Link>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 0, width: '20%' }} >
                    <Link to="/Project">  <div>   <div style={{ position: 'absolute', marginTop: "25%", marginLeft: 20 }} >
                        <h1 style={{ color: 'white', marginBottom: -10, fontSize: '1em' }} >Project Title</h1>
                        <p style={{ textAlign: 'left', color: 'white', fontSize: '1em' }} >Category</p>
                    </div>
                        <img src={projectFour} style={{ marginTop: 30, width: 370, height: 370 }} /> </div>  </Link>
                    <Link to="/Project">   <div>   <div style={{ position: 'absolute', marginTop: "22%", marginLeft: 20 }} >
                        <h1 style={{ color: 'white', marginBottom: -10, fontSize: '1em' }} >Project Title</h1>
                        <p style={{ textAlign: 'left', color: 'white', fontSize: '1em' }} >Category</p>
                    </div>
                        <img src={projectFive} style={{ marginTop: 0, width: 370, height: 370 }} /> </div>  </Link>
                </div>
            </div>
            {/* <div style={{ marginTop: 100 }} >
                <h1 style={{ color: 'white', fontSize: 25, textAlign: 'center' }} >PDBS</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Architecture
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Approach
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Team
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Our Process
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Blog
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Press
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Careers
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Contact
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Privacy Policy
                    </p>
                </div>

            </div>

            <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }} >
                <img src={facebook} style={{ marginRight: 10, alignItems: 'center' }} />
                <img src={insta} style={{ marginRight: 10 }} />
                <img src={linked} style={{ marginRight: 10 }} />
                <img src={pint} style={{ marginRight: 10, backgroundColor: 'blue' }} />
            </div>

            <div style={{ fontSize: 10, color: '#b3a9a2', marginTop: 10, marginBottom: 100, textAlign: 'center' }} >
                &copy; OurCompany Name All rights reserved
            </div> */}



            <div style={{ paddingTop: 20, width: '100%', height: '100%', }} >
                <img src={Footer} />

                {/* <hr style={{ borderColor: '#7D7D7D' }} />
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}} >
                <hr style={{ borderColor: '#7D7D7D' }} />
                <div>

                    <div style={{display:'flex', flexDirection:'row', gap:20}} >
                        <img src={logo} style={{width:100, height:100}}/>
                        <p style={{fontSize:10, width:200, color:'white'}} >Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Eligendi non quis
                            exercitationem culpa nesciunt nihil aut
                            nostrum explicabo reprehenderit optio amet ab
                            temporibus asperiores quasi cupiditate.
                            Voluptatum ducimus</p>
                    </div>
                    <h1 style={{ fontSize: 14,  marginRight: 60, color: 'white' }} >Address: <span style={{ color: '#abadb0' }} >6505 Liberty Rd, Gwagon Oak, MD, 21207 </span> </h1>
                    <h1 style={{ fontSize: 14, marginRight: 60, color: 'white' }} >Phone: <span style={{ color: '#abadb0' }} >(+433 200 3170) </span></h1>
                </div>
                <div>
                    <h1 style={{fontSize:14, color:'white'}} >Navigation Links</h1>
                    <h1 style={{fontSize:14, color:'#abadb0'}} >Home</h1>
                    <h1 style={{fontSize:14, color:'#abadb0'}} >About Us</h1>
                    <h1 style={{fontSize:14, color:'#abadb0'}} >Services</h1>
                    <h1 style={{fontSize:14, color:'#abadb0'}} >Gallery</h1>
                    <h1 style={{fontSize:14, color:'#abadb0'}} >Virtual Estimates</h1>
                    <h1 style={{fontSize:14, color:'#abadb0'}} >Testimonial</h1>
                </div>
                <div>
                <h1 style={{fontSize:14, color:'white'}} >Legal & Policy</h1>
                    <h1 style={{fontSize:14, color:'#abadb0'}} >Terms & Conditions</h1>
                    <h1 style={{fontSize:14, color:'#abadb0'}} >Privacy policy</h1>
                </div>
                <hr style={{ borderColor: '#7D7D7D' }} />
                <div style={{display:'flex', flexDirection:'column', gap:20}} >
                <img src={facebook} style={{ marginRight: 10, alignItems: 'center' }} />
               
               
                <img src={pint} style={{ marginRight: 10, backgroundColor: 'blue' }} />
                <img src={insta} style={{ marginRight: 10 }} />
                <img src={linked} style={{ marginRight: 10 }} />
                </div> */}
                {/* </div> */}
            </div>

        </div>

    )
}

export default Home