"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {

  /* Animations */

  /* sizes */
  --sui-spacing-1: 0;
  --sui-spacing-2: 4;
  --sui-spacing-3: 8;
  --sui-spacing-4: 16;
  --sui-spacing-5: 32;
  --sui-spacing-6: 64;
  --sui-spacing-7: 128;
  --sui-spacing-8: 256;
  --sui-spacing-9: 512;
  --sui-sizes-mini: 11 / 14;
  --sui-sizes-tiny: 12 / 14;
  --sui-sizes-small: 13 / 14;
  --sui-sizes-medium: 14 / 14;
  --sui-sizes-large: 16 / 14;
  --sui-sizes-big: 18 / 14;
  --sui-sizes-huge: 20 / 14;
  --sui-sizes-massive: 24 / 14;

  /* Fonts */
  --sui-fonts-body: Roboto, Helvetiva Neue, Helvetica, Aria, sans-serif;
  --sui-fonts-heading: Poppins, Helvetiva Neue, Helvetica, Aria, sans-serif;
  --sui-fonts-monospace: Fira Code, Menlo, monospace;

  /* Fonts: Weight */
  --sui-fonts-weights-body: 400;
  --sui-fonts-weights-heading: 500;
  --sui-fonts-weights-bold: 700;

  /* Fonts: Line Height */
  --sui-fonts-line-body: 1.5;
  --sui-fonts-line-heading: 1.25;

  /* Breakpoints */
  --sui-breakpoints-mobile: 320px;
  --sui-breakpoints-tablet: 768px;
  --sui-breakpoints-computer: 992px;
  --sui-breakpoints-desktop: 1200px;
  --sui-breakpoints-widescreen: 1920px;

  /* Colors */
  --sui-colors-white: #FEFEFE;
  --sui-colors-black: #010101;
  --sui-colors-red: #DB2828;
  --sui-colors-orange: #F2711C;
  --sui-colors-yellow: #FBBD08;
  --sui-colors-olive: #B5CC18;
  --sui-colors-green: #21BA45;
  --sui-colors-teal: #00B5AD;
  --sui-colors-blue: #2185D0;
  --sui-colors-violet: #6435C9;
  --sui-colors-purple: #A333C8;
  --sui-colors-pink: #E03997;
  --sui-colors-brown: #A5673F;
  --sui-colors-grey: #767676;

  --sui-colors-primary: blue;
  --sui-colors-text: #111212;
  --sui-colors-background: #fff;
  --sui-colors-secondary: #6D59F0;
  --sui-colors-muted: #f6f6f9;
  --sui-colors-gray: #D3D7DA;
  --sui-colors-highlight: hsla(205, 100%, 40%, 0.125);
  --sui-colors-disabled: rgba(40, 40, 40, 0.3);
  --sui-colors-disabled-inverted: rgba(225, 225, 225, 0.3);

  /* Colors: States */
  --sui-colors-positive-color: green;
  --sui-colors-positive-bg: #FFF6F6;
  --sui-colors-positive-border: #A3C293;
  --sui-colors-positive-header: #1A531B;
  --sui-colors-positive-text: #2C662D;


  --sui-colors-negative-color: red;
  --sui-colors-negative-bg: #FFF6F6;
  --sui-colors-negative-border: #E0B4B4;
  --sui-colors-negative-header: #912D2B;
  --sui-colors-negative-text: #9F3A38;

  --sui-colors-info-color: #31CCEC;
  --sui-colors-info-bg: #F8FFFF;
  --sui-colors-info-border: #A9D5DE;
  --sui-colors-info-header: #0E566C;
  --sui-colors-info-text: #276F86;

  --sui-colors-warning-color: #F2C037;
  --sui-colors-warning-bg: #C9BA9B;
  --sui-colors-warning-border: #FFFAF3;
  --sui-colors-warning-header: #794B02;
  --sui-colors-warning-text: #573A08;

  
  --sui-colors-brands-facebook: #3B5998;
  --sui-colors-brands-twitter: #55ACEE;
  --sui-colors-brands-googleplus: #DD4B39;
  --sui-colors-brands-linkedin: #1F88BE;
  --sui-colors-brands-youtube: #FF0000;
  --sui-colors-brands-pinterest: #BD081C;
  --sui-colors-brands-instagram: #49769C;

  /* Borders */
  --sui-borders-radius: 0;
  --sui-borders-color: rgba(34, 36, 38, 0.15);
  --sui-borders-strong: rgba(34, 36, 38, 0.22);
  --sui-borders-internal: rgba(34, 36, 38, 0.1);
  --sui-borders-selected: rgba(34, 36, 38, 0.35);
  --sui-borders-selected-strong: rgba(34, 36, 38, 0.5);
  --sui-borders-disabled: rgba(34, 36, 38, 0.5);

  /* Shadows */
  --sui-shadows-subtle: 0px 1px 2px 0 var(--sui-borders-color);
  --sui-shadows-floating: 
  0px 2px 4px 0px rgba(34, 36, 38, 0.12),
  0px 2px 10px 0px rgba(34, 36, 38, 0.15);
  --sui-shadows-floating-hover: 
  0px 2px 4px 0px rgba(34, 36, 38, 0.15),
  0px 2px 10px 0px rgba(34, 36, 38, 0.25);
}`;
