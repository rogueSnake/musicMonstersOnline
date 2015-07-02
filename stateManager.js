var currentState = {};

var setState = function (newState) {
    currentState = newState;
};

var getState = function () {
    return currentState;
};

module.exports = {
    setState : setState,
    getState : getState
};

