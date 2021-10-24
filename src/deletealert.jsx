function Deletealert(title = 'Aschente') {
  return {
    title: `${title}`,
    icon: 'warning',
    html: '<b>Do you really want to delete?</b>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText: '<i class="fa fa-thumbs-down"></i> No!',
    cancelButtonAriaLabel: 'Thumbs down',
  };
}

export default Deletealert;
