las pruebas tambien sirven para escribir codigo limpio porque si tenemos nuestro codigo granulado entonces se pueden probar las funciones/metodos de forma aislada

=== Niveles de abstracción ===
Cuando se usa niveles bajos de abstracción se refiere a usar metodos de la API de JavaScript, por ejemplo, `"Shalion".includes("lion"), "  Data Services  ".trim(), etc.` en cambio niveles altos de abstracción es el llamado a un metodo o una funcion desarrollada. El uso de funciones con nieveles bajo de abstracción le da significado a las acciones de niveles bajo de abstracción. Por ejemplo:

``` Javascript

// Nivel bajo de abstracción
"Some String".replace("String", "ToReplace"); // Reemplaza un string por otro

function deleteWord(word, wordToDelete) {
    return word.replace(wordToDelete, ""); // Reemplaza un string por otro
}

function fullTemplate(template, pairsKeyValue) {
    let templateRendered = template;

    for(const keyword in pairsKeyValue) {
        templateRendered = templateRendered.replaceAll(keyword, pairsKeyValue[keyword]); // Reemplaza un string por otro
    }

    return templateRendered;
}

// Client code

const TEMPLATE = "Hola mi nombre es NOMBRE! y trabajo en WORK. Saludos, NOMBRE";
fullTemplate( TEMPLATE, { NOMBRE: "Jeremias", WORK: "Shalion" } )

deleteWord("Me gusta muchoTRg programar", "TRg");

```

Aunque en los tres ejemplos se realiza lo mismo en niveles bajos de abstracciones las funciones (niveles altos de abstracción) le dan significado.
