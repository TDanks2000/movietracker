// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    base: {
      mainColor: string;
      SecondColor: string;

      bg: string;
      navBg: string;
      darkBg: string;
      offDarkBg: string;
    };
    videoPlayer: {
      iconSize: string;
      iconSizeMobile: string;
    };
    text: {
      primary: string;
      secondary: string;
      offWhite: string;

      warning: string;
      success: string;
      confused: string;
      danger: string;
      fonts: {
        primary: string;
        secondary: string;
      };
    };
  }
}
