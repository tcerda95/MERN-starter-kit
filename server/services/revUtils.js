
const service = {};

service.isRevved = path => {
	const filename = service.extractFilename(path);
	const splitted = filename.split('.');

	if (!splitted.length === 3)
		return false;
	
	const hash = splitted[1];
	return service.isHash(hash);
}

service.extractFilename = path => {
	const splitted = path.split('/');
	return splitted[splitted.length - 1];
}

service.isHash = hash => {
	const re = /[0-9A-Fa-f]{8}/;
	return re.test(hash);
}


module.exports = service;