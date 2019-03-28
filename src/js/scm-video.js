$(document).ready(function(){
  var videoModal = $('#video').modal();

  $('#openVideo').on('click', function(e) {
      e.preventDefault();
      videoModal.modal('openModal');
  });
}); // doc ready
