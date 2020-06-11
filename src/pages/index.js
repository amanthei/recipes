import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image"
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const links = [];
  data.pages.edges.forEach(function (page) {
    console.log(page.node.context);
    const recipe = page.node.context.recipe;
    if (recipe) {
      links.push({ title: recipe.title, path: page.node.path });
    }
  });
  console.log(links);
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      </div>
      <ul style={{ margin: 0, listStyleType: `none` }}>
        {links.map(function (link) {
          return (
            <li>
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
