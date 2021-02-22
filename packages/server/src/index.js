import config from 'config'
import fastify from 'fastify'

const server = fastify({ logger: true })

server.register(import('./api/auth'), { prefix: '/auth' })

server.listen(config.port, config.host)
