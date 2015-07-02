var orderGenerator = require('../orderGenerator.js');

describe('orderGenerator', function () {

    it('should generate a move order', function () {
        var order = orderGenerator.buildMoveOrder(1, 2, 3, 4);

        expect(order.isBlocking()).toBe(true);
        expect(order.getType()).toBe('move');
        expect(order.getStartX()).toBe(1);
        expect(order.getStartY()).toBe(2);
        expect(order.getEndX()).toBe(3);
        expect(order.getEndY()).toBe(4);
    });

    it('should generate a login order', function () {
        var order = orderGenerator.buildLoginOrder();

        expect(order.isBlocking()).toBe(true);
        expect(order.getType()).toBe('login');
    });

    it('should generate a logout order', function () {
        var order = orderGenerator.buildLogoutOrder();

        expect(order.isBlocking()).toBe(true);
        expect(order.getType()).toBe('logout');
    });

    it('should generate a measure order', function () {
        var order = orderGenerator.buildMeasureOrder(3, 'title');

        expect(order.isBlocking()).toBe(false);
        expect(order.getType()).toBe('measure');
        expect(order.getNumber()).toBe(3);
        expect(order.getTitle()).toBe('title');        
    });

    it('should generate an instrument order', function () {
        var order = orderGenerator.buildInstrumentOrder('guitar');

        expect(order.isBlocking()).toBe(false);
        expect(order.getType()).toBe('instrument');
        expect(order.getInstrument()).toBe('guitar');
    });
});

