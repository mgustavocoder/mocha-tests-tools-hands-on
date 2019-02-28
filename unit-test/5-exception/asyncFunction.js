module.exports = function asyncFunction() {
    return new Promise((resolve, reject) => {
        return reject('error');
    })
}