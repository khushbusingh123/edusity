import React from 'react';
import './Programs.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        
        {/* External Link */}
    

        <div className="caption"><a href="https://workspace.google.com/products/docs/" target="_blank" rel="noopener noreferrer">
          <img src={program_icon_1} alt=""  style={{ cursor: "pointer" }}/>
         </a>
          <p>Graduation Degree</p>
        </div>
      </div>
      
      <div className='program'>
     
        <img src={program_2} alt="" />
        <div className="caption">
        <a href ="new.html">   <p>Master Degree</p>
          <img src={program_icon_2} alt="" /></a>
           
          
        </div>
      </div>
      
      <div className='program'>
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
