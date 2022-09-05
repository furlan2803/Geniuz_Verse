
let currentIndex = 0;
let vel = 50
let multi = 0.01

/*
Get da query definidas no HTML para sorteio dos ícones
*/ 
images = document.querySelectorAll(".icon-geo img");

/*
Função que seta o tempo em ms
*/
function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

/*diminuição da velocidade do tempo da roleta até parar em um determinado objeto, no caso já definido.*/
isRunning = true;

max = images.length;

async function start(){

    console.log("window loaded")

    console.log("Valor", images.length)

    /*A função pára quando estiver passando pelo ícone definido na sessão.*/
    while(isRunning) {
        speed = vel*multi
        console.log(currentIndex);
        await sleep(speed);
        multi += 0.1
        console.log(currentIndex,speed)
        if (speed >= 300 && currentIndex == 1){
            isRunning = false
            setTimeout('nextScene()',1700);
            
        }

        next()
    }
}

/* Deixa a imagem em visível e invisível*/
function next() {
    images[max-1].classList.remove("selected")
    images[currentIndex].classList.remove("selected")

    currentIndex++

    console.log(currentIndex,"passei aqui")

    images[currentIndex].classList.add("selected")

    if(currentIndex >= (max-1)) {

        console.log("true")
        currentIndex = 0
        
    }    
}

function nextScene(){
    window.location.href = "../5-1-sorting-step-two/index.html"



}






    