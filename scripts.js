// Guardar el contenedor principal
var c = $('#slider');
// Guardar las secciones del slider
var s = c.find('section');
// Guardar el número de secciones
var n = s.length;
// Crear un contenedor interno
c.wrapInner('<div class="slider-inner" />');
var ci = $('.slider-inner');
// Definir el ancho del contenedor interno
ci.css('width',100*n+'%');
s.css('width',100/n+'%');
// Crear botones para avanzar y retroceder
c.after('<button id="next">Next</button>');
c.after('<button id="prev">Prev</button>');
// Guardar los botones en variables
var next = $('#next');
var prev = $('#prev');
// Envolver los botones
next.add(prev).wrapAll('<div id="slider-nav" />');
/*
	Crear la función para navegar entre los slides
*/ 
// Indice para movernos entre los slides
var i = 0;
// Escribir la función para moverse
function mover(){
	if(i===0){
		ci.css('left',0);
	} else if(i>0){
		ci.css('left','-'+100*i+'%');
	}
}

next.on('click',function(){
	if(i<n-1){
		i++;
		mover();
	}
});
prev.on('click',function(){
	if(i>0){
		i--;
		mover();
	}
});

// Eventos de teclado
// Flecha derecha: 39
// Flecha izquierda: 37
$(document).on('keydown',function(e){
	switch(e.which){
		case 39:
			next.trigger('click');
			break;
		case 37:
			prev.trigger('click');
			break;
	}
});