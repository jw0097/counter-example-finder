import React from 'react';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Footer</FooterText>
      <FooterText>Footer</FooterText>
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

const FooterText = styled.div((props) => ({
  ...props.theme.typo.footer,
}));

export default Footer;
