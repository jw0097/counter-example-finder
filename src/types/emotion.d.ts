import '@emotion/react';

type palette = 'black' | 'gray' | 'blue' | 'white';
type typo = 'header' | 'footer';
type Component =
  | 'header'
  | 'footer'
  | 'navRight'
  | 'navLeft'
  | 'codeOne'
  | 'codeTwo'
  | 'fileExplorer'
  | 'terminal';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      [key in palette]: string;
    };
    typo: {
      [key in typo]: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
        color: string;
      };
    };
    grid: {
      [key in Component]: {
        gridRow: string;
        gridColumn: string;
      };
    };
  }
}
