var orderManager = require('../orderManager.js'),
    prototypeOrder = {
        blocking : false,
        type : "",
        setBlocking : function (setting) {this.blocking = setting;},
        isBlocking : function () {return this.blocking;}
    },
    i = 0,
    currentOrder;

// Add two blocking and two nonblocking orders for both Batman and Joker.
for (i = 0; i < 4; i += 1) {
    currentOrder = Object.create(prototypeOrder);

    if (i < 2){
        currentOrder.setBlocking(true);
    }
    orderManager.addOrder('Batman', currentOrder);
    orderManager.addOrder('Joker', currentOrder);
}

describe('orderManager', function () {

    it('should retrieve all nonblocking and one blocking order ' + 
            'for a given character', function () {
        var batOrders = orderManager.getOrders('Batman');

        expect(batOrders.length).toBe(3);
        expect(batOrders[0].isBlocking()).toBe(false);
        expect(batOrders[1].isBlocking()).toBe(false);
        expect(batOrders[2].isBlocking()).toBe(true);
    });

    it('should subsequently return the remaining blocking order', function () {
        var batOrders = orderManager.getOrders('Batman');

        expect(batOrders.length).toBe(1);
        expect(batOrders[0].isBlocking()).toBe(true);
    });
});

