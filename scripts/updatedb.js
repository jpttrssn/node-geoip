// fetches and converts maxmind lite databases

'use strict';

var updateDb = require('../lib/updateDb');

process.env.GEOIP_STD_OUT_ENABLED = true;

updateDb(null, function(err) {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	process.exit(0);
});