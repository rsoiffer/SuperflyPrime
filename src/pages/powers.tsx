import { graphql, PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout from "../components/layout";

export default ({ data }: PageProps<any>) => {
  const powers = data.allFile.nodes[0].childMdx;

  return (
    <Layout>
      <Helmet>
        <title>Superfly Prime</title>
      </Helmet>

      <h1>Superfly Prime</h1>
      <MDXRenderer>{powers.body}</MDXRenderer>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "documents"}, name: {eq: "powers"}}) {
      nodes {
        childMdx {
          body
        }
      }
    }
  }
`;
