import { ObjectId } from 'bson';
import { Model } from 'objection';

export const Key = () => new ObjectId().toHexString();

export class BaseModel extends Model {

}
