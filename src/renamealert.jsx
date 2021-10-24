import Nyan from './assets/nyan-cat.gif';

function Renamealert(title = 'Aschente') {
  return {
    title: `Rename your ${title}`,
    width: 600,
    padding: '3em',
    backdrop: `
        rgba(0,0,123,0.4)
        url(${Nyan})
        left top
        no-repeat
        `,
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off',
    },
    showCancelButton: true,
    confirmButtonText: 'Save',
    showLoaderOnConfirm: true,
  };
}

export default Renamealert;
