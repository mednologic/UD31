function relojJavascript() {

    //Obtener la fecha y la hora del sistema
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    console.log(horas);

    //Si sólo es un dígito, poner un 0 delante
    horas = cero(horas);
    minutos = cero(minutos);
    segundos = cero(segundos);

    //Mostrar el reloj
    horasHtml = document.getElementById("horas");
    minutosHtml = document.getElementById("minutos");
    segundosHtml = document.getElementById("segundos");

    horasHtml.innerHTML = horas;
    minutosHtml.innerHTML = minutos;
    segundosHtml.innerHTML = segundos;

    //Actualizar el reloj por segundo
    setTimeout(function() { relojJavascript() }, 1000);
}

//Invocar el método relojJavascript
relojJavascript();

//Función para poner un 0 delante si sólo tiene un dígito
function cero(valor) {
    if (valor < 10) {
        valor = "0" + valor;
    }
    return valor;
}