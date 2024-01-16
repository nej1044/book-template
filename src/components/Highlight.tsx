import React from 'react';
import styled from 'styled-components';

export default ({ children }: { children: string }) => {
  return <HighlightText>{children}</HighlightText>;
};

const HighlightText = styled.strong`
  background-color: #f1d5ca;
`;
