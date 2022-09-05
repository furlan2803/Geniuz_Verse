/*

Salvando o avatar escolhido pelo usuário.

*/

document.querySelectorAll(".Image-profiles > button").forEach(profileAvatar => {


	profileAvatar.addEventListener("click", function(event) {
		window.location.href = "../4-lobby/index.html"
		

		sessionStorage.setItem("profile-avatar-path", event.target.getAttribute("src"));
		console.log("olá")

	})
})