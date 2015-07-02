var prototypeCharacter = {
    image : "images/wall.png",
    owner : "Paul McFartney",
    name : "defaultName",
    getImage : function () {
        return this.image;
    },
    getOwner : function () {
        return this.owner;
    },
    getName : function () {
        return this.name;
    }
};

var makeNew = function (x, y, ownerName, characterName) {
    var tempCharacter = Object.create(prototypeCharacter);

    tempCharacter.x = x || 0;
    tempCharacter.y = y || 0;
    tempCharacter.owner = ownerName || "Paul McFartney";
    tempCharacter.name = characterName || "defaultName";

    return tempCharacter;
};

module.exports = {
    makeNew : makeNew
};
