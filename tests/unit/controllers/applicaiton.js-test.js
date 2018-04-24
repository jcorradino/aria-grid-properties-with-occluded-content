import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | applicaiton.js', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:applicaiton.js');
    assert.ok(controller);
  });
});
