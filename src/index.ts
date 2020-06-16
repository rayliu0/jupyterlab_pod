/* eslint-disable */
import {
 JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette, 
} from '@jupyterlab/apputils';

// import {
//   Message
// } from '@lumino/messaging';

// import {
//   Widget
// } from '@lumino/widgets';

/**
 * Initialization data for the jupyterlab_apod extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_apod',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension jupyterlab_pod is activated!');
    console.log('ICommandPalette:', palette);
  }
};

export default extension;