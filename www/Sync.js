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
console.log(PhoneGap);
var hello = function (name, win, fail) {
    PhoneGap.exec(win, fail, "HelloWorld", "hello", [name]);
}

// this is only for Android..for now
PhoneGap.addConstructor(function () {
    navigator.app.addService('HelloWorld', 'com.phonegap.plugin.HelloWorld');
})