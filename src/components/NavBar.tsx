import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLElement> & CustomProps;

type CustomProps = {
  pos?: string;
};

const NavBar = ({ pos, children, ...props }: Props) => {
  return (
    <NavBarContainer pos={pos} {...props}>
      {children}
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav<{ pos?: string }>((props) => ({
  backgroundColor: props.theme.palette.gray,
  ...(props.pos === 'left'
    ? props.theme.grid.navLeft
    : props.theme.grid.navRight),
}));

export default NavBar;
