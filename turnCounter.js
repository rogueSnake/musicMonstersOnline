var turnCount = 0,
    incrementCount = function (num) {
        turnCount += num || 1;
    },
    getCount = function () {
        return turnCount;
    },
    setCount = function (num) {
        turnCount = num || 0;
    };

module.exports = {
    incrementCount : incrementCount,
    getCount : getCount,
    setCount : setCount
};

