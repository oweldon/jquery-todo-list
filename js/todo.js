$('#addItem').click(function() {
    var listItem = $('#listItem').val();
    //still working on making my button function properly
    $('#list').append($('<li class="items" id=' + listItem + '>' + listItem +  '<button id="remove">Indeed</button>' + '</li>'))
    $('#listItem').val('')
    $('#list').on("click", "li", function(){
    $(this).wrap("<strike>");
  });
})
