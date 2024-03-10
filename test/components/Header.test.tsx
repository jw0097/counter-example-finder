import React from 'react';
import { render, screen } from '../../src/utils/test-utils';
import Header from '../../src/components/container/Header';
import { MESSAGE } from '../../src/constants/message';

describe('Header Components test.', () => {
  test('Header must have App Name as text.', () => {
    render(<Header />);
    const headerText = screen.getByRole('heading');
    expect(headerText).toHaveTextContent(MESSAGE.header);
  });

  test('Header must have two wrapper', () => {
    render(<Header />);
    const headerSVG = screen.getAllByRole('figure');
    expect(headerSVG).toHaveLength(2);
  });

  test('Header must have Mac style button and other buttons.', () => {
    render(<Header />);
    const macSVG = screen.getByRole('img', {
      name: 'Macbook Status Icon',
    });
    expect(macSVG).toBeInTheDocument();

    const searchSVG = screen.getByRole('img', { name: 'Search Icon' });
    expect(searchSVG).toBeInTheDocument();

    const userSVG = screen.getByRole('img', { name: 'User Icon' });
    expect(userSVG).toBeInTheDocument();

    const settingSVG = screen.getByRole('img', { name: 'Setting Icon' });
    expect(settingSVG).toBeInTheDocument();
  });
});
