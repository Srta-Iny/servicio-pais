function validateForm(){
	//funcion global
	var letrasnormales = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
	//Campo nombre
	function nombre(){
		var nombre = $("#first_name").val();
		if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
			$("#first_name").parent().append("<span>Debe ingresar su nombre</span>");
			alert('adadsd');

			return false;

		} else if(!letrasnormales.test(nombre)){
			$("#first_name").parent().append("<span>Debe ingresar sólo letras</span>");
			return  true;

		} else if (nombre.charAt(0) != nombre.charAt(0).toUpperCase()) {
			$("#first_name").parent().append("<span>Debe comenzar su nombre con mayúscula</span>");
		}
	}
	nombre();

		function apellido(){
		var apellido = $("#flast_name").val();
		if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
			$("#flast_name").parent().append("<span>Debe ingresar su apellido</span>");

			return false;

		} else if(!letrasnormales.test(apellido)){
			$("#flast_name").parent().append("<span>Debe ingresar sólo letras</span>");
			return  true;

		} else if (apellido.charAt(0) != apellido.charAt(0).toUpperCase()) {
			$("#flast_name").parent().append("<span>Debe comenzar su apellido con mayúscula</span>");
		}
	}
	apellido();