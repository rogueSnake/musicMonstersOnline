var protoOrder = {
    blocking : "default",
    type : "default",

    isBlocking : function () {
        return this.blocking;
    },
    getType : function () {
        return this.type;
    }
};

protoMoveOrder = Object.create(protoOrder);
protoMoveOrder.type = 'move';
protoMoveOrder.blocking = true;
protoMoveOrder.startX = 0;
protoMoveOrder.startY = 0;
protoMoveOrder.endX = 0;
protoMoveOrder.endY = 0;
protoMoveOrder.getStartX = function () {
    return this.startX;
};
protoMoveOrder.getStartY = function () {
    return this.startY;
};
protoMoveOrder.getEndX = function () {
    return this.endX;
};
protoMoveOrder.getEndY = function () {
    return this.endY;
};

var protoLoginOrder = Object.create(protoOrder);
protoLoginOrder.type = 'login';
protoLoginOrder.blocking = true;

var protoLogoutOrder = Object.create(protoOrder);
protoLogoutOrder.type = 'logout';
protoLogoutOrder.blocking = true;

var protoMeasureOrder = Object.create(protoOrder);
protoMeasureOrder.type = 'measure';
protoMeasureOrder.blocking = false;
protoMeasureOrder.number = 0;
protoMeasureOrder.title = 'default';
protoMeasureOrder.getNumber = function () {
    return this.number;
};
protoMeasureOrder.getTitle = function () {
    return this.title;
};

var protoInstrumentOrder = Object.create(protoOrder);
protoInstrumentOrder.type = 'instrument';
protoInstrumentOrder.blocking = false;
protoInstrumentOrder.instrument = 'default';
protoInstrumentOrder.getInstrument = function () {
    return this.instrument;
};

var buildMoveOrder = function (startX, startY, endX, endY) {
    var order = Object.create(protoMoveOrder);

    order.startX = startX;
    order.startY = startY;
    order.endX = endX;
    order.endY = endY;

    return order;
};

var buildLoginOrder = function () {
    return Object.create(protoLoginOrder);
};

var buildLogoutOrder = function () {
    return Object.create(protoLogoutOrder);
};

var buildMeasureOrder = function (measureNumber, measureTitle) {
    var order = Object.create(protoMeasureOrder);

    order.number = measureNumber;
    order.title = measureTitle;

    return order;
};

var buildInstrumentOrder = function (instrument) {
    var order = Object.create(protoInstrumentOrder);

    order.instrument = instrument;

    return order;
};

module.exports = {
    buildMoveOrder : buildMoveOrder,
    buildLoginOrder : buildLoginOrder,
    buildLogoutOrder : buildLogoutOrder,
    buildMeasureOrder : buildMeasureOrder,
    buildInstrumentOrder : buildInstrumentOrder
};

