import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const links = [];
  data.pages.edges.forEach(function (page) {
    const recipe = page.node.context?.recipe;
    if (recipe) {
      links.push({ title: recipe.title, path: page.node.path });
    }
  });
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <ul style={{ margin: 0, listStyleType: `none` }}>
        {links.map(function (link) {
          return (
            <li key={link.title}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    pages: allSitePage {
      edges {
        node {
          path
          context {
            recipe {
              title
              slug
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
