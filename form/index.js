$(function() {
    $('form').submit(function(e) {
      var $form = $(this);
      console.log("fffds",$(this).serialize());
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        headers:{"Access-Control-Allow-Origin": "*"},
        dataType: "jsonp",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({data:"test"}),
        success: function () {
          console.log('form was submitted');
        }
      })
      e.preventDefault(); 
    });
  });
  