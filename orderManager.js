var orderQueue = {};

var addOrder = function (characterName, order) {

    if (!orderQueue[characterName]) {
        orderQueue[characterName] = {
            blockingOrders : [],
            nonblockingOrders : []
        };
    }

    order.isBlocking() ? orderQueue[characterName].blockingOrders.push(order) :
            orderQueue[characterName].nonblockingOrders.push(order);
};

var getOrders = function (characterName) {
    var orders = orderQueue[characterName],
        finalOrders = [],
        i = 0,
        nonblockingOrderCount;

    if (orders) {
        nonblockingOrderCount = orders.nonblockingOrders.length;

        for (i = 0; i < nonblockingOrderCount; i += 1) {
            finalOrders.push(orders.nonblockingOrders[i]);
        };
        orders.nonblockingOrders = [];

        if (orders.blockingOrders[0]) {
            finalOrders.push(orders.blockingOrders.pop());
        }
    }
    return finalOrders;
};

module.exports = {
    addOrder : addOrder,
    getOrders : getOrders
};


/*
var turns = [];

// We should consider using a position object here.
var addOrder = function (name, x, y, facing, order, turnNumber) {

    if (!(turns[turnNumber] && turns[turnNumber][0])) {
        turns[turnNumber] = [];
    }

    turns[turnNumber].push({
        name : name,
        x : x,
        y : y,
        facing : facing,
        order : order
    });
};

var getOrders = function (turnNumber) {
    return turns[turnNumber];
};

module.exports = {
    addOrder : addOrder,
    getOrders : getOrders
};
*/

