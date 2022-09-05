/* 

Balão de ajuda quando o mouse passa por cima 

*/




const helpButtonElement = document.querySelector("#help-btn");
const infoTextElement = document.querySelector("#info-text");

helpButtonElement.addEventListener("mouseover", function() {

	infoTextElement.style.display = "flex";

})

helpButtonElement.addEventListener("mouseout", function() {
	
	infoTextElement.style.display = "none";

})

function start(){
	setTimeout('nextScene()',2000);	
}


window.addEventListener("load",start())

function nextScene(){
    window.location.href = "../7-game-session/index.html"
}