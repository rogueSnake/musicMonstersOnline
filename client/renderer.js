var testMap = require('./mapManager').get('testMap'), //require('./maps/testMap.json');
    pixi = require('pixi'),
    config = require('./config'),
    loader = new pixi.AssetLoader(["images/spriteSheet.json"]),
    spriteNames = [
        "dirt",
        "grass"
    ],
    stage = {},
    renderer = {};

loader.onComplete = function () {
    renderMap(testMap);

/*
    var i = 0,
        numberOfSprites = spriteNames.length,
        sprites = [];

    for (i = 0; i < numberOfSprites; i += 1) {
        sprites[i] = pixi.Sprite.fromFrame(spriteNames[0]);
        spriteContainer.addChild(sprites[i]);
        sprites[i].position.x = 400 + i * config.get('tileSize');
        sprites[i].position.y = 300 + i * config.get('tileSize');
    }
*/

//    var dirtTexture = pixi.Texture.fromFrame(textureNames[0]),
//        dirtSprite = new pixi.Sprite(dirtTexture);
  //    var dirtSprite = pixi.Sprite.fromFrame(spriteNames[0]);


//    dirtSprite.position.x = 400;
//    dirtSprite.position.y = 300;
//    spriteContainer.addChild(dirtSprite);
};

loader.load();

stage = new pixi.Stage(0x33BBFF);
renderer = pixi.autoDetectRenderer(800, 600);

document.body.appendChild(renderer.view);

var spriteContainer = new pixi.DisplayObjectContainer();
spriteContainer.x = 400;
spriteContainer.y = 300;

stage.addChild(spriteContainer);

var addSprite = function (spriteName, x, y) {
    var sprite = pixi.Sprite.fromFrame(spriteName);

    sprite.position.x = x * config.get('tileSize');
    sprite.position.y = y * config.get('tileSize'); 

    spriteContainer.addChild(sprite);
};

var renderStage = function () {
    renderer.render(stage);
};

var clearInterface = function () {

};

var clearMap = function () {

};

var clearTurn = function () {

};

var renderInterface = function (interface) {
    clearInterface();

    renderStage();
};

var renderMap = function (map) {
    var x = 0,
        y = 0,
        columnCount = map.getSize().width,
        rowCount = map.getSize().height;

    clearMap();

    for (x = 0; x < columnCount; x += 1) {

        for (y = 0; y < rowCount; y += 1) {
            addSprite(map.getTile(x, y), x, y);
        }
    }
    renderStage();
};

var renderTurn = function(turn) {
    clearTurn();

    renderStage();
};

module.exports = {
    renderInterface : renderInterface,
    renderMap : renderMap,
    renderTurn : renderTurn
};

