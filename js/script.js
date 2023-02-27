$(document).ready(function () {
  new fullpage('#fullpage', {
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: true,
    navigationTooltips: ['Wine', 'Whisky', 'Beer', '막걸리', 'Sake', 'Footer'],
    scrollBar: true,
    afterLoad: function () {

      if ($('body').hasClass('fp-viewing-2')) {
        $('#fp-nav').addClass('on');
      } else {
        $('#fp-nav').removeClass('on');
      }
    }
  });
});

$(document).ready(function() {
  AOS.init({
    duration: 2500,
    once: true,
    once: false
  });
})