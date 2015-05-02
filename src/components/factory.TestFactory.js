module.exports = function() {
    var value = "Hey I'm a value and I'm being returned from a factory!";

    var get = function() {
        return value 
    }

    var update = function(req) {
        value = req
        return req 
    }

    return {
        get: get,
        update: update
    }
}
