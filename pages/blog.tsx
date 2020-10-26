import React, { useEffect } from "react";
import { gql } from "@apollo/client";
import Layout from "components/layout/layout";

import Query from "../components/Query";
import ProjectContainer from "../components/project/project.container";
import { Queries } from "interfaces/queries";
import { IData } from "interfaces/post";

const ALL_BLOGS = gql`
  query posts($sort: String, $start: Int, $limit: Int) {
    posts(sort: $sort, start: $start, limit: $limit) {
      id
      uid
      title
      image {
        url
      }
    }
  }
`;

const blog: React.FC<any> = () => {
  useEffect(() => {}, []);
  const queries = new Queries({
    start: 0,
    limit: 5,
    sort: "createdAt:DESC",
  });
  return (
    <Layout>
      return (
      <Query query={ALL_BLOGS} queries={queries}>
        {(props: IData) => {
          console.log(props);
          return <ProjectContainer props={props} />;
        }}
      </Query>
    </Layout>
  );
};

export default blog;
