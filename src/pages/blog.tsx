import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/soe";
import { graphql } from "gatsby";

const BlogPage = ({ data }: any) => {
  return (
    <main>
      <title>Blog</title>
      <Layout pageTitle="My Blog Posts">

      </Layout>
    </main>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
