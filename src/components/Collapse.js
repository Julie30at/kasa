import React, { useState, useRef, useEffect } from 'react';
import arrowTop from '../assets/arrow_back_top.png';
import '../styles/Collapse.scss';

export function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [toggle]);

  return (
    <div className={`collapse ${toggle ? 'expanded' : 'collapsed'}`}>
      <h3 className={`collapse_title ${toggle ? 'expanded' : ''}`}>
        {title}
        <img
          className={`arrow ${toggle ? 'arrow_down' : 'arrow_up'}`}
          src={arrowTop}
          alt="Toggle content"
          onClick={handleToggle}
        />
      </h3>

      <div
        className="collapse_content-wrapper"
        style={{
          height: toggle ? height : '0px',
          padding: toggle ? '0px' : '0px',
        }}
      >
        <div className="collapse_content" ref={contentRef}>
          {Array.isArray(content)
            ? content.map((item, index) => <p key={index}>{item}</p>)
            : content}
        </div>
      </div>
    </div>
  );
}
