const validation = {};

validation.require = (attr, err) => {
  expect(err.errors[attr].kind).toEqual('required');
};

validation.type = (attr, err) => {
  expect(err.errors[attr].name).toEqual('CastError');
};

validation.valid = err => {
  expect(err).toBeNull();
};

module.exports = validation;
