(function($) {
  $(document).ready(function() {
    var $offerSlider = $('#i-offer-slider');
    var $offerSliderList = $('#i-offer-slider-list');
    var $offerSliderListItems = $offerSliderList.find('li');
    var $offerSliderSpans = $offerSliderListItems.find('span');
    var $offerSliderDots = $('#i-offer-slider-dots');

    // Slick.js documentation: http://kenwheeler.github.io/slick
    $offerSlider.slick({
      dots: true,
      appendDots: $offerSliderDots,
      arrows: false,
      adaptiveHeight: true
    });

    $offerSliderList.on('click', 'span', function(event) {
      var $span = $(event.target);
      var $li = $span.parent();
      var index = $offerSliderListItems.index($li);
      $offerSlider.slick('slickGoTo', index);
      $offerSliderSpans.removeClass('active');
      $span.addClass('active');
    });

    $offerSliderDots.on('click', 'button', function(event) {
      var $li = $(event.target).parent();
      var index = $offerSliderDots.find('li').index($li);
      var $span = $offerSliderSpans.eq(index);
      $offerSliderSpans.removeClass('active');
      $span.addClass('active');
    });

    // $('#i-about-us-slider').slick();
  });
}(jQuery));
