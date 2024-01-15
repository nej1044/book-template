import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface INode {
  frontmatter: {
    slug: string;
    title: string;
    date: Date;
  };
  id: React.Key;
  excerpt: string;
}

const Sidebar = ({ data }: { data: INode[] }) => {
  return (
    <Nav>
      <ul>
        {data.map((node: INode) => (
          <li>
            <CustomLink to={`/blog/${node.frontmatter.slug}`} key={node.id}>
              {node.frontmatter.title}
            </CustomLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default Sidebar;

const Nav = styled.nav`
  width: 20%;
  height: calc(100vh - 3.125rem);
  padding: 0.7rem;
  border-right: 1px solid #f0f0f2;
  font-size: 1rem;
  ul {
    margin: 0;
    list-style: none;
    li {
      display: inline-block;
      width: 100%;
      font-weight: 400;
    }
  }
`;

const CustomLink = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 1rem;
  color: inherit;
  text-decoration: none;
  transition-property: background-color, color;
  transition-timimg-function: ease;
  transition-duration: 0.5s;
  &:hover {
    color: #fff;
    background-color: #909090;
  }
`;
