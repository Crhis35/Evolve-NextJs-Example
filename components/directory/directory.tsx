import React from "react";
import { DirectoryContainer } from "./directory.style";

import Landing from "../landing/landing.component";

const Directory: React.FC = () => {
  return (
    <DirectoryContainer>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="./keyboard.mp4" type="video/mp4" />
        </video>
      </div>
      <Landing />
    </DirectoryContainer>
  );
};

export default Directory;
