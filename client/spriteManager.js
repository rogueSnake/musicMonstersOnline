var tiles = [];

var addTile = function (tileID, position) {
    position.endX = position.endX || position.startX + 1;
    position.endY = position.endY || position.startY + 1;
    tiles.push({
        spriteKey : tileID,
        position : position
    });
};

var getTile = function (tileID) {
    var i = 0,
        numberOfTiles = tiles.length;

    for (i = 0; i < numberOfTiles; i += 1) {

        if (tiles[i].spriteKey === tileID) {
            return tiles[i];
        }
    }
};

var getTilePosition = function (tileID) {
    return getTile(tileID).position;
};

module.exports = {
    addTile : addTile,
    getTilePosition : getTilePosition
};

