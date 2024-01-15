import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Header = ({ title }: { title: string }) => {
  return <StyledHeader>{title}</StyledHeader>;
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  padding: 1.5rem 1.8rem;
  border-bottom: 1px solid #f0f0f2;
  font-size: 1.125rem;
  font-weight: 700;
`;
