import React from 'react';
import styled from '@emotion/styled';
import MacbookStatus from '../assets/svg/MacbookStatus';
import User from '../assets/svg/User';
import Search from '../assets/svg/Search';
import Setting from '../assets/svg/Setting';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderStatusWrapper>
        <MacbookStatus />
      </HeaderStatusWrapper>
      <HeaderText>Find Counter Example</HeaderText>
      <HeaderButtonsWrapper>
        <User />
        <Search />
        <Setting />
      </HeaderButtonsWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header((props) => ({
  backgroundColor: props.theme.palette.gray,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ...props.theme.grid.header,
}));

const HeaderStatusWrapper = styled.div({
  marginLeft: '10px',
});

const HeaderText = styled.h1((props) => ({
  ...props.theme.typo.header,
}));

const HeaderButtonsWrapper = styled.div({
  display: 'flex',
  width: '100px',
  justifyContent: 'space-between',
  marginRight: '10px',
});

export default Header;
