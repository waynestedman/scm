$(document).ready(function(){
  // var videoModal = $('#video').modal();
  //
  // $('#openVideo').on('click', function(e) {
  //     e.preventDefault();
  //     videoModal.modal('openModal');
  // });
  $('#openVideo').on('click', function() {
    var modalVideo = document.getElementById('video');

    modalVideo.style.display = "block";

    // $( "#video" ).dialog({
    //   modal: true,
    //   buttons: {
    //     Ok: function() {
    //       $( this ).dialog( "close" );
    //     }
    //   }
    // });
  } // onClick
}); // doc ready
