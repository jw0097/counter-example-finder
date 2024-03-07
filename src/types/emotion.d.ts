import '@emotion/react';

type palette = 'black' | 'gray' | 'blue' | 'white';
type typo = 'header';

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
  }
}
