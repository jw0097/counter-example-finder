import React from 'react';
import styled from '@emotion/styled';
import { MESSAGE } from '../../constants/message';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfoWrapper role="banner">
        <FooterText>{MESSAGE.appInfo}</FooterText>
      </FooterInfoWrapper>
      <FooterStatusWrapper role="status">
        <FooterText>{MESSAGE.status}</FooterText>
      </FooterStatusWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer((props) => ({
  backgroundColor: props.theme.palette.gray,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ...props.theme.grid.footer,
}));

const FooterInfoWrapper = styled.div({
  marginLeft: '20px',
});

const FooterStatusWrapper = styled.div({
  marginRight: '20px',
});

const FooterText = styled.div((props) => ({
  ...props.theme.typo.footer,
}));

export default Footer;
