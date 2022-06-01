/* Exercise 1 */
function ejercicio2Parte1(){
    let sentence = "Nací el 05/04/1982 en Donostia.";
    let date = [];
    let expresion = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    let doc1 = document.getElementById("parte1");

    function validarFecha(valor) {
        for (i = 0; i < sentence.length; i++) {
            if (sentence.charAt(i) >= 0 && sentence.charAt(i) <= 9 && sentence.charAt(i) != ' ') {
                date.push(sentence.substring(i, i + 10));
                break;
            }
        }

        if (expresion.test(date)) {
            doc1.innerHTML = ('La fecha introducida (' + date + ') es correcta.');
        } else {
            doc1.innerHTML = ('Error. Formato inválido.');
        }
    }
    validarFecha(date);
}
/* Exercise 2 */
function ejercicio2Parte2(){

    let email = 'mednologic@gmail.com';
        let expresionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let doc2 = document.getElementById("parte2");

        function validateMail(valor) {
            if (expresionEmail.test(valor)) {
                doc2.innerHTML = ("El email introducido (" + valor + ") es válido.");
            } else {
                console.log(("Error. Email inválido."));
            }
        }
        validateMail(email);
}
/* Exercise 3 No funciona*/
function ejercicio2Parte3(){
    
    let doc3 = document.getElementById("parte3");
    let text = "&hoola";

    function escapeHTML(text) {
        var replacements = [
            ["&", "&amp;"],
            ["\"", "&quot;"],
            ["<", "&lt;"],
            [">", "&gt;"]
        ];
        forEach(replacements, function(replace) {
            text = text.replace(replace[0], replace[1]);
        });
        console.log("texto function: "+ text)
        return text;
    }
    escapeHTML(text);
    doc3.innerHTML = text;
    console.log("texto: "+ text)
}
/* Exercise 4 */
function ejercicio2Parte4(){

    let sentence = "John Smith";
    let invSentence = [];
    let doc4 = document.getElementById("parte4");

    doc4.innerHTML += "Frase original: " + sentence + "</br>";

    function inverSentence(sentence) {

        for (i = 0; i < sentence.length; i++) {
            if (sentence.charAt(i) == ' ') {
                invSentence.push(sentence.substring(0, i));
                invSentence.push(sentence.substring(i + 1, sentence.length));
            }
        }
        doc4.innerHTML += ("Frase invertida: " + invSentence[1] + ", " + invSentence[0]);

    }
    inverSentence(sentence);

}
/* Exercise 5 */
function ejercicio2Parte5(){
    let frasePeligrosa = 'Vamos a borrar el script de esta frase <script> .';
    let codigoScript = [0];

    let index = frasePeligrosa.indexOf('<script>');
    let indexFinal = frasePeligrosa.lastIndexOf('<script>');
    let espacio = ' ';
    let doc5 = document.getElementById("parte5")

    function replaceBetween(frasePeligrosa, index, indexFinal, espacio) {

        return frasePeligrosa.substring(0, index) + espacio + origin.substring(indexFinal);
        
    }
    doc5.innerHTML += (frasePeligrosa);

    replaceBetween(frasePeligrosa, index, indexFinal, espacio);

    function eliminarScript(frasePeligrosa) {
        for (i = 0; i < frasePeligrosa.length; i++) {
            if (frasePeligrosa.charAt(i) == '<') {
                if (frasePeligrosa.charAt(i + 1) == 's' && frasePeligrosa.charAt(i + 2) == 'c' &&
                    frasePeligrosa.charAt(i + 3) == 'r' && frasePeligrosa.charAt(i + 4) == 'i') {
                    for (let x = i; x < frasePeligrosa.length; x++) {
                        if (frasePeligrosa.charAt(x) == '<') {
                            if (frasePeligrosa.charAt(x + 1) == '/' && frasePeligrosa.charAt(x + 2) == 's' &&
                                frasePeligrosa.charAt(x + 3) == 'c' && frasePeligrosa.charAt(x + 4) == 'r') {
                                codigoScript.push(frasePeligrosa.substring(i, x + 9))
                                frasePeligrosa.replace(codigoScript, ' ');
                            }
                        }
                    }
                }
            }
        }
        doc5.innerHTML += (frasePeligrosa);
    }
    eliminarScript(frasePeligrosa);
}

