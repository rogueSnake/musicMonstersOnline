var player = require('../player.js');

describe('Player', function () {
    it('should make a new player object', function () {
        var newPlayer = player.makeNew('Batman', 'Salt', 'Hash');

        expect(newPlayer.getName()).toBe('Batman');
        expect(newPlayer.getSalt()).toBe('Salt');
    });
});

