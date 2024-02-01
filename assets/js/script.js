// declaración de las variables
 

var nota1HTML = document.getElementById("HTML1");
var nota2HTML = document.getElementById("HTML2");
var nota3HTML = document.getElementById("HTML3");
var HTMLpromedio = document.getElementById("HTMLpromedio");

var nota1h = Number(prompt("Ingrese nota 1 HTML: "));
var nota2h = Number(prompt("Ingrese nota 2 HTML: "));
var nota3h = Number(prompt("Ingrese nota 3 HTML: "));

var promedioh =(nota1h + nota2h + nota3h) / 3;

nota1HTML.innerHTML = nota1h;
nota2HTML.innerHTML = nota2h;
nota3HTML.innerHTML = nota3h;

HTMLpromedio.innerHTML = promedioh;






/*


var nota1CSS = document.getElementById("CSS1");
var nota2CSS = document.getElementById("CSS2");
var nota3CSS = document.getElementById("CSS3");

var nota1JS = document.getElementById("JS1");
var nota2JS = document.getElementById("JS2");
var nota3JS = document.getElementById("JS3");


var CSSpromedio = document.getElementById("CSSpromedio");
var JSpromedio = document.getElementById("JSpromedio");

// LEctura de datos



nota1CSS = Number(prompt("Ingrese nota 1 CSS: "));
nota2CSS = Number(prompt("Ingrese nota 2 CSS: "));
nota3CSS = Number(prompt("Ingrese nota 3 CSS: "));

nota1JS = Number(prompt("Ingrese nota 1 JS: "));
nota2JS = Number(prompt("Ingrese nota 2 JS: "));
nota3JS = Number(prompt("Ingrese nota 3 JS: "));

// Cálculo de los promedios


CSSpromedio =(nota1CSS + nota2CSS + nota3CSS) / 3;
JSpromedio =(nota1JS + nota2JS + nota3JS) / 3;

console.log ("promedio HTML: ", HTMLpromedio);
console.log ("promedio CSS: ", CSSpromedio);
console.log ("promedio JS: ", JSpromedio);

// Mostrar resultados en HTML

HTML1.innerHTML = nota1HTML;
HTML2.innerHTML = nota2HTML;
HTML3.innerHTML = nota3HTML;

CSS1.innerHTML = nota1CSS;
CSS2.innerHTML = nota2CSS;
CSS3.innerHTML = nota3CSS;

JS1.innerHTML = nota1JS;
JS2.innerHTML = nota2JS;
JS3.innerHTML = nota3JS;

HTMLx.innerHTML = HTMLpromedio;
CSSx.innerHTML = CSSpromedio;
JSx.innerHTML = JSpromedio;
*/