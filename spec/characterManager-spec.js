var characterManager = require('../characterManager');

describe('characterManager', function () {

    it('should add characters', function () {
        characterManager.addCharacter('Batman');
        characterManager.addCharacter('Jason Todd');
        characterManager.addCharacter('Joker');
    });

    it('should remove a character', function () {
        characterManager.removeCharacter('Jason Todd');
    });

    it('should return a list of remaining character names', function () {
        var characters = characterManager.getCharacters();

        expect(characters.length).toBe(2);
        expect(characters[0]).toBe('Batman');
        expect(characters[1]).toBe('Joker');
    });
});

