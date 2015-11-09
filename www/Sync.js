function Sync(){}

Sync.prototype.findByMessage = function (message, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback);
};