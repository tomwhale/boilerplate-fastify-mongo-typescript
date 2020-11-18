import { FastifyInstance } from "fastify"
import fp from "fastify-plugin"
import * as OneSignal from 'onesignal-node';


export default fp((app: FastifyInstance, options: { appId?: string, apiKey?: string } = {}, next: any) => {
  if(!options.appId || !options.apiKey) {
    throw new Error('API key or app id not defined')
  }

  const client = new OneSignal.Client(options.appId, options.apiKey);
  if(!app.oneSignal) {
    app.decorate('oneSignal', client)
  }
  next()
})

declare module 'fastify' {
  export interface FastifyInstance {
    oneSignal: OneSignal.Client;
  }
}