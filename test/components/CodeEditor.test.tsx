import React from 'react';
import { render, screen } from '../../src/utils/test-utils';
import CodeEditor from '../../src/components/container/CodeEditor';
import { MESSAGE } from '../../src/constants/message';

describe('CodeEditor Component Test.', () => {
  describe('CodeEditor on Left Tests.', () => {
    test('CodeEditor on Left must have Header.', () => {
      render(<CodeEditor pos="left" />);
      const headerText = screen.getByRole('heading');
      expect(headerText).toHaveTextContent(MESSAGE.yourCodeEditor);
    });

    test('CodeEditor on Left must have CodeEditor Contents.', () => {
      render(<CodeEditor />);
      const contentsText = screen.getByRole('textbox');
      expect(contentsText).toBeInTheDocument();
    });
  });

  describe('CodeEditor on Right Tests.', () => {
    test('CodeEditor on Right must have Header.', () => {
      render(<CodeEditor pos="right" />);
      const headerText = screen.getByRole('heading');
      expect(headerText).toHaveTextContent(MESSAGE.answerEditor);
    });

    test('CodeEditor on Right must have CodeEditor Contents.', () => {
      render(<CodeEditor />);
      const contentsText = screen.getByRole('textbox');
      expect(contentsText).toBeInTheDocument();
    });
  });
});
