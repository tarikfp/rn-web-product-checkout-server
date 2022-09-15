module.exports = {
    createError: function (field, msg) {
        return {
            field: field,
            msg: msg
        };
    },

    writeErrorResponse: function (res, errors) {
        // if there are errors send an error response
        if (errors.length > 0) {
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({
                errors: errors
            }));
        }
    }
};
