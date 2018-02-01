const service = {};

service.json = (res, status, json) => {
    res.status(status);
    res.json(json);
};

module.exports = service;