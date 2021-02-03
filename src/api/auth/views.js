export default async (fastify) => {
  fastify.get('/login', async () => {
    return { hello: 'world' }
  })
}
