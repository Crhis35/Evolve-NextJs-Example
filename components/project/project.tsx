import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { InnerTitle, Slogan, Btn, BtnWrapper } from "components/base/base";
import { LastProject, ProjectWrapper } from "./project.styles";

import { IPost } from "../../interfaces/post";

const Project: React.FC<IPost> = (post: IPost, otherProps: any) => {
  const { title, id, image } = post;
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <LastProject image={image.url}>
      <ProjectWrapper data-aos="fade-up">
        <InnerTitle>{title}</InnerTitle>
        <Slogan inputColor="#fff">
          We have Developed <br /> an AI
        </Slogan>
        <BtnWrapper>
          <Btn href={`blog/${id}`}>View Details</Btn>
        </BtnWrapper>
      </ProjectWrapper>
    </LastProject>
  );
};
export default Project;
