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
import search from '../assets/magnify.png'
import ad from '../assets/Rectangle 244.png'
import chevron from '../assets/chevron-right.png'
import home from '../assets/Rectangle 245.png'
import home1 from '../assets/Rectangle 246 (1).png'
import home2 from '../assets/Rectangle 246 (2).png'
import home3 from '../assets/Rectangle 246 (3).png'
import frame from '../assets/Frame 169.png'

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

        <div style={{ backgroundColor: ' #131F2F', overflow: 'hidden' }} >
            <div style={{ backgroundColor: ' #131F2F', paddingTop: 5, paddingBottom: 30 }} >
                <div style={{ backgroundColor: '  #131F2F' }} >
                <hr style={{ height: 30, position: 'absolute',top:10,right:'3%', marginRight: '25%', borderColor: 'white' }} />
                    <img style={{ height: 20, width: 100,position:'absolute', top:20,left:7, marginLeft: 70}} src={logo} />
                    <div style={{ height:'20px',display: 'flex',position:'absolute',top:20,right:'8%', width: '200px',backgroundColor: '#FFFFFF33',padding: '8px',}}>
                        <img src={search} alt="Search" style={{marginLeft: '8px',cursor: 'pointer',}}/>
                        <input style ={{background: 'none',color:' #FFFFFFCC'}} placeholder="Search"/>
                         </div>
                    <hr style={{ marginTop: 50, borderColor: '#b3a9a2' }} />

                </div>
                <div style={{ backgroundColor: '#131F2F', flexDirection: 'row', paddingLeft: 60, paddingRight: 60, display: 'flex', justifyContent: 'space-between', marginBottom: -15, }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 30, backgroundColor: '#131F2F' }} >
                        <h1 style={{ fontSize: 14, color: 'white', gap: 0, marginLeft: 300, width: 60, marginBottom: 5, borderBottomWidth: currentPage === "home" ? 3 : 0, borderBottomColor: 'white', borderBottomStyle: 'solid', textAlign: 'center' }} >Home</h1>
                        <h1 style={{ fontSize: 14, color: 'white', gap: 0, width: 60, marginBottom: 5, borderBottomWidth: currentPage === "services" ? 3 : 0, borderBottomColor: 'white', borderBottomStyle: 'solid', textAlign: 'center' }} >ADVISORY</h1>
                        <h1 style={{ fontSize: 14, color: 'white', gap: 0, width: 60, marginBottom: 5, borderBottomWidth: currentPage === "gallery" ? 3 : 0, borderBottomColor: 'white', borderBottomStyle: 'solid', textAlign: 'center' }} >RESIDENTIAL</h1>
                        <h1 style={{ fontSize: 14, color: 'white', gap: 0, width: 120, marginBottom: 5, borderBottomWidth: currentPage === "virtual" ? 3 : 0, borderBottomColor: 'white', borderBottomStyle: 'solid', textAlign: 'center' }} >COMMERCIAL</h1>
                        <h1 style={{ fontSize: 14, color: 'white', gap: 0, width: 60, marginBottom: 5, borderBottomWidth: currentPage === "testimonial" ? 3 : 0, borderBottomColor: 'white', borderBottomStyle: 'solid', textAlign: 'center' }} >MEDIA</h1>
                        <h1 style={{ fontSize: 14, color: 'white', gap: 0, width: 60, marginBottom: 5, borderBottomWidth: currentPage === "testimonial" ? 3 : 0, borderBottomColor: 'white', borderBottomStyle: 'solid', textAlign: 'center' }} >CONTACT US</h1>
                    </div>
                </div>
                
            </div>
            <div style={{backgroundColor:'#131F2F',justifyContent:'center',display:'flex',flexDirection:'row'}}>
                <img  style={{width:'50%',justifyContent:'center',alignSelf:"center"}}src={ad}/>
                </div>
           <div style={{backgroundColor:'white',justifyContent:'center',display:'flex',flexDirection:'row'}}>
                    <h style={{marginRight: '5px'}}>Home</h>
                    <img src={chevron}/>
                    <h>Blogs</h>
                    </div> 
                
            <div style={{ backgroundColor: 'white' }} >
            <hr style={{display:'flex',width:'1350px', borderColor: '#3333334D' }} />
            <h1 style={{marginBottom: 5,fontSize:12 ,  textAlign: 'center' }} >FEATURED POST</h1>
            <h1 style={{marginBottom: 5,fontSize:30 , textAlign: 'center'}}>The Ultimate Guide to Augmented Reality: Real Estate Reimagined</h1>
              
               <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
                <div>
                <img src={home}/>

                <p>Imagine a works where homes come to you, wals wheper their patential, and every empty saace is a comes for your iregination, inagie a word where rames tone to you, wals whiter thei potmtial and every empty space is a cure for your imagination, imagine a verte whore fumes core to pea wall
                    aNsper thek posancbe, and tvery onpry space f a cansas for your inagination. Inagine a wortetere tomes come to you wals whiper their potontfal
                    and every ematy fasce is a cans for vour seart tore.</p>
                
                </div>
               </div>
                  <hr style={{ marginBottom: 90, borderColor: '#b3a9a2', marginTop: 150,top:20 }} />
            
                <div style={{ marginBottom: 1000,backgroundColor: '#1D2939', display: 'flex', flexDirection: 'column', marginTop: 40, }} >
                    <div style={{ display: 'block', alignItems: 'center', marginBottom: 40,marginLeft: '200px'}}>
                        <p style={{color:'white'}}>Business</p>
                        <p style={{ textAlign: 'justify', color: 'white', fontSize:'20px',fontWeight: 'bold',width:'300px' }} >Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Eligendi non quis
                                    exercitationem 
                                    </p>
                        <p style={{color: 'white'}}>March 1 2024</p>
                        <p style={{ textAlign: 'justify', color: 'white', fontSize:'20px',width:'300px' }} >Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Eligendi non quis
                                    exercitationem culpa nesciunt nihil aut
                                    nostrum explicabo reprehenderit optio amet ab
                                    temporibus asperiores quasi
                                    cupiditate. Voluptatum ducimus</p>
                                  
                        <hr style={{ marginBottom: 90, borderColor: '#b3a9a2', marginTop: 90,top:20 }} />
                    </div>

                    <div style={{marginLeft: '200px'}}>
                        <p style={{color:'white'}}>Finance</p>
                        <p style={{ textAlign: 'justify', color: 'white', fontSize:'20px',fontWeight: 'bold',width:'300px' }} >Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Eligendi non quis
                                    exercitationem 
                                    </p>
                        <p style={{color: 'white'}}>March 1 2024</p>
                        <p style={{ textAlign: 'justify', color: 'white', fontSize:'20px',width:'300px' }} >Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Eligendi non quis
                                    exercitationem culpa nesciunt nihil aut
                                    nostrum explicabo reprehenderit optio amet ab
                                    temporibus asperiores quasi
                                    cupiditate. Voluptatum ducimus</p>
                                     
                        <hr style={{ marginBottom: 90, borderColor: '#b3a9a2', marginTop: 90,top:20 }} />
                    </div>

                    <div style={{marginLeft: '200px'}}>
                        <p style={{color:'white'}}>Finance</p>
                        <p style={{ textAlign: 'justify', color: 'white', fontSize:'20px',fontWeight: 'bold',width:'300px' }} >Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Eligendi non quis
                                    exercitationem 
                                    </p>
                        <p style={{color: 'white'}}>March 1 2024</p>
                        <p style={{ textAlign: 'justify', color: 'white', fontSize:'20px',width:'300px' }} >Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Eligendi non quis
                                    exercitationem culpa nesciunt nihil aut
                                    nostrum explicabo reprehenderit optio amet ab
                                    temporibus asperiores quasi
                                    cupiditate. Voluptatum ducimus</p>               
                    </div>
                    {/* <div>
                        <img src={home1}/>
                        <img src={home2}/>
                        <img src={home3}/>

                    </div> */}
                    <div>
                    <img src={frame}/>
                    
                    </div>
                </div>

            </div>
           
           
        

           
            </div>
            
           

        
    

    )
}


export default Home