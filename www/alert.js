//function Sync() {
//}
//
//Sync.prototype.findByMessage = function (message, type, successCallback, errorCallback) {
//   switch(type){
//       
//   }
//    cordova.exec(successCallback, errorCallback);
//};
//
//Sync.prototype.findByCEP();
//
//
//Sync.install = function () {
//    if (!window.plugins) {
//        window.plugins = {};
//    }
//
//    window.plugins.progiroSyncTDK = new Toast();
//    return window.plugins.progiroSyncTDK;
//};
//
//cordova.addConstructor(Sync.install);
module.exports = {
    alert: function (title, message, buttonLabel, successCallback) {
        cordova.exec(successCallback,
                null, // No failure callback
                "Alert",
                "alert",
                [title, message, buttonLabel]);
    }
};