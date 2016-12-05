$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $(".button-collapse").sideNav();
    // editar perfil 
    var nombreUser = localStorage.getItem('nombreUser');
    var apellidoUser = localStorage.getItem('apellidoUser');
    var correoUser = localStorage.getItem('emailUser');
//contendores 
    var  nameContainer = $('#nombre');
    var emailContainer = $('#correo');
// asignado valores 
    nameContainer.append(nombreUser+" "+apellidoUser);
    emailContainer.append(correoUser);
});
// subir foto de perfil 
$(document).ready(function(){
    $('#subir').click(function(){
        var fotoSeleccionada = $('#input-perfil').get(0).files[0];
        var reader  = new FileReader();
        var guardado;
        reader.onloadend = function () {
            imgData = reader.result;
            guardado = localStorage.setItem('fotoPerfil', imgData)

        }
        reader.readAsDataURL(fotoSeleccionada);
        location.reload();
    });
    if(window.localStorage.fotoPerfil.length > 0){
    var img = localStorage.getItem('fotoPerfil');
    $('#fotoP').attr('src', img);
	}
});
// subir foto muro 
$(document).ready(function(){
    $('#subir-foto').click(function(){
        var fotoSeleccionada = $('#input-foto').get(0).files[0];
        var reader  = new FileReader();
        var guardado;
        reader.onloadend = function () {
            imgData = reader.result;
            guardado = localStorage.setItem('fotoNew', imgData)

        }
        reader.readAsDataURL(fotoSeleccionada);
        location.reload();
    });
    if(window.localStorage.fotoData.length > 0){
    var img = localStorage.getItem('fotoNew');
    $('#imagen-nueva').attr('src', img);
	}
});

