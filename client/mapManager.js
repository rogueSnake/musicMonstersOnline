var mapManager = require('../mapManager');

var get = function (name) {
    var map = mapManager.get(name);

    return map;
};

module.exports = {
    get : get
};

