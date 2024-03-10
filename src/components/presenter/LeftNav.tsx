import styled from '@emotion/styled';
import React from 'react';
import Document from '../../assets/svg/Document';
import Flow from '../../assets/svg/Flow';
import Extension from '../../assets/svg/Extension';
import MoreButton from '../../assets/svg/MoreButton';
import Terminal from '../../assets/svg/Terminal';
import PlayButton from '../../assets/svg/PlayButton';
import Info from '../../assets/svg/Info';
import Git from '../../assets/svg/Git';

const LeftNav = () => {
  return (
    <>
      <LeftNavUpperWrapper role="figure">
        <Document />
        <Flow />
        <Extension />
        <MoreButton />
      </LeftNavUpperWrapper>
      <LeftNavLowerWrapper role="figure">
        <PlayButton />
        <Terminal />
        <Info />
        <Git />
      </LeftNavLowerWrapper>
    </>
  );
};

const LeftNavUpperWrapper = styled.div({
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  height: '120px',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const LeftNavLowerWrapper = styled.div({
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  height: '120px',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export default LeftNav;
