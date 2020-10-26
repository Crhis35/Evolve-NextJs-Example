import { HomePageContainer } from "components/homepage/homeContainer";
import Layout from "components/layout/layout";

import { gql } from "@apollo/client";
import Query from "components/Query";
import Project from "components/project/project";
import { Queries } from "../interfaces/queries";
import { DataPost, Image as Img } from "interfaces/post";
import Directory from "components/directory/directory";
import About from "components/about/about";
import Services from "components/services/services.component";

const LAST_PROJECT = gql`
  query posts($sort: String, $start: Int, $limit: Int) {
    posts(sort: $sort, start: $start, limit: $limit) {
      id
      title
      image {
        url
      }
    }
  }
`;

const Home: React.FC<any> = ({ ...otherProps }) => {
  const queries = new Queries({ sort: "createdAt:DESC", limit: 1 });
  return (
    <Layout>
      <HomePageContainer>
        <Directory />
        <About />
        <Services />
        <Query query={LAST_PROJECT} queries={queries}>
          {({ data: { posts } }: { data: DataPost }) => {
            const { id, image, title } = posts[0];
            const newImage = new Img();
            newImage.url =
              process.env.NODE_ENV !== "development"
                ? image[0].url
                : process.env.API_URL + image[0].url;
            return (
              <Project image={newImage} title={title} id={id} {...otherProps} />
            );
          }}
        </Query>
      </HomePageContainer>
    </Layout>
  );
};

export default Home;
