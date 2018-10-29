'use strict';

class Retval {

	static success(message = '', ...data) {
		return new Retval(true, message, ...data);
	}

	static error(message = '', ...data) {
		return new Retval(false, message, ...data);
	}

	constructor(status, message, data = {}) {
		this.status = status;
		this.message = message;

		if (typeof data === 'object') {
			for (let key in data) {
				this[key] = data[key];
			}
		}
		else {
			this.data = data;
		}
	}

	throws() {
		if (!this.status) {
			throw new Error(this.message);
		}
	}
}

module.exports = Retval;
