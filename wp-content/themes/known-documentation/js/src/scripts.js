(function($) {

  $('#hamburger-btn').on('click', function(e){
    e.preventDefault();

    $('#main-nav').toggleClass('active');
  });

})(jQuery);
