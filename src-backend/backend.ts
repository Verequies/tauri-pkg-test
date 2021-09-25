// Import required modules
import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import sharp from "sharp";

// Setup Fastify
const server: FastifyInstance = fastify();

const shp = sharp().resize();

// Main
server.all("*", async (req: FastifyRequest, rep: FastifyReply) => {
	await rep
		.code(200)
		.send();
});

// Start Fastify
void server.listen(3000);