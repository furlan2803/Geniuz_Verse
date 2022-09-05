

/*

Mostrar ou esconder o modal menu da loja de tickets.

*/

const buyTicketsButton = document.querySelector("#buy-tickets-btn");
const ticketShopSection = document.querySelector("#ticket-shop");
const ticketShopFilterBg = document.querySelector("#ticket-shop-bg-filter");
let image = sessionStorage.getItem("profile-avatar-path")

buyTicketsButton.addEventListener("click", function() {

	ticketShopSection.style.display = "flex";

})
// Altera seu personagem para o selecionado na tela anterior
function changeItem(){
	document.querySelector("#img").src=image
}



ticketShopFilterBg.addEventListener("click", function() {

	ticketShopSection.style.display = "none";
})

/*

Controle dos botões de diminuir ou aumentar a quantidade de tickets.

*/

const ticketsQuantityElement = document.querySelector("#tickets-quantity");
const removeTicketByOneElement = document.querySelector("#removeOne");
const addTicketsByOneElement = document.querySelector("#addOne");
const totalPriceElement = document.querySelector("#buy-ticket-price");

let ticketsQuantity = 1;

function updatePrice() {

	let total = ticketsQuantity * 5;

	totalPriceElement.setAttribute("value", total);

	totalPriceElement.textContent = total;
}

function removeTicketByOne() {

	ticketsQuantity > 1 ? ticketsQuantity-- : false;
	ticketsQuantityElement.setAttribute("value", ticketsQuantity);
	ticketsQuantityElement.textContent = ticketsQuantity;
	updatePrice();

}

removeTicketByOneElement.addEventListener("click", function() {

	removeTicketByOne();

})

function addTicketByOne() {

	ticketsQuantity++;
	ticketsQuantityElement.setAttribute("value", ticketsQuantity);
	ticketsQuantityElement.textContent = ticketsQuantity;
	updatePrice();

}

addTicketsByOneElement.addEventListener("click", function() {

	addTicketByOne();

})



/*

Mostrar ou esconder o modal menu dos patrocinadores.

*/

const seeGiftButton = document.querySelector("#see-gift-btn");
const sponsorSection = document.querySelector("#sponsor-section");
const sponsorSectionCloseBtn = document.querySelector("#sponsor-section-close-btn");
const sponsorSectionFilterBg = document.querySelector("#sponsor-bg-filter");

seeGiftButton.addEventListener("click", function() {

	sponsorSection.style.display = "flex";

})

sponsorSectionFilterBg.addEventListener("click", function() {

	sponsorSection.style.display = "none";

})

sponsorSectionCloseBtn.addEventListener("click", function() {

	sponsorSection.style.display = "none";
})

/*

Configurando o chat global da aplicação.

*/

const socket = io("http://localhost:1337");

const messageInput = document.querySelector("#message-input");

// Enviando uma nova mensagem.

messageInput.addEventListener("keypress", function(event) {
	
	if (event.key === "Enter") {

		message = messageInput.value;

		socket.emit("lobbyChat", {
			emissor: sessionStorage.getItem("username"),
			message: message,
			profileAvatarPath: sessionStorage.getItem("profile-avatar-path"),
		});

		messageInput.value = "";

	}

  });


// Adicionando uma mensagem recebida à lista de mensagens.

socket.on("lobbyChat", (data) => {

	document.querySelector("#messages").innerHTML += `
	
	
	<div class="msg">
		<img src="${data.profileAvatarPath}" alt="">
		<div class="data">
			<span class="name">${data.emissor}</span>
			<span class="content">${data.message}</span>
		</div>
	</div>

	`

})
window.addEventListener("edit",changeItem())