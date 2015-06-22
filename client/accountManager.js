var bcrypt = require('bcrypt'),
    rounds = 12;


var setHashDifficulty = function (numberOfRounds) {
    rounds = numberOfRounds;
};

var generateSalt = function (callback) {
    bcrypt.genSalt(rounds, function (error, salt) {
        callback(error, salt);
    });
};

var getHash = function (password, salt, callback) {
    bcrypt.hash(password, salt, function (error, hash) {
        callback(error, hash);
    });
};

module.exports = {
    setHashDifficulty : setHashDifficulty,
    generateSalt : generateSalt,
    getHash : getHash
};

