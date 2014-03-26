$(document).ready(function() {
  countByState = {}

  $.get('http://benjerry.herokuapp.com/api/v1/stores/count_by_state', function(res) {
    countByState = res;
  });

  $('.state').mouseover(
    function() {
      var stateName = $(this).attr('id');
      var numStores = countByState[stateName];
      $('#state-name').text(stateName);
      $('#num-stores').text(numStores);
    }
  );
});
