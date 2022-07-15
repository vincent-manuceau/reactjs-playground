import React, { useState, useRef, useEffect } from "react";
import "./Accordion.css";
import Chevron from "./chevron-up.svg";

export default function Accordion() {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const toggleState = () => setToggle(!toggle);

  const refHeight = useRef();
  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  console.log(toggle);

  return (
    <div className="accordion">
      <div onClick={toggleState} className="accordion-visible">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <img className={toggle ? "animated-chevron": ""} src={Chevron} alt="chevron down" />
      </div>

      <div
        ref={refHeight}
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
      >
        <p aria-hidden={toggle?"true":"false"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          delectus inventore ullam, debitis quia dolor dolore dolorem dicta
          eveniet sunt, vero odio provident perspiciatis accusantium laudantium
          asperiores distinctio, beatae voluptatum.
        </p>
      </div>
    </div>
  );
}
