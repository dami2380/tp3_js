

function calculadora(){
	var primernumero= prompt('Ingrese el Primer Numero');
	var operacion= prompt('Ingrese la Operacion (+,-,*,/)');
	var segundonumero= prompt('Ingrese el Segundo Numero');

		function suma(){
			var resultado=parseFloat(primernumero)+parseFloat(segundonumero);
		console.log(resultado);
		}
		function resta(){
			var resultado=parseFloat(primernumero)-parseFloat(segundonumero);
		console.log(resultado);
		}
		function mult(){
			var resultado=parseFloat(primernumero)*parseFloat(segundonumero);
		console.log(resultado);
		}

		function div(){
			var resultado=parseFloat(primernumero)/parseFloat(segundonumero);
		console.log(resultado);
		}
		
		if (operacion==='+'){
		suma();
		}
  		else
			if (operacion==='-'){
			resta();
   			 }
      	else
			if (operacion==='*'){
			mult();
			 }
   		else
			div();

			}
function calculadora2(){
	calculadora();
	var confirmacion=prompt('volvel_a_calcular? (si/no)');
		if(confirmacion==='si'){
		calculadora2();
		}

		else
			alert('gracias');
			}

function global1(){
	var comienzo=prompt('Usar la calculadora (si/no)')
		if(comienzo==='si'){
			calculadora2();}

	else
		alert('gracias');
	
		}

global1();





