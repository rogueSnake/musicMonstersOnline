var configurationData = {
    tileSize : 32
},
    get = function (propertyName) {
        return configurationData[propertyName];
    }

module.exports={
    get : get
}
