import { create } from '@storybook/theming';

const baseColor = {
   
}

export default create({
  base: 'light',

  colorPrimary: '#14213D',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#E5E5E5',
  barSelectedColor: '#FCA311',
  barBg: '#14213D',

  // Form colors
  inputBg: 'white',
  inputBorder: '#E5E5E5',
  inputTextColor: 'black',
  inputBorderRadius: 4,

//   brandTitle: 'UI Labs',
  brandUrl: 'https://github.com/oluwatobiloba2000/UI-labs',
  brandImage: 'https://res.cloudinary.com/oluwatobby/image/upload/v1647083539/image-removebg-preview_pv0ap1.png',
});

