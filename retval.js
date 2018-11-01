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

		if (data.length === 1) {
			if (typeof data[0] === 'object') {
				for (let key in data[0]) {
					this[key] = data[0][key];
				}
			}
			else {
				this.data = data;
			}
		}
		else if (data.length) {
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
