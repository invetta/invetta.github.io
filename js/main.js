(function($) {
  $(document).ready(function() {
    var $offerSlider = $('#i-offer-slider');
    var $offertSliderDots = $('#i-offer-slider-dots');

    // Slick.js documentation: http://kenwheeler.github.io/slick
    $offerSlider.slick({
      dots: true,
      appendDots: $offertSliderDots,
      arrows: false,
      adaptiveHeight: true
    });

    window.goToSlide = function(n) {
      $offerSlider.slick('slickGoTo', n);
    }

    // $('#i-about-us-slider').slick();
  });
}(jQuery));
