import React, { useEffect, useRef } from 'react';
import '../Style/Section.css';
import img1 from '../Image/Image1.png'
import img2 from '../Image/Image2.png'
import img3 from '../Image/Image3.png'

function Section() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
        } else {
          entry.target.classList.remove('slide-up');
        }
      });
    });

    const items = containerRef.current.querySelectorAll('.vr-item');
    items.forEach((element, index) => {
      element.style.transitionDelay = `${index * 0.2}s`; // Delay each item
      observer.observe(element);
    });

    return () => {
      items.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return(
    <div class="section" >
      <h2>DISCOVER NEWS AND INNOVATIONS</h2>
        <div class="content-container" ref={containerRef} >
          <div class="vr-item" >
            <img src={img1} alt="Gaming setup" />
            <h3>ALWAYS IN THE GAME</h3>
            <p>
              Stay ahead of the latest and greatest gaming tech, featuring new
              releases, exclusive deals, and exciting pre-orders.
            </p>
            <a href="#">See More</a>
          </div>

          <div class="vr-item">
            <img src={img2} alt="Headphones" />
            <h3>ENHANCE YOUR EXPERIENCE</h3>
            <p>
              Upgrade your world by elevating your setup and personalizing your
              space with our collection of stylish gaming accessories.
            </p>
            <a href="#">See More</a>
          </div>
          <div class="vr-item">

            <img src={img3} alt="Gaming keyboard" />
            <h3>COMMAND THE BATTLE!</h3>
            <p>
              Take control with our diverse range of gaming keyboards, featuring
              mechanical switches for tactile feedback.
            </p>
            <a href="#">See More</a>
          </div>
      </div>
    </div>

    // <BaxShadow />
    
  )
}

export default Section