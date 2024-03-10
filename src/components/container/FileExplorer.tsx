import styled from '@emotion/styled';
import React from 'react';
import { MESSAGE } from '../../constants/message';

const FileExplorer = () => {
  return (
    <FileExplorerContainer>
      <FileExplorerHeaderContainer>
        <FileExplorerHeaderWrapper>
          <FileExplorerHeaderText>
            {MESSAGE.fileExplorer}
          </FileExplorerHeaderText>
        </FileExplorerHeaderWrapper>
      </FileExplorerHeaderContainer>
      <FileExplorerContentContainer>
        <FileExplorerContentWrapper>
          <FileExplorerContents role="document">
            FileExplorerContents
          </FileExplorerContents>
        </FileExplorerContentWrapper>
      </FileExplorerContentContainer>
    </FileExplorerContainer>
  );
};

const FileExplorerContainer = styled.div((props) => ({
  backgroundColor: props.theme.palette.gray,
  ...props.theme.grid.fileExplorer,
}));

const FileExplorerHeaderContainer = styled.div((props) => ({
  height: '40px',
  backgroundColor: props.theme.palette.gray,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${props.theme.palette.black}`,
}));

const FileExplorerHeaderWrapper = styled.div({
  display: 'flex',
  marginLeft: '20px',
});

const FileExplorerHeaderText = styled.h2((props) => ({
  ...props.theme.typo.innerHeader,
}));

const FileExplorerContentContainer = styled.div({
  marginTop: '5px',
  marginLeft: '5px',
});

const FileExplorerContentWrapper = styled.div({});

const FileExplorerContents = styled.div((props) => ({
  ...props.theme.typo.header,
}));

export default FileExplorer;
