import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar';
import Button from './Components/Buttons';
import Section from './Components/Section';
import Product from './Components/Product-list';
import Footer from './Components/Footer';
import img1 from './Image/img1.png'
import img2 from './Image/img2.png'
import img3 from './Image/img3.png'
import video from './Image/Video.mp4'
import imgGirl from './Image/cyberpunk.jpeg'
import imgGirl2 from './Image/Samurai.jpg'
import imgGirl3 from './Image/space.jpg'
import imgGirl4 from './Image/freepik.jpeg'
import './Style/App.css'
import './Style/Animation.css'
import './Style/Video.css'


const images = [imgGirl, imgGirl2, imgGirl3, imgGirl4]; 

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500); // Durasi transisi 500ms (0.5 detik)
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(interval); 
  }, []);
  return (
    
    <body>
      <Navbar />

    <div className="container">
      <img src={images[currentImageIndex]} alt="" className={`imgGirl ${isTransitioning ? 'fade' : ''}`}/>
      <div className="shadowBox"/>

      <div className="content-text">
        <h1>A Future Envisioned <br /> <span>Forever to Explore Everywhere.</span></h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate itaque perspiciatis enim quaerat, qui eligendi quis optio sed quidem adipisci voluptas nesciunt accusamus tempora maiores! Itaque ipsum fugiat voluptatibus in corrupti quibusdam, veritatis consequatur illo?</p>
      
        <Button />
      </div>
    </div>

    <Section />

    <div className="Section1">
      <h2>everything you need is <span>here</span></h2>

      <div className="section1-content">
        <div className="item">
          <img src={img1} alt="" />
          <p><span>24/7 support </span><br /> online consultation</p>
        </div>
        <div className="item">
          <img src={img2} alt="" />
          <p><span>Free delivery</span> on <br /> orders from Rp. 500rb</p>
        </div>
        <div className="item">
          <img src={img3} alt="" />
          <p><span>Easy Return</span> and <span>30-day</span> money <br /> back guaranty. <span style={{textDecoration: "underline", fontWeight: "normal"}}>More information</span></p>
        </div>
      </div>
    </div>

    <div className="products">
      <ul>
        <li>trending</li>
        <li>new</li>
        <li>popular</li>
      </ul>
      <div className="underline"></div>
    </div>

    <Product />

     <div className="banner">
      <video autoPlay muted loop >
        <source src={video} type='video/mp4'/>
      </video>
      <div className="banner-content">
      <h1>make your <br /> best decision-<span>join us</span></h1>
      <button>Join</button>
      </div>
    </div>

    <Footer/>

    </body>
  )
}

export default App
