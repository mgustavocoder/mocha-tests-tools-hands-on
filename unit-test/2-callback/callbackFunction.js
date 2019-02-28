module.exports = function callbackFunction(callback) {
    setTimeout(() => { 
        callback('success');
    }, 1000);
}