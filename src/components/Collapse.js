import arrowTop from "../assets/arrow_back_top.png"
import arrowBottom from "../assets/arrow_back_bottom.png"
import "../styles/Collapse.scss"
import { useState } from "react";

export function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="collapse">
      <h3 className="collapse_title">
        {title}
        <img
          className={toggle ? 'arrow arrow_down' : 'arrow arrow_up'}
          src={toggle ? arrowBottom : arrowTop}
          alt="toggle content"
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
