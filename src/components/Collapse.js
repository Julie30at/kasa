import React, { useState } from 'react';
import arrowTop from '../assets/arrow_back_top.png';
import arrowBottom from '../assets/arrow_back_bottom.png';
import '../styles/Collapse.scss';

export function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="collapse">
      <h3 className={`collapse_title ${toggle ? 'expanded' : ''}`}>
        {title}
        <img
          className={`arrow ${toggle ? 'arrow_down' : 'arrow_up'}`}
          src={toggle ? arrowBottom : arrowTop}
          alt="Toggle content"
          onClick={() => setToggle(!toggle)}
        />
      </h3>

      {toggle && (
        <div className="collapse_content">
          {Array.isArray(content)
            ? content.map((item, index) => <p key={index}>{item}</p>)
            : content}
        </div>
      )}
    </div>
  );
}
