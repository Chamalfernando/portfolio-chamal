import React from "react";
import { useParams } from "react-router-dom";
import Biomark from "./Biomark";

function ProjectExplain() {
  const { title } = useParams<{ title: string }>();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {title === "Biomark" && <Biomark />}
      {title === "Ecomern" && <p>lorem ipsum10</p>}
      {title === "Freelancing Platform" && <p>lorem ipsum20</p>}
      {title === "Donation Web Platform" && <p>lorem ipsum30</p>}
    </div>
  );
}

export default ProjectExplain;
