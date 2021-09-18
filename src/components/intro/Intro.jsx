import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped";

function Intro() {
  const textType = useRef();

  useEffect(() => {
    init(textType.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,

      strings: ["Development"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>
            <span>H</span>i There, Im
          </h2>
          <h1>
            Ma<span>ns</span>ur
          </h1>
          <h3>
            Front End <span ref={textType}></span>
          </h3>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Intro;
