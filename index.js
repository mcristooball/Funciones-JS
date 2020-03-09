//Declarativas
// No es una funcion anonima por que aqui estoy indicando que mi funcion tiene un nombre en este ejemplo <miFuncion>

function miFuncion(){ /*Nombre de la funcion <mifuncion>*/
    return 3;
}
miFuncion();//la mando llamar con el nombre de la funcion


//Expresion
//declaramos una variable que a su vez sera una funcion
//a las funciones de expresion tambien se le conocen como expresiones anonimas por que estoy declarando una variable que tiene como valor una funcion y esta funcion a su vez no tiene ningun nombre.
var miFuncion_e = function(a, b){ /*En este caso a y b son los parametros con los que va a trabajar nuestra funcion */
    return a +  b;
}

//mandamos llamar una funcion expresiva con el nombre de la variable en este ejemplo la llamamos <miFuncion_e>
miFuncion();//la mando llamar con el nombre de la variable como si fuera una funcion


//  ***Template string o plantilla de cadena de texto*** Colocar variables en un string 


// function saludarEstudiantes (estudiante){ /*Parametro estudiante es como una variable sin valor, hasta que llamamos la funcion*/
//     console.log(estudiante);

// }

// saludarEstudiantes("Mike"); /*lo que nos imprimiria la consola en este ejemplo seria "Mike*/


function saludarEstudiantes(estudiante){
    console.log(`hola ${estudiante}`);
}

saludarEstudiantes("Mike");