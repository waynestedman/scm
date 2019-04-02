$(document).ready(function(){
  // var videoModal = $('#video').modal();
  //
  // $('#openVideo').on('click', function(e) {
  //     e.preventDefault();
  //     videoModal.modal('openModal');
  // });
  $('#openVideo').on('click', function() {
    $( "#video" ).dialog({
      modal: true,
      buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  }
}); // doc ready
