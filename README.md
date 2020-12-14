# \<i-l23-bbc-proyecto-base-v2>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i i-l23-bbc-proyecto-base-v2
```

## Usage
```html
<script type="module">
  import 'i-l23-bbc-proyecto-base-v2/i-l23-bbc-proyecto-base-v2.js';
</script>

<i-l23-bbc-proyecto-base-v2></i-l23-bbc-proyecto-base-v2>
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`



## Instalar storybook
npx sb init

## Addons
Podemos añañdir los addons que necesitemos para nuestro storybook
https://storybook.js.org/addons

## Instalar addon-essentials
@storybook/addon-essentials

## Customizar el css de Storybook
En la carpeta .storybook creamos el archivo manager.js y yourTheme.js (nombre que queramos)
En el archivo manager.js añadimos:
import { addons } from '@storybook/addons';
import yourTheme from './yourTheme';

addons.setConfig({
    theme: yourTheme,
});

Y en el archivo yourTheme.js añadimos:
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

Creamos nuestro archivo css con los estilos que necesitemos para nuestro tema

## Arrancar Storybook
npm run storybook