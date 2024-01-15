import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

interface INode {
  mdx: {
    frontmatter: {
      date: string;
    };
  };
}

const BlogPost = ({
  data,
  children,
}: {
  data: INode;
  children: React.ReactNode;
}) => {
  return (
    <PostWrapper>
      <Date>{data.mdx.frontmatter.date}</Date>
      <Post>{children}</Post>
    </PostWrapper>
  );
};

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

const PostWrapper = styled.section``;

const Post = styled.article`
  padding: 1.2rem;
`;

const Date = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  text-align: right;
  color: #c0c0c0;
`;
