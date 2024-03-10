import styled from '@emotion/styled';
import React from 'react';
import Data from '../../assets/svg/Data';
import More from '../../assets/svg/More';
import AlramButton from '../../assets/svg/AlramButton';

const RightNav = () => {
  return (
    <RightNavUpperWrapper role="figure">
      <AlramButton />
      <Data />
      <More />
    </RightNavUpperWrapper>
  );
};

const RightNavUpperWrapper = styled.div({
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  height: '90px',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export default RightNav;
