import React, { useRef, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  const [tx, setTx] = useState(0);

  const slideForward = () => {
    if (tx > -50) {
      setTx(tx - 25);
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      setTx(tx + 25);
    }
  };

  // Apply transformation whenever tx changes
  if (slider.current) {
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          {[user_1, user_2, user_3, user_4].map((user, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={user} alt={`User ${index + 1}`} />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue the degree at Edusity has changed my life a lot. I am very
                  happy with my work and excellent performance.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
