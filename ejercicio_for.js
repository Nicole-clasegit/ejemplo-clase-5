let numero;
let respuesta;
let tabla=" ";

do {

    numero=prompt('Ingrese un numero para ver su tabla de multiplicar');

    for (let i = 1; i<=10 ; i++)
    {
        let resultado = numero * i;
        tabla += resultado + '<br>';
    }

    document.getElementById('contenedor').innerHTML= tabla;

    respuesta=prompt('Desesa seguir imgresando numeros? (N para Salir // cualquier letra para continuar)').toUpperCase();
} while (respuesta!='N');