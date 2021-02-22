import knex from 'knex'
import config from 'config'
import { ObjectId } from 'bson'
import objection from 'objection'

export const Key = () => new ObjectId().toHexString()

objection.Model.knex(knex(config.db))
export class Model extends objection.Model {
  async $beforeInsert (ctx) {
    await super.$beforeInsert(ctx)
    if (this.id) {
      this.id = Key()
    }
  }
}
