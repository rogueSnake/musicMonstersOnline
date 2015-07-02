var mapStorage = {};

mapStorage.testMap = require('./maps/testMap.json');

var get = function (name) {
    return (function () {
        var mapData = mapStorage[name];

        return {
            getSize : function () {
                return {
                    width : mapData.tileMask.length,
                    height : mapData.tileMask[0].length
                };
            },
            getTile : function (x, y) {
                return mapData.tileMask[x][y];
            },
            checkCollision : function (x, y) {
                return mapData.collisionMask[x][y];
            }
        };
    }());
};


module.exports = {
    get : get
};


/*
var map = {
    id = "",
    size = {x : 0, y : 0},
    collisionMask = {},
    },
    currentMap = new map {},
    listOfMaps = [],
    loadMap = function (newMap) {
        listOfMaps.push(newMap);
    },
    setCurrentMap = function (newMapId) {
        for (i = 0;i < listOfMaps.length; i += 1) {
            if (listofMaps[i].id === newMapId) {
                currentMap = listOfMaps[i];
                return;
            }
        }
    },









module.exports = {
    loadMap : loadMap,
    setCurrentMap : setCurrentMap    
}

*/
