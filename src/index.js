import config from 'config'
import fastify from 'fastify'
import { db } from './services'
import auth from './api/auth'

const server = fastify({ logger: true })

server.register(auth, { prefix: '/auth' })

server.listen(config.port, config.host)