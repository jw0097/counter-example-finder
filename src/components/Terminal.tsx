import styled from '@emotion/styled';
import React from 'react';

const Terminal = () => {
  return <TerminalContainer>Terminal</TerminalContainer>;
};

const TerminalContainer = styled.div((props) => ({
  ...props.theme.grid.terminal,
}));

export default Terminal;
