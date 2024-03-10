import React from 'react';
import { render, screen } from '../../src/utils/test-utils';
import NavBar from '../../src/components/container/NavBar';
import LeftNav from '../../src/components/presenter/LeftNav';
import RightNav from '../../src/components/presenter/RightNav';

describe('NavBar Components Test.', () => {
  describe('NavBar on Left Test.', () => {
    test('NavBar must have two wrapper.', () => {
      render(
        <NavBar pos="left">
          <LeftNav />
        </NavBar>,
      );
      const leftNavWrapper = screen.getAllByRole('figure');
      expect(leftNavWrapper).toHaveLength(2);
    });

    test('NavBar must have various buttons.', () => {
      render(
        <NavBar pos="left">
          <LeftNav />
        </NavBar>,
      );
      const leftNavWIcons = screen.getAllByRole('img');
      expect(leftNavWIcons).toHaveLength(8);

      const documentSVG = screen.getByRole('img', { name: 'Document Icon' });
      expect(documentSVG).toBeInTheDocument();

      const flowSVG = screen.getByRole('img', { name: 'Flow Icon' });
      expect(flowSVG).toBeInTheDocument();

      const extensionSVG = screen.getByRole('img', { name: 'Extension Icon' });
      expect(extensionSVG).toBeInTheDocument();

      const moreButtonSVG = screen.getByRole('img', {
        name: 'MoreButton Icon',
      });
      expect(moreButtonSVG).toBeInTheDocument();

      const playButtonSVG = screen.getByRole('img', {
        name: 'PlayButton Icon',
      });
      expect(playButtonSVG).toBeInTheDocument();

      const terminalSVG = screen.getByRole('img', { name: 'Terminal Icon' });
      expect(terminalSVG).toBeInTheDocument();

      const infoSVG = screen.getByRole('img', { name: 'Info Icon' });
      expect(infoSVG).toBeInTheDocument();

      const gitSVG = screen.getByRole('img', { name: 'Git Icon' });
      expect(gitSVG).toBeInTheDocument();
    });
  });

  describe('NavBar on Right Test.', () => {
    test('NavBar must have one wrapper.', () => {
      render(
        <NavBar pos="right">
          <RightNav />
        </NavBar>,
      );
      const rightNavWrapper = screen.getAllByRole('figure');
      expect(rightNavWrapper).toHaveLength(1);
    });

    test('NavBar must have various buttons.', () => {
      render(
        <NavBar pos="right">
          <RightNav />
        </NavBar>,
      );
      const rightNavWIcons = screen.getAllByRole('img');
      expect(rightNavWIcons).toHaveLength(3);

      const alramButtonSVG = screen.getByRole('img', {
        name: 'AlramButton Icon',
      });
      expect(alramButtonSVG).toBeInTheDocument();

      const dataSVG = screen.getByRole('img', { name: 'Data Icon' });
      expect(dataSVG).toBeInTheDocument();

      const moreSVG = screen.getByRole('img', { name: 'More Icon' });
      expect(moreSVG).toBeInTheDocument();
    });
  });
});
