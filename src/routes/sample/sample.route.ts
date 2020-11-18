import { FastifyInstance } from 'fastify'
import createSingleHandler from './handlers/createSingleSample.handler'

export function configureSampleRoutes(app: FastifyInstance) {
  app.post('/config/', {
    schema: {
      description: 'config Creation API',
      tags: ['config'],
      summary: 'A Config Creation API',
      body: {
        type: 'object',
        properties: {
          key: { 
            type: 'string',
          },
          earliestCompatibleFacade: { 
            type: 'string'
          },
          value: {
            type: 'object',
          }
        },
        required: [
          'key',
          'value'
        ]
      },
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            key: { type: 'string' },
            earliestCompatibleFacade: { 
              type: 'string'
            },
            value: {
              type: 'object',
            }
          }
        }
      },
      security: [
        {
          'apiKey': []
        }
      ]
    }
  }, (request, reply) => {
    return createSingleHandler(app, request, reply)
  })

  app.get('/config/:key/', {
    schema: {
      description: 'Get\'s the latest version of the config',
      tags: ['config'],
      summary: 'A Config retrieval API',
      params: {
        key: { 
          type: 'string',
        },
      },
      querystring: {
        facadeVersion: { 
          type: 'string',
        },
      },
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            key: { type: 'string' },
            earliestCompatibleFacade: { 
              type: 'string'
            },
            value: {
              type: 'object',
            }
          }
        },
        404: {
          description: 'Config Not Found - Either the config does not exist or there is not one compatible with the facade version',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      },
      security: [
        {
          'apiKey': []
        }
      ]
    }
  }, (request, reply) => {
  })

  app.get('/config/:key/version/:version', {
    schema: {
      description: 'Get a specific version of the of the config',
      tags: ['config'],
      summary: 'A Config retrieval API',
      params: {
        key: { 
          type: 'string',
        },
      },
      querystring: {
        facadeVersion: { 
          type: 'string',
        },
      },
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            key: { type: 'string' },
            earliestCompatibleFacade: { 
              type: 'string'
            },
            value: {
              type: 'object',
            }
          }
        },
        404: {
          description: 'Config Not Found - Either the config does not exist or there is not one compatible with the facade version',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      },
      security: [
        {
          'apiKey': []
        }
      ]
    }
  }, (request, reply) => {
    reply.send({  })
  })

  app.put('/config/:key/', {
    schema: {
      description: 'Update a config value. Will create a new version.',
      tags: ['config'],
      summary: 'A Config update API',
      params: {
        key: { 
          type: 'string',
        },
      },
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            earliestCompatibleFacade: { 
              type: 'string'
            },
            value: {
              type: 'object',
            }
          }
        },
        404: {
          description: 'Config Not Found',
          type: 'object',
          properties: {
            error: { type: 'string' }
          }
        }
      },
      security: [
        {
          'apiKey': []
        }
      ]
    }
  }, (request, reply) => {
  })

}
