import React from 'react';
import { render, screen } from '../../src/utils/test-utils';
import Terminal from '../../src/components/container/Terminal';
import { MESSAGE } from '../../src/constants/message';

describe('Terminal Component Test.', () => {
  test('Terminal must have Header.', () => {
    render(<Terminal />);
    const headerText = screen.getByRole('heading');
    expect(headerText).toHaveTextContent(MESSAGE.terminal);
  });

  test('terminal must have Terminal Contents.', () => {
    render(<Terminal />);
    const contentsText = screen.getByRole('document');
    expect(contentsText).toBeInTheDocument();
  });
});
