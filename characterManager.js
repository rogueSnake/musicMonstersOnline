// This file is JUST keeping track of logged-in characters 
// so we can give them orders and stuff.

var characters = [];

var addCharacter = function (name) {
    characters.push(name);
};

var removeCharacter = function (name) {
    var i = 0;

    for (i = 0; i < characters.length; i += 1) {

        if (characters[i] === name) {
            characters.splice(i, 1);
            return;
        }
    } 
};


var getCharacters = function () {
    return characters;
}

module.exports = {
    addCharacter : addCharacter,
    removeCharacter : removeCharacter,
    getCharacters : getCharacters
};
