$(function() {
  var groceryList = [];
  $('#addItem').click(function() {
    groceryList.push($('input#item').val());
    $('input').val("");
  });

$('form').submit(function(event){
  $('.finalList').text("");
  var sortedList = groceryList.sort();
  sortedList.forEach(function(item) {
    $('.finalList').append('<li>' + item.toUpperCase() + '</li>');
  });
  console.log(sortedList);
  event.preventDefault();
});


});
