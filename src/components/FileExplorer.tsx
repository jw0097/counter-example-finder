import styled from '@emotion/styled';
import React from 'react';

const FileExplorer = () => {
  return <FileExplorerContainer>FileExplorer</FileExplorerContainer>;
};

const FileExplorerContainer = styled.div((props) => ({
  backgroundColor: props.theme.palette.gray,
  ...props.theme.grid.fileExplorer,
}));

export default FileExplorer;
