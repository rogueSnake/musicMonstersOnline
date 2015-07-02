// game.js is just going to cycle turns.

var stateManager = require('./stateManager.js'),
    orderManager = require('./orderManager.js'),
    mapManager = require('./mapManager.js'),
    characterManager = require('./characterManager.js'),
    turnCounter = require('./turnCounter.js');

var initialize = function (latestTurn) {
    turnCounter.setCount(latestTurn.getTurnNumber());
    stateManager.setState(latestTurn);
};

var addOrder = function (characterName, order) {
    var validity = true, // Needs an actual validity check for movement orders.
        errorMessage = 'invalidOrder';

    //stateManager.getState().getActor('nameOfActor').getPosition();

    if (validity) {
        orderManager.addOrder(characterName);
    }

    else {
        return errorMessage;
    }
};

var cancelOrder = function (character, turnNumber) {

};

var compareCoordinates = function (coordinate1, coordinate2, distance) {
    (abs(coordinate1 - coordinate2) > distance) ? return false : return true;
};


var validateMove = function (characterPosition, startPosition) {
//ensure orders are within one X or Y coordinate of character's position.
    (compareCoordinates(characterPosition.x, startPosition.x, 1) &&
            compareCoordinates(characterPosition.y, startPosition.y, 1) &&
            (compareCoordinates(characterPosition.x, startPosition.x, 0) || 
            compareCoordinates(characterPosition.y, startPosition.y, 0))) ? 
            return true : return false;
};

var buildTurn = function () {
    var lastState = stateManager.getState(),
        i = 0,
        characters = characterManager.getCharacters(),
        numberOfCharacters = characters.length,
        tempOrders,
        tempOrder,
        tempPosition,
        movePosition,
        nextState;

    for (i = 0; i < numberOfCharacters; i += 1) {
        tempOrders = orderManager.getOrders(characters[i]);
        tempPosition = lastState.getActorByName(characters[i].getName()).
                getPosition();

        tempOrder = tempOrders[tempOrders.length - 1];

        if (tempOrder && (tempOrder.getType() === 'move')) {
            movePosition = {};
            movePosition.x = tempOrder.getStartX();
            movePosition.y = tempOrder.getStartY();

            if (validateMove(tempPosition, movePosition)) {
                // Add a map collision checking call in the above if parentheses
                // once mapManager is written.
            }
        }
    }

    turnCounter.incrementCount();

    nextState = {
        turnNumber : turnCounter.getCount(),
        actors : [],
        getTurnNumber : function () {
            return this.turnNumber;
        },
        countActors : function () {
            return this.actors.length;
        },
        getActorByIndex : function (index) {
            return this.actors[index];
        },
        getActorByName = function (name) {
            var i = 0,
                actorCount = this.countActors();

            for (i = 0; i < actorCount; i += 1) {

                if (actors[i].getName() === name) {
                    return actors[i];
                }
            }
        }
    };

    stateManager.setState(nextState);

    return nextState;
};

module.exports = {
    initialize : initialize,
    buildTurn : buildTurn,
    addOrder : addOrder,
    cancelOrder : cancelOrder
};

