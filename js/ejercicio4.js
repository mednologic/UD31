/* Variables sin limite de alcance */
var num1;
var num2;
var operator;
var result;
var estado=false;

function uno() {
    pantalla.innerHTML += "1";
    anyadirNum1("1");
}

function dos() {
    pantalla.innerHTML += "2";
    anyadirNum1("2");
}

function tres() {
    pantalla.innerHTML += "3";
    anyadirNum1("3");
}

function cuatro() {
    pantalla.innerHTML += "4";
    anyadirNum1("4");
}

function cinco() {
    pantalla.innerHTML += "5";
    anyadirNum1("5");
}

function seis() {
    pantalla.innerHTML += "6";
    anyadirNum1("6");
}

function siete() {
    pantalla.innerHTML += "7";
    anyadirNum1("7");
}

function ocho() {
    pantalla.innerHTML += "8";
    anyadirNum1("8");
}

function nueve() {
    pantalla.innerHTML += "9";
    anyadirNum1("9");
}
function cero() {
    pantalla.innerHTML += "0";
    anyadirNum1("0");
}
function borrarC() {
    pantalla.innerHTML = " ";
    num1    = null;
    num2    = null;
    estado  = false;
}

function borrarCE() {
    pantalla.innerHTML = " ";
    num1    = null;
    num2    = null;
    estado  = false;
    operator= null;
}

function mas() {
    var suma1 = document.getElementById("pantalla").value;
    pantalla.innerHTML = " ";
    operator ="+";
    estado = true;
    console.log("Estado "+estado)
}

function menos() {
    var resta1 = document.getElementById("pantalla").value;
    pantalla.innerHTML = " ";
    operator ="-";
    estado = true;
}

function por() {
    var factor1 = document.getElementById("pantalla").value;
    pantalla.innerHTML = " ";
    operator ="*";
    estado = true;
}

function entre() {
    var dividendo = document.getElementById("pantalla").value;
    pantalla.innerHTML = " ";
    operator ="/";
    estado = true;
}

function igual() {
    /* Realizar la operacion */
    switch(operator){
        case "+":
            console.log("num1"+ num1);
            console.log("num2"+ num2);
            result = parseInt(num1) + parseInt(num2);
            break;
        case "-":
            result = parseInt(num1) - parseInt(num2);
            break;
        case "*":
            result = parseInt(num1) * parseInt(num2);
            break;
        case "/":
            result = parseInt(num1) / parseInt(num2);
            break;
    }
    pantalla.innerHTML = result;
}
function anyadirNum1(valor){
    if(estado==false){
        if(num1 == null){
            num1=valor;
        }else{
            num1=num1+valor;
        }
    }else{
        if(num2 == null){
            num2=valor;
        }else{
            num2=num2+valor;
        }
    }
}
