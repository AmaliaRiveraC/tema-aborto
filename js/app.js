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
var abortarImg = document.getElementById('abortarImg');
var abortarPreg = document.getElementById('abortarPreg');
abortarImg.addEventListener('click',function () {
  if(abortarPreg.style.display == "block"){
    abortarPreg.style.display = "none";
  }else{
    abortarPreg.style.display = "block";
  };
});

var pregunta1 = document.getElementById('pregunta1');
var pregunta2 = document.getElementById('pregunta2');
var pregunta3 = document.getElementById('pregunta3');
var pregunta4 = document.getElementById('pregunta4');
var pregunta5 = document.getElementById('pregunta5');
var pregunta6 = document.getElementById('pregunta6');
var pregunta7 = document.getElementById('pregunta7');
var pregunta8 = document.getElementById('pregunta8');
var pregunta9 = document.getElementById('pregunta9');
var respuesta1 = document.getElementById('respuesta1');
var respuesta2 = document.getElementById('respuesta2');
var respuesta3 = document.getElementById('respuesta3');
var respuesta4 = document.getElementById('respuesta4');
var respuesta5 = document.getElementById('respuesta5');
var respuesta6 = document.getElementById('respuesta6');
var respuesta7 = document.getElementById('respuesta7');
var respuesta8 = document.getElementById('respuesta8');
var respuesta9 = document.getElementById('respuesta9');
pregunta1.addEventListener('click',function() {
if(respuesta1.style.display =='none'){
  respuesta1.style.display = 'block';
}else{
  respuesta1.style.display = 'none';
}
});

pregunta2.addEventListener('click',function() {
if(respuesta2.style.display =='none'){
  respuesta2.style.display = 'block';
}else{
  respuesta2.style.display = 'none';
}
});

pregunta3.addEventListener('click',function() {
if(respuesta3.style.display =='none'){
  respuesta3.style.display = 'block';
}else{
  respuesta3.style.display = 'none';
}
});

pregunta4.addEventListener('click',function() {
if(respuesta4.style.display =='none'){
  respuesta4.style.display = 'block';
}else{
  respuesta4.style.display = 'none';
}
});

pregunta5.addEventListener('click',function() {
if(respuesta5.style.display =='none'){
  respuesta5.style.display = 'block';
}else{
  respuesta5.style.display = 'none';
}
});

pregunta6.addEventListener('click',function() {
if(respuesta6.style.display =='none'){
  respuesta6.style.display = 'block';
}else{
  respuesta6.style.display = 'none';
}
});

pregunta7.addEventListener('click',function() {
if(respuesta7.style.display =='none'){
  respuesta7.style.display = 'block';
}else{
  respuesta7.style.display = 'none';
}
});

pregunta8.addEventListener('click',function() {
if(respuesta8.style.display =='none'){
  respuesta8.style.display = 'block';
}else{
  respuesta8.style.display = 'none';
}
});
pregunta9.addEventListener('click',function() {
if(respuesta9.style.display =='none'){
  respuesta9.style.display = 'block';
}else{
  respuesta9.style.display = 'none';
}
});
