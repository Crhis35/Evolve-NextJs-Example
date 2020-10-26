import React, { useEffect } from "react";

import Project from "./project";
import { IData, Image as Img, IPost } from "../../interfaces/post";

import { BtnWrapper, BtnButton, Section, InnerTitle } from "../base/base";

import "./styles.css";

const ProjectContainer = ({ props }: { props: IData }) => {
  useEffect(() => {
    console.log("lo");
  }, [props]);

  console.log(props);
  const {
    data: { posts },
    fetchMore,
  } = props;
  return (
    <>
      <Section>
        <InnerTitle>Blogs</InnerTitle>
      </Section>
      {posts.map((post: IPost) => {
        const { id, title, image } = post;
        const newImage = new Img();
        newImage.url =
          process.env.NODE_ENV !== "development"
            ? image[0].url
            : process.env.API_URL + image[0].url;
        return <Project key={id} title={title} id={id} image={newImage} />;
      })}
      <BtnWrapper className="btn-wrapper-fetch">
        <BtnButton
          onClick={() => {
            console.log("hi");
            fetchMore({
              variables: {
                limit: posts.length + 5,
              },
            });
          }}
        >
          View More
        </BtnButton>
      </BtnWrapper>
    </>
  );
};
export default ProjectContainer;
