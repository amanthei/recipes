import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Divider from "../components/divider";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const links = [];
  data.pages.edges.forEach(function (page) {
    const recipe = page.node.context?.recipe;
    if (recipe) {
      links.push({
        title: recipe.title,
        category: recipe.category,
        path: page.node.path,
      });
    }
  });
  const categories = [...new Set(links.map((link) => link.category))];
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      {categories.map(function (category, index) {
        return (
          <section key={index}>
            <h3 style={{ marginBottom: `1rem` }}>{category}</h3>
            {links.map(function (link, index) {
              if (link.category === category) {
                return (
                  <ul key={index} style={{ margin: 0, listStyleType: `none` }}>
                    <li key={link.title}>
                      <Link to={link.path}>{link.title}</Link>
                    </li>
                  </ul>
                );
              } else {
                return null;
              }
            })}
            <Divider></Divider>
          </section>
        );
      })}
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
              category
              slug
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
