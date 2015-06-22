var database = require("./database.js"),
    server = require("./server.js"),
    player = require("./player.js"),
    //map = require("./map.js"),
    turnCount = 0,
    broadcastTurn = function () {
        server.io.emit("newTurn", turnCount);
        turnCount += 1;
    };

setInterval(broadcastTurn, 5000);

server.io.on("connection", function (socket) {
    var profile;

    socket.on('makePlayer', function (name, salt, hash) {
        database.addPlayer(player.makeNew(name, salt, hash));
    });

    socket.on('requestSalt', function (name) {
        database.getPlayer(name, function (error, player) {
            server.io.emit('broadcastSalt', player.passwordManager.getSalt());
        });
    });

    socket.on('confirmHash', function (name, hash) {
        database.getPlayer(name, function (error, player) {

            if (error) {
                console.log(error);
            }

            else if (hash === player.passwordManager.getHash()) {
                // This is when the player has logged in, should interact with
                // chat, etc.
                profile = player;
                server.io.emit('hashAccepted', player);
            }

            else {
                server.io.emit('hashDenied');
            }
        });
    });

    socket.on("makeMove", function (direction) {
        currentPlayer.addOrder(direction);
        console.log(direction);
    });

    socket.on("requestGrid", function () {
        database.getGrid(function (grid) {
            server.io.emit("broadcastGrid", grid);
        });
    });

    socket.on("requestChange", function (position) {
        database.changeGrid(position);
        server.io.emit("broadcastChange", position);
    });
});



