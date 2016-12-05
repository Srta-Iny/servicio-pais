
$(document).ready(function(){
//Iniciamos sección parallax
      $('.parallax').parallax();
});

//Iniciamos sección collapsible
	$('.collapsible').collapsible();

//Validación de formulario 
$(function() {
    // validar
    $("#contact").validate({
        // reglas para validación
        rules: {
        name: "required",
        email: {
        required: true,
        email: true
        	},
        message: "required",
        },
        // mensajes de error para mensajes
        messages: {
        name: "Por favor ingresa un nombre",
      	email: "Por favor ingresa un correo electrónico válido",
      	message: "Por favor ingresa un mensaje",
        },
        // enviar
        submitHandler: function(form) {
          //form.submit();
          $(".message").show();
          $(".message").fadeOut(4500);
        }
      });
  });

//carrusel
$('.carousel').carousel();

