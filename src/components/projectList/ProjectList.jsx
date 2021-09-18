import React from "react";
import "./ProjectList.scss";

export default function ProjectList({ id, title, active, setSelect }) {
  return (
    <>
      <li
        className={active ? "projectList active" : "projectList"}
        onClick={() => setSelect(id)}
      >
        {title}
      </li>
    </>
  );
}
