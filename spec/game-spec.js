var game = require('../game.js');

describe('Game', function () {
    it ('should return a turn object', function () {
        var newTurn = game.buildTurn();

        expect(newTurn.getTurnNumber()).toBe(1);
        expect(newTurn.countActors()).toBe(0);
    });

});

