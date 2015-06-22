var socket = require('./socketHandler.js');

var app = angular.module("app", []);

app.controller("appCtrl", function ($scope) {

    $scope.grid = [];

    socket.emit("requestGrid");
    socket.on("broadcastGrid", function (grid) {
        $scope.grid = grid;
        $scope.$apply();
    });

    $scope.logIn = function (name, password) {
        socket.emit('requestSalt', name);
        socket.on('broadcastSalt', function (salt) {
            accountManager.getHash(password, salt, function (error, hash) {
               socket.emit('confirmHash', name, hash);
            });
        });
    };

    $scope.tapSquare = function (column, row) {
        socket.emit("requestChange", {x: column, y: row});
    };

    socket.on("broadcastChange", function(position) {
        var row = position.y,
            column = position.x,
            setGrid = function (symbol) {
                $scope.grid[row][column] = symbol;
                $scope.$apply();
            };

        switch ($scope.grid[row][column]) {
            case "_" :
                setGrid("x");
                break;
            case "x" :
                setGrid("o");
                break;
            case "o" :
                setGrid("_");
                break;
        }
    });
});
