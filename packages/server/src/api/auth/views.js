export default async (fastify) => {
  fastify.get('/login', async () => ({ hello: 'world' }))
}
