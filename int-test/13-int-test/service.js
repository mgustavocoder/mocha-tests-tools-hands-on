const business = require('./lib/business')

module.exports = function service(a, b) {
    const c = business.logicA(a, b);
    return business.logicB(a, c);
}