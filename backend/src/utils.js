const asyncMiddleware = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);


const errorHandler = async (err, req, res, next) => {
    try {
      console.log("Error in errorHandler: ", req.url, req.body, err);
      let response = {
        success: false,
        data: {},
        error: err || "Something went wrong",
      };
      res.send(response);
    } catch (err) {
      next(err);
    }
};

const sendResponse = (req, res, success, data, err) => {
  return res.json({
    success,
    data,
    error: err,
  });
};


const classResponse = (success, data, err) => {
  return {
    success,
    data,
    err,
  };
};


export { asyncMiddleware, errorHandler, sendResponse, classResponse };
    