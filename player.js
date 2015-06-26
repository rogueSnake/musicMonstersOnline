var character = require('./character.js');

var protoPlayer = {
    name : "Default",
    passwordInfo : {},
    character : {},

    getName : function () {return this.name;},
    getSalt : function () {return this.passwordInfo.salt;},
    getHash : function () {return this.passwordInfor.hash;},
    getCharacter : function () {return this.character}
};

var makeNew = function (name, passwordSalt, passwordHash) {
    var player = Object.create(protoPlayer);

    player.character = character.makeNew(0, 0, name);
    player.name = name;
    player.passwordInfo = {
        salt : passwordSalt,
        hash : passwordHash
    };
    return player;
};

module.exports = {
    makeNew : makeNew,
};

