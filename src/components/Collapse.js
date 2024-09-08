import React, { useState, useRef } from 'react';
import arrowTop from '../assets/arrow_back_top.png';
import '../styles/Collapse.scss';

export function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);
  const contentRef = useRef(null);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle); 
  };

  const isExpanded = toggle ? 'expanded' : '';
  const arrowDirection = toggle ? 'arrow_down' : 'arrow_up';

  return (
    <div className={`collapse ${isExpanded}`}>
      {' '}
      <h3 className={`collapse_title ${isExpanded}`}>
        {' '}
        {title} 
        <img
          className={`arrow ${arrowDirection}`} 
          src={arrowTop} 
          alt="Toggle content"
          onClick={handleToggle} 
        />
      </h3>
      <div
        className="collapse_content-wrapper"
        style={{
          height: toggle ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div className="collapse_content" ref={contentRef}>
          {Array.isArray(content)
            ? content.map((item, index) => <p key={index}>{item}</p>) 
            : content}{' '}
        </div>
      </div>
    </div>
  );
}
