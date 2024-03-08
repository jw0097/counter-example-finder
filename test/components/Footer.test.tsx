import React from 'react';
import Footer from '../../src/components/Footer';
import { render, screen } from '../../src/utils/test-utils';
import { MESSAGE } from '../../src/constants/message';

describe('Footer Components Test.', () => {
  test('Footer must have two wrapper.', () => {
    render(<Footer />);
    const appInfoWrapper = screen.getByRole('banner');
    expect(appInfoWrapper).toBeInTheDocument();

    const pageStatusWrapper = screen.getByRole('status');
    expect(pageStatusWrapper).toBeInTheDocument();
  });

  test('Footer must have Page Status Text.', () => {
    render(<Footer />);
    const appInfoText = screen.getByText(MESSAGE.appInfo);
    expect(appInfoText).toBeInTheDocument();
  });

  test('Footer must have Applicatoin Info Text.', () => {
    render(<Footer />);
    const statusText = screen.getByText(MESSAGE.status);
    expect(statusText).toBeInTheDocument();
  });
});
