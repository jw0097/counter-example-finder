import React from 'react';
import styled from '@emotion/styled';
import { MESSAGE } from '../../constants/message';

const Terminal = () => {
  return (
    <TerminalContainer>
      <TerminalHeaderContainer>
        <TerminalHeaderLeftWrapper>
          <TerminalHeaderText>{MESSAGE.terminal}</TerminalHeaderText>
        </TerminalHeaderLeftWrapper>
      </TerminalHeaderContainer>
      <TerminalContentWrapper>
        <TerminalContents role="document">TerminalContents</TerminalContents>
      </TerminalContentWrapper>
    </TerminalContainer>
  );
};

const TerminalContainer = styled.div((props) => ({
  ...props.theme.grid.terminal,
}));

const TerminalHeaderContainer = styled.div((props) => ({
  height: '40px',
  backgroundColor: props.theme.palette.gray,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const TerminalHeaderLeftWrapper = styled.div({
  display: 'flex',
  marginLeft: '20px',
});

const TerminalHeaderText = styled.h2((props) => ({
  ...props.theme.typo.innerHeader,
}));

const TerminalContentWrapper = styled.div({
  marginLeft: '5px',
  marginTop: '5px',
});

const TerminalContents = styled.div((props) => ({
  ...props.theme.typo.contents,
}));

export default Terminal;
