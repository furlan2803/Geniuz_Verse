// Importing the instancied app from server.ts.
import { app }  from "./app";
import http from "http";
import { Server } from "socket.io";

// Importing the application default config.
import config from "./config/default";

// Importing the app data source (database connection information).
import { AppDataSource } from "./database/data-source";
import { sleep } from "./helpers";

// Setting up the application default port and hostname.
const port = config.port as number;
const host = config.host as string;

// Instancing the socket server.
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: "*"
	}
});

// Instancing events on socket connection.
io.on("connection", socket => {

	// Emitting the lobby chat every time received.
	socket.on("lobbyChat", data => {

		io.emit("lobbyChat", data);
	
	});
	
});


// Getting the number of current active socket sessions.
async function getNumberOfConnections() {

	const loop = true;

	while(loop) {

		const list = await io.sockets.allSockets();

		// Emitting the number of current active socket connections.
		io.emit("onlineConnections", list.size);

		await sleep(1000);


	}

}

getNumberOfConnections();

	


// Setting up the server.
httpServer.listen(port, host, () => {

	// Cleaning up the console.
	console.clear();
    
	// Sending a message.
	console.info(`🚀 Server started successfully. Listening at http://${host}:${port}/`);
    
});

// Initializing the database.
AppDataSource.initialize()
	.then(() => {

		// Sending a successful message case the connection started.
		console.info("🔒 Database connected successfully.");
	
	})
	.catch((error) => {

		// Cleaning up the console and sending an error message case connection refused.
		console.clear();
		console.log(`👎 There was an error while connecting to the database:\n\n   ${error}`);
	
	});