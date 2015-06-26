// game.js is just going to cycle turns.

var stateManager = require('./stateManager.js'),
    orderManager = require('./orderManager.js'),
//    characterManager = require('./characterManager.js'),
    turnCounter = require('./turnCounter.js');

var initialize = function (latestTurn) {
    turnCounter.setCount(latestTurn.getTurnNumber());
    stateManager.set(latestTurn);
};

var addOrder = function (characterName, order) {
    var validity = true, // Needs an actual validity check for movement orders.
        errorMessage = 'invalidOrder';

    if (validity) {
        orderManager.addOrder(characterName);
    }

    else {
        return errorMessage;
    }
/*
    vaildity ? orderManager.addOrder(characterName, order) : 
            return errorMessage; // Return a string?
*/
};

var cancelOrder = function (character, turnNumber) {

};

var buildTurn = function () {
    var lastState = stateManager.get(),
        i = 0;

    // for each character, add character's orders to turn.

 //   for (i = 0; i < numberOfCharacters; i += 1) {

//        orderManager.getOrders(character[i])
   // }

    turnCounter.incrementCount();

    return {
        turnNumber : turnCounter.getCount(),
        actors : [],
        getTurnNumber : function () {
            return this.turnNumber;
        },
        countActors : function () {
            return this.actors.length;
        },
        getActor : function (index) {
            return this.actors[index];
        }
    };
};

module.exports = {
    initialize : initialize,
    buildTurn : buildTurn,
    addOrder : addOrder,
    cancelOrder : cancelOrder
};

