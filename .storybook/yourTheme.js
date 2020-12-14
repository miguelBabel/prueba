// YourTheme.js

import { create } from '@storybook/theming/create';

import "../src/assets/styles.css";

import logo from '../src/assets/images/logo-babel.png';

export default create({
    base: 'light',

    colorPrimary: '#3E3E56',    
    colorSecondary: '#fecb52',//color de los enlaces de navegación

    // UI
    appBg: '#f2f2f2',//Background de la app
    appContentBg: '#ffffff',//Background parte derecha
    appBorderColor: 'rgba(83, 83, 99, 0.25)',
    appBorderRadius: 4,
    
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#3E3E56',//Color texto parte derecha
    textInverseColor: 'black',

    // Toolbar default and active colors
    barTextColor: '#3E3E56',//Color enlaces parte derecha
    barSelectedColor: 'black',//Color enlaces seleccionado parte derecha
    barBg: '#fecb52',//Background seccines parte derecha
    
    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    brandTitle: 'Babel Creativa',
    brandUrl: 'https://babel.es/',
    brandImage: logo,

});