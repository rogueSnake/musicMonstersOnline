
var accountManager = require('../accountManager.js');

describe('accountManager', function () {

    it('should generate a salt', function (done) {
        accountManager.generateSalt(function (error, salt) {
           expect(typeof salt).toBe("string");
           done();
        });
    });

    it('should generate a hash from a password and a salt', function (done) {
        accountManager.generateSalt(function (error, salt) {

            if (error) {
                return console.log(error);
            }
            accountManager.getHash('passw0rd', salt, function (error, hash) {

                if (error) {
                    return console.log(error);
                }
                expect(typeof hash).toBe("string");
                console.log(salt);
                console.log(hash);
                done();
            });
        });
    });
});

