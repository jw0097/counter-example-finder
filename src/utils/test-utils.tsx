import React, { ReactNode } from 'react';
import { RenderOptions, render } from '@testing-library/react';
import EmotionThemeProvider from './Provider/EmotionThemeProvider';

const customRender = (
  ui: ReactNode,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  return render(ui, { wrapper: EmotionThemeProvider, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
