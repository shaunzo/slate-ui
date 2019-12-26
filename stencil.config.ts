import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'slate-ui',
  globalStyle: 'src/globals/styles/slate-ui.scss',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/globals/styles/_variables.scss',
        'src/globals/styles/_mixins.scss',
        'src/globals/styles/slate-ui.scss'
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};

/**
 * Following plugins have been added:
 * To allow for use of scss/sass: https://www.npmjs.com/package/@stencil/sass
 */
