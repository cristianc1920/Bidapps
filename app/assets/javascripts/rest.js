
var contac = null;

function saveContact(){

	console.log("Entra");

	contac = {"nombre": "testNombre", "email": "test@domain.com", "mensaje": "Este es mi mensaje"};

	$.ajax({
	    url: 'http://localhost:3000/contactos/new.json',
	    type: 'POST',
	    contentType: 'application/json',
	    data: JSON.stringify(contac),
	    dataType: 'json',
	});


}
