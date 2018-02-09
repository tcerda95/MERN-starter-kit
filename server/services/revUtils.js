
const service = {};

service.isRevved = path => {
  const filename = service.extractFilename(path);
  const splitted = filename.split('.');

  // Name must have at least 2 dots for separating name, hash and extension
  if (splitted.length > 2) {
    const hash = splitted[1];
    return service.isHash(hash);
  }

  return false;
};

service.extractFilename = path => {
  const splitted = path.split('/');
  return splitted[splitted.length - 1];
};

service.isHash = hash => {
  const re = /[0-9A-Fa-f]{8}/;
  return re.test(hash);
};

module.exports = service;