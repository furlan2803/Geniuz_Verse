/*

O código abaixo é responsável por setar o intervalo de tempo em que os textos pré selecionados irão aparecer na tela

*/


let text = document.getElementById("loading-text");

var loading_text = window.setInterval(textinform, 3000);

let texts = [
    "Bem-vindo de volta à sua experiência educacional imersiva.",
    "Construindo um novo mundo...",
    "Emulando sistema físico e espacial..."
]

let currentText = 0;


function textinform() {

    text.textContent = texts[currentText];

    if(currentText > texts.length) {
        
        window.location.href="../3-select-avatar/index.html"  

    } else {

        currentText++;

    }
}

textinform();
