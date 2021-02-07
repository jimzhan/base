import test from 'ava';
import * as fsx from './fsx'

test('filename()', (t) => {
  const filename = fsx.filename(import.meta)
  t.true(filename.endsWith('fsx.spec.js'))
});

test('dirname()', (t) => {
  const dirname = fsx.dirname(import.meta)
  t.true(dirname.endsWith('services'))
})