import fastify from "fastify";

const server = fastify();

server.get("/", async (request, reply) => {
	reply.code(200).send({
		backend: "active",
		success: true,
	});
});

// Scores Route

server.get("/scores", async (request, reply) => {
	reply.header("Access-Control-Allow-Origin", "*");
	reply.code(200).send({
		success: true,
		data: {
			robot: "Octave",
			season: {
				2021: {
					scores: {
						scrimmage: {
							number: 1,
							score: 6,
						},
						state: {
							number: 1,
							score: null,
						},
					},
				},
			},
		},
	});
});

server.listen(process.env.PORT || 8080, "0.0.0.0", (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`);
});
