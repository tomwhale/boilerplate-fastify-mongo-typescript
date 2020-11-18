import { FastifyInstance } from "fastify"
import fp from "fastify-plugin"
import mongoose, { ConnectionOptions, Mongoose } from 'mongoose';

export default fp(async (app: FastifyInstance, { debug = false, host, database, ...options }: { debug?: boolean, host?: string, database?: string } & ConnectionOptions, next: any) => {  
  
  mongoose.set ( 'debug', debug );

  const connection = await mongoose.connect ( `mongodb+srv://${host}/${database}?retryWrites=true&w=majority`, options );

  if(!app.mongo) {
    app.decorate('mongo', {
      connection
    })
  }
  next()
})

declare module 'fastify' {
  export interface FastifyInstance {
    mongo: Mongoose;
  }
}