import "./index.scss";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout from "../components/layout";

export default ({ data }) => {
  const powers = data.allFile.nodes[0].childMdx;

  return (
    <Layout>
      <h1>SuperFate Prime</h1>
      <MDXRenderer>{powers.body}</MDXRenderer>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "powers"}}) {
      nodes {
        childMdx {
          body
        }
      }
    }
  }
`;
