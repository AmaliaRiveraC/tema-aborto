//funcionalidad  seccion1
var femenino = document.getElementById('femenino');
var masculino = document. getElementById('masculino');
var fecundacion = document.getElementById('fecundacion');
var imagen1 = document.getElementById('imagen1');
var imagen2 = document.getElementById('imagen2');
var imagen3 = document.getElementById('imagen3');


imagen1.addEventListener('click',function () {
  if(femenino.style.display == "block") {
    femenino.style.display="none";
  } else {
    femenino.style.display = "block";
  }
});

imagen2.addEventListener('click',function () {
  if(masculino.style.display == "block") {
    masculino.style.display="none";
    } else {
      masculino.style.display = "block";
    }
  femenino.style.display="none";
  fecundacion.style.display="none"
});

imagen3.addEventListener('click',function () {
  if(fecundacion.style.display == "block") {
    fecundacion.style.display="none";
    } else {
      fecundacion.style.display = "block";
    }
  masculino.style.display="none";
  femenino.style.display="none";
});

//funcionalidad seccion2


/* Seccion comentarios*/
var ingresarComentario = document.getElementById("ingresarComentario");
var comentarioEnTiempoReal = document.getElementById("comentarioEnTiempoReal");

function duplicar() {

comentarioEnTiempoReal.innerHTML = ingresarComentario.value;

}

function publicarComentario() {
	//Se comienza guardando el valor que el usurio ingrese en comentarioEnTiempoReal, clonando todos sus atributos, para así poderlo publicar d emanera identica.

	var comentarioPublicado = comentarioEnTiempoReal.cloneNode(true);

	var nuevosComentarios = document.getElementById("comentariosPublicados");

	nuevosComentarios.insertBefore(comentarioPublicado, nuevosComentarios.firstChild);

	var lineaSeparadora = document.createElement("hr");

	nuevosComentarios.insertBefore(lineaSeparadora, nuevosComentarios.firstChild);
	comentarioEnTiempoReal.removeAttribute("style");
	}

function letraChica(){
	comentarioEnTiempoReal.style.fontSize = "20px";

}

function letraMediana() {
	comentarioEnTiempoReal.style.fontSize = "40px";
}

function letraGrande(){
	comentarioEnTiempoReal.style.fontSize = "80px";
}

function colorDeTexto(){
	var eleccionUsuario = prompt("Ingresa el código hexadecimal del color de texto que desees:  ");
	eleccionUsuario = "#" + eleccionUsuario;
	comentarioEnTiempoReal.style.color = eleccionUsuario;
	
}

function alinearIzquierda() {
	comentarioEnTiempoReal.style.textAlign = "left";
}

function centrar() {
	comentarioEnTiempoReal.style.textAlign = "center";
}

function alinearDerecha() {
	comentarioEnTiempoReal.style.textAlign = "right";
}


function colorDeFondo(){
	var eleccionUsuario = prompt("Ingresa el código hexadecimal del color de fondo que desees:  ");
	eleccionUsuario = "#" + eleccionUsuario;
	comentarioEnTiempoReal.style.backgroundColor = eleccionUsuario;
	
}

 