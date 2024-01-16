import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import '../styles/main.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            slug
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          excerpt
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Header title={data.site.siteMetadata.title} />
      <FlexWrapper>
        <Sidebar data={data.allMdx.nodes} />
        <Main>{children}</Main>
      </FlexWrapper>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const FlexWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Main = styled.section`
  width: 80%;
  height: 96%;
  padding: 2rem;
  overflow-y: scroll;
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h1,
  h2,
  h3 {
    margin: 0.5rem 0;
  }
`;
