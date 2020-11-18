import * as Fastify from 'fastify'
import { configureConfgigPlugin, configureSwaggerPlugin } from './routes'

export default function createServer(opts?: Fastify.ServerOptions) {
  const app = Fastify(opts)

  app.register(require('fastify-mongoose'), {
    uri: 'mongodb://localhost/test_db'
  })

  configureSwaggerPlugin(app)
  configureConfgigPlugin(app)

  return app
}
