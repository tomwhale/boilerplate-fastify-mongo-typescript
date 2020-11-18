import fastify, { FastifyInstance, FastifyReply, FastifyRequest, RequestHandler } from "fastify"
import { ServerResponse } from "http"


const createSingleHandler = async (app: FastifyInstance, request: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
  try {
  } catch (e) {
     reply.send(e)
  }
}

export default createSingleHandler