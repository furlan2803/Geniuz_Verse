/* 

Instanciando a conexão socket e definindo o nome do usuário.

*/

const socket = io("http://localhost:1337");

isUsernameSetted = false;

function setUsername(n) {

	if(!isUsernameSetted) {

		sessionStorage.setItem("username",`Usuário-${n}`);

		isUsernameSetted = true;

	}

}

socket.on("onlineConnections", (data) => {

	setUsername(data);

	document.querySelector("#onlineConnections").textContent = `${data} online`

});