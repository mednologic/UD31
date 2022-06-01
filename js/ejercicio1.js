
function TiradaDados(){

    let min = 1;
    let max = 6;
    const tiradas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const noRepeat = [];

    function numAleatorios(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    

    //Párrafo de contenido
    contenido = document.getElementById("output");

    //Bucle de 36.000 tiradas
    for (i = 0; i < 36000; i++) {
        let dado1 = numAleatorios(), dado2 = numAleatorios();
        let suma = dado1 + dado2;
        tiradas[suma - 2]++;

        const elemento = tiradas[suma - 2];

        if (!noRepeat.includes(tiradas[suma - 2])) {
            noRepeat.push(elemento);
        }
    }

    //Mostrar el array final
    for (x = 0; x < tiradas.length; x++) {
        output.innerHTML += ("Ha salido el número " + (x + 2) + " repetido " + tiradas[x] + " veces.</br>");
    }
}