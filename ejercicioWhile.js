// rehacer el ej del ingreso de la nota (hacer que hasta que no se ingrese un valor valido, la app me siga pidiendo el ignreso de la nota )

let nota= parseInt(prompt('Ingrese la nota del examen: '));
var intentos=1;
while(nota<0 || nota>10)
{
    alert('ERROR!!!! nota invalida.....');
    nota= parseInt(prompt('Ingrese la nota del examen: '));
    intentos++;
    if (intentos==3) 
    {
        break;
    } 
}
if(nota>=0 && nota<=10)
{
    if (nota<4) 
    {
        document.getElementById('titulo').innerText= 'DESAPROBADO';
    } 
    else 
        if(nota>=4 && nota<7) 
        {
            document.getElementById('titulo').innerText= 'APROBADO';
        } 
        else
        {
            document.getElementById('titulo').innerText= 'PROMOCIONADO';
        }
}
else
{
    document.getElementById('titulo').innerHTML='<h2 style="color:red;">ERROR!!NOTA INVALIDA!!!!!</h2>';
}
        