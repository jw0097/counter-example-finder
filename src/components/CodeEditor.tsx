import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & CustomProps;

type CustomProps = {
  pos?: string;
};

const CodeEditor = ({ pos, children, ...props }: Props) => {
  return (
    <CodeEditorContainer pos={pos} {...props}>
      {children}
    </CodeEditorContainer>
  );
};

const CodeEditorContainer = styled.div<{ pos?: string }>((props) => ({
  ...(props.pos === 'left'
    ? props.theme.grid.codeOne
    : props.theme.grid.codeTwo),
}));

export default CodeEditor;
