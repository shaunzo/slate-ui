import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'slate-ui',
  globalStyle: 'src/globals/styles/slate-ui.css',
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
