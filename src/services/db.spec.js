import test from 'ava';
import * as db from './db';

test('db.Key()', (t) => {
  const key = db.Key();
  t.is(key.length, 24);
});
