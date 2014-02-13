// manage reading and writing page url state
UrlManager = function() {

	var self = this;
	self.state = {};

	self.setParam = function(field,value) {
		if (field.match(/\[\]$/)) {
			if (!self.state[field]) {
				self.state[field] = {};
			}
			self.state[field][value] = 1;
		} else {
			self.state[field] = value;
		}
		self.updateUrl();
	}

	self.removeParam = function(field,value) {
		if (field.match(/\[\]$/)) {
			if (self.state[field] && self.state[field][value]) {
				delete self.state[field][value];
			}

		} else {
			delete self.state[field];
		}
		self.updateUrl();
	}

	self.clearParam = function(field) {
		delete self.state[field];
		self.updateUrl();
	}

	self.getParams = function() {
		return self.state;
	}

	// get a specific field
	self.getParam = function(field) {
		if (field.match(/\[\]$/)) {
			var list = [];
			// return objects as a list
			if (self.state[field]) {
				for (key in self.state[field]) {
					list.push(key);
				}
				return list;
			}
		} else {
			return self.state[field];
		}
	}

	self.readUrl = function() {
		var vars = {}, hash;
		var q = window.location.href.split('?')[1];

		if(q != undefined && q.length){
			q = q.replace(/#$/,'');
			q = q.split('&');
			for(var i = 0; i < q.length; i++){
				pair = q[i].split('=');
				var key = pair[0];
				var val = decodeURIComponent(pair[1]);
				if (typeof(key) === 'undefined' || typeof(val) === 'undefined') {
					continue;
				}
				if (key.match(/\[\]$/)) {
					if (!vars[key]) {
						vars[key] = {};
					}
					vars[key][val] = 1;
				} else {
					vars[key] = val;
				}
			}

			self.state = vars;
		}
	}

	self.updateUrl = function() {
		var params = [];

		for (var field in self.state) {

			if (Object.prototype.toString.call(self.state[field]) == '[object Object]') {
				for (var value in self.state[field]) {
					params.push(field+'='+encodeURIComponent(value));
				}
			} else {
				params.push(field+'='+encodeURIComponent(self.state[field]));
			}
		}

		var queryString = params.join('&');
		history.pushState(null, queryString, '?' + queryString);
	}

	return self;
}
