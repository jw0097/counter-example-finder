import React from 'react';
import { render, screen } from '../../src/utils/test-utils';
import FileExplorer from '../../src/components/container/FileExplorer';
import { MESSAGE } from '../../src/constants/message';

describe('FileExplorer Component Test.', () => {
  test('FileExplorer must have Header.', () => {
    render(<FileExplorer />);
    const headerText = screen.getByRole('heading');
    expect(headerText).toHaveTextContent(MESSAGE.fileExplorer);
  });

  test('FileExplorer must have FileExplorer Contents.', () => {
    render(<FileExplorer />);
    const contentsText = screen.getByRole('document');
    expect(contentsText).toBeInTheDocument();
  });
});
