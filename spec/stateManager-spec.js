var stateManager = require('../stateManager.js');

describe('stateManager', function () {
    it('should store a new State object', function () {
        var testState = {};
        stateManager.setState(testState);
        expect(stateManager.getState()).toBe(testState);
    });
});

