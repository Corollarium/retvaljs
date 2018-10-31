'use strict';

class Retval {

	static success(message = '', ...data) {
		return new Retval(true, message, ...data);
	}

	static error(message = '', ...data) {
		return new Retval(false, message, ...data);
	}

	constructor(status, message = '', ...data) {
		this.status = status;
		this.message = message;
		this.__retvalData__ = [];

		if (data.length === 1 && typeof data[0] === 'object') {
			for (let key in data[0]) {
				this[key] = data[0][key];
			}
		}
		else {
			this.__retvalData__ = data;
		}
	}

	data() {
		return this.__retvalData__;
	}

	throws() {
		if (!this.status) {
			throw new Error(this.message);
		}
	}
}

module.exports = Retval;
