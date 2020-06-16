import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_pod extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-pod',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-pod is activated!');
  }
};

export default extension;
