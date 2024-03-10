import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';
import { MESSAGE } from '../../constants/message';

type Props = HTMLAttributes<HTMLDivElement> & CustomProps;

type CustomProps = {
  pos?: string;
};

const CodeEditor = ({ pos, ...props }: Props) => {
  return (
    <CodeEditorContainer pos={pos} {...props}>
      <CodeEditorHeaderContainer>
        <CodeEditorHeaderWrapper>
          <CodeEditorHeaderText>
            {pos === 'left' ? MESSAGE.yourCodeEditor : MESSAGE.answerEditor}
          </CodeEditorHeaderText>
        </CodeEditorHeaderWrapper>
      </CodeEditorHeaderContainer>
      <CodeEditorContentContainer>
        <CodeEditorContentWrapper>
          <CodeEditorContents></CodeEditorContents>
        </CodeEditorContentWrapper>
      </CodeEditorContentContainer>
    </CodeEditorContainer>
  );
};

const CodeEditorContainer = styled.div<{ pos?: string }>((props) => ({
  ...(props.pos === 'left'
    ? props.theme.grid.codeOne
    : props.theme.grid.codeTwo),
  backgroundColor: props.theme.palette.black,
}));

const CodeEditorHeaderContainer = styled.div((props) => ({
  height: '40px',
  backgroundColor: props.theme.palette.black,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${props.theme.palette.gray}`,
}));

const CodeEditorHeaderWrapper = styled.div({
  display: 'flex',
  marginLeft: '20px',
});

const CodeEditorHeaderText = styled.h2((props) => ({
  ...props.theme.typo.innerHeader,
}));

const CodeEditorContentContainer = styled.div({
  marginTop: '5px',
  marginLeft: '5px',
});

const CodeEditorContentWrapper = styled.div({});

const CodeEditorContents = styled.textarea((props) => ({
  ...props.theme.typo.contents,
  backgroundColor: props.theme.palette.black,
  border: 'none',
  outline: 'none',
  resize: 'none',
  width: '100%',
  height: '90%',
  padding: '10px',
}));

export default CodeEditor;
