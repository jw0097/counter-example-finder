import React from 'react';
import { css } from '@emotion/react';

const Footer = () => {
  return (
    <div
      css={css({
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'red',
        height: '30px',
        width: '100%',
      })}
    >
      Footer
    </div>
  );
};

export default Footer;
