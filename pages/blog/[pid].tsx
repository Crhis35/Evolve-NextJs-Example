import Layout from "components/layout/layout";
import { useRouter } from "next/router";

const Blog = () => {
  const { query } = useRouter();
  console.log(query);
  return (
    <Layout>
      <div>hi</div>
    </Layout>
  );
};

export default Blog;
