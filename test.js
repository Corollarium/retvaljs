'use strict';

const assert = require('assert');
const Retval = require(__dirname + '/retval.js');

describe('Retval tests', function() {
	it('Retval ok', async function() {
		let message = "bla bla";
		let data = {banana: "abacaxi"};
		let r = Retval.success(message, data);
		assert.ok(r.status);
		assert.equal(message, r.message);
		assert.ok('banana' in r);
		assert.equal(data.banana, r.banana);
	});

	it('Retval false', async function() {
		let message = "bla bla";
		let data = {banana: "abacaxi"};
		let r = Retval.error(message, data);
		assert.ok(!r.status);
		assert.equal(message, r.message);
		assert.ok('banana' in r);
		assert.equal(data.banana, r.banana);
	});
});
