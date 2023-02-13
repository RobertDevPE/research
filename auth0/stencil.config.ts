import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'auth0',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  bundles: [
    {
      components:
        [
          'pki-login'
        ]
    },
  ],
};
