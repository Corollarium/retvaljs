'use strict';

const assert = require('assert');
const Retval = require(__dirname + '/retval.js');

describe('Retval tests', function() {
	it('Retval.success()', function() {
		let retval = Retval.success('ok!', {
			users: [1, 2, 3],
			id: 10
		});
		assert.equal(true, retval.status);
		assert.equal('ok!', retval.message);
		assert.deepEqual([1, 2, 3], retval.users);
		assert.equal(10, retval.id);
		assert.deepEqual([], retval.data());
	});

	it('new Retval(false)', function() {
		let retval = new Retval(false, 'Write failure');
		assert.equal(false, retval.status);
		assert.equal('Write failure', retval.message);
		assert.deepEqual([], retval.data());
	});

	it('Retval.throws()', function() {
		let retval = Retval.success();
		retval.throws();
		assert.ok(true);

		retval = Retval.error('failed');
		try {
			retval.throws();
			assert.fail('Should have thrown an exception.');
		}
		catch(_) {
			assert.ok(true);
		}
	});

	it('Retval.data()', function() {
		let retval = Retval.success('', 10, 20, 30, 40);
		assert.deepEqual([10, 20, 30, 40], retval.data());
	});
});
