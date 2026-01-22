const ApiResponse = (statusCode, data, message = "Success") =>{
    statusCode = statusCode
    data = data
    message = message
    success = statusCode < 400
};

const ApiError = (statusCode, data, message = "Error") =>{
    statusCode = statusCode
    data = data
    message = message
    success = statusCode < 400
};

module.exports = {
    ApiResponse,
    ApiError,
}