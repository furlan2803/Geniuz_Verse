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



/*

Selecionar questão

*/

let selectedRadioButton;
let isTheQuestionAlreadyAnswered = true;

const allRadioButtons = document.querySelectorAll(".radio-btn");

allRadioButtons.forEach(radioButton => {

	radioButton.addEventListener("click", function() {

		if(!selectedRadioButton && !isTheQuestionAlreadyAnswered) {

			selectedRadioButton = radioButton;

			selectedRadioButton.children[0].classList.add("active")

		} else if (selectedRadioButton && !isTheQuestionAlreadyAnswered) {

			selectedRadioButton.children[0].classList.remove("active");

			selectedRadioButton = radioButton;

			selectedRadioButton.children[0].classList.add("active")

		}

	})

})