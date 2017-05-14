//funcionalidad  seccion1
var femenino = document.getElementById('femenino');
var masculino = document. getElementById('masculino');
var fecundacion = document.getElementById('fecundacion');
var imagen1 = document.getElementById('imagen1');
var imagen2 = document.getElementById('imagen2');
var imagen3 = document.getElementById('imagen3');


imagen1.addEventListener('click',function () {
femenino.style.display="block";
});
imagen2.addEventListener('click',function () {
masculino.style.display="block";
femenino.style.display="none";
fecundacion.style.display="none"
});
imagen3.addEventListener('click',function () {
fecundacion.style.display="block";
masculino.style.display="none";
femenino.style.display="none";
});

//funcionalidad seccion2
