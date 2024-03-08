import React, { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../styles/theme';

type Props = {
  children?: ReactNode;
};

const EmotionThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default EmotionThemeProvider;
