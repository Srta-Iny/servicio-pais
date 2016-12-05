$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

// crear usuario
$(document).ready(function datosPerfil(){

  $('#addPerfil').click(function(){
    var nombre = $('#name').val();
    var apellido = $('#last').val();
    var correo = $('#email').val();
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    //obteniendo nombre
    if( nombre == null || nombre.length == 0){
      var $toastContent = $('<span> Campo obligatorio, ingresa nombre </span>');
      Materialize.toast($toastContent, 2000);
      return false;
    }else if (nombre.match(/[^a-zA-Z]+/g)){
      var $toastContent = $('<span>Ingresa solo letras en el nombre</span>');
      Materialize.toast($toastContent, 2000);
      return false;
    }else if( apellido == null || apellido.length == 0){
      console.log(apellido);
      var $toastContent = $('<span> Campo obligatorio, ingresa apellido </span>');
      Materialize.toast($toastContent, 2000);
      return false;
    }else if (apellido.match(/[^a-zA-Z]+/g)){
      var $toastContent = $('<span>Ingresa solo letras en el apellido</span>');
      Materialize.toast($toastContent, 2000);
      return false;
    }else if(  correo == null ||  correo.length == 0 || /^\s+$/.test(correo)){
      var $toastContent = $('<span> Campo obligatorio, por favor ingresa tu correo </span>');
      Materialize.toast($toastContent, 2000);
      return false;
    }else if( !expr.test(correo)){
      var $toastContent = $('<span> Ingresa correo con formato valido </span>');
      Materialize.toast($toastContent, 2000);
      return false;
    }
    guardarStorageUsuario(nombre, apellido, correo);
    return true;
  });
});

function guardarStorageUsuario(a, b, c, d, e){
    var nombre = a;
    var apellido = b;
    var correo = c;
 
  localStorage.setItem('nombreUser', nombre);
  localStorage.setItem('apellidoUser',apellido);
  localStorage.setItem('emailUser', correo);
}

//INGRIIIIIIID ESCUCHAAA.. NO TOQUIS ESTOOOOOO AJJAJA

  $('.carousel.carousel-slider').carousel({full_width: true});

   $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
        

 


// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');


