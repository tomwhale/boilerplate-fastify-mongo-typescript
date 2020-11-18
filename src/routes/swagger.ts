import * as FastifySwagger from 'fastify-swagger' 
import { FastifyInstance } from 'fastify'

export function configureSwaggerPlugin(app: FastifyInstance) {
  app.register(FastifySwagger, {
    routePrefix: '/documentation',
    swagger: {
      info: {
        title: 'Config Service swagger',
        description: 'The API documentation for the IYA config service',
        version: '0.1.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'config', description: 'Config related end-points' }
      ],
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        }
      }
    },
    exposeRoute: true
  })
  
}
