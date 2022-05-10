/* SUMAR NUMEROS DE UN ARRAY
let elementos= parseInt(prompt('Ingrese la cantidad de elementos que va a tener el array: '));
let arreglo=[];
let suma=0;
for (let i = 0; i < elementos; i++)
{
    arreglo[i]= parseInt(prompt('Ingrese un numero al array: '));
}

let contenido="";

for (let i = 0;i < arreglo.length; i++)          
{
    suma += arreglo[i];
}

promedio=suma/ arreglo.length;
contenido += 'Resultado de la suma=' + suma + '<br>' + 'Valor del promedio=' + promedio;

document.getElementById('contenedor').innerText=contenido;
*/

/* MAXIMO Y MINIMO DE UN ARRAY
let elementos= parseInt(prompt('Ingrese la cantidad de elementos que va a tener el array: '));
let arreglo=[];

for (let i = 0; i < elementos; i++)
{
    arreglo[i]= parseInt(prompt('Ingrese un numero al array: '));
}

let minimo= arreglo[0];
let maximo= arreglo[0];
let contenido="";

for (let i = 0;i < arreglo.length; i++)          
{
    if (arreglo[i]<minimo) 
    {   
        minimo=arreglo[i];
    }
    if (arreglo[i]>maximo)
    {
        maximo=arreglo[i];    
    }
}

contenido = 'Valor maximo= ' + maximo + '<br>' + 'Valor minimo= '+ minimo;
document.getElementById('contenedor').innerHTML =contenido;
*/

let elementos= parseInt(prompt('Ingrese la cantidad de elementos que va a tener el array: '));
let arreglo=[];

for (let i = 0; i < elementos; i++)
{
    arreglo[i]= parseInt(prompt('Ingrese un numero al array: '));
}

let contenido="";
let pares=[];
let cantidad_pares=0;

for (let i = 0;i < arreglo.length; i++)          
{
    if(arreglo[i]%2==0)
    {
        pares.push(arreglo[i]);
        cantidad_pares++;
    }
}

contenido += 'Cantidad de elementos pares=' + cantidad_pares + '<br>' + 'Elementos pares= ' + '<br>';

//document.getElementById('contenedor').innerText=contenido;

//contenido=" ";
for (let i = 0; i < pares.length; i++) 
{
    contenido += pares[i]+ '<br>';
    
}

document.getElementById('contenedor').innerHTML =contenido;