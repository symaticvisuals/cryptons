const utils = require("../utils");


exports.get = utils.asyncMiddleware(async (req, res, next) => { 
    return utils.sendResponse(req, res, true, "Hello World", null);
});

