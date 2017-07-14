$(document).ready(function(){
//validate form_________________________________________________________
    $("#loginform").validate({

       rules:{

            form_name:{
                minlength: 4,
                maxlength: 16,
            },
            form_phone: {
              digits: true,
            },

            form_password_1:{
                minlength: 4,
                maxlength: 16,
            },
            form_password_2: {
              equalTo: "#form_password_1"
            },
       },

    });


    // Message______________________________________________________
      $('#loginform').on('submit', function() {

        var data = $(this).serialize();

        // сервіс фейкових апі www.mocky.io Просто для прикладу
        var url = "http://www.mocky.io/v2/5967bc0f1100008818b6c2d6";

        // використовуємо jquery
        var jqxhr = $.post(url)
          .done(function() {
            // коли успішно відправили дані додаємо текст Success в span#message
            $('#message').html("Success!");
          })
          .fail(function() {
            // коли помилка додаємо текст Error в span#message
            $('#message').html("Cannot Find Server");
          })

        return false; //щоб після відправки форми не було редіректу
     });

});
