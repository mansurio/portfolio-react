import React, { useState, useEffect } from "react";
import ProjectList from "../projectList/ProjectList";
import "./Project.scss";
import { bootstrapcss, javascript, reactjs, nodejs } from "../../data";
import { Select } from "@material-ui/core";

function Project() {
  const [select, setSelect] = useState("cssBootstrap");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "cssBootstrap",
      title: "Css & Bootstrap",
    },
    {
      id: "javascript",
      title: "Javascript",
    },
    {
      id: "reactjs",
      title: "React Js",
    },
    {
      id: "nodejs",
      title: "Node Js",
    },
  ];

  useEffect(() => {
    switch (select) {
      case "cssBootstrap":
        setData(bootstrapcss);
        break;
      case "javascript":
        setData(javascript);
        break;
      case "reactjs":
        setData(reactjs);
        break;
      case "nodejs":
        setData(nodejs);
        break;
      default:
        setData(bootstrapcss);
    }
  }, [select]);
  return (
    <div className="project" id="project">
      <div className="line">
        <h1>Project</h1>
        <div className="underline"></div>
      </div>
      <ul>
        {list.map((items) => {
          return (
            <ProjectList
              title={items.title}
              active={select === items.id}
              setSelect={setSelect}
              id={items.id}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
