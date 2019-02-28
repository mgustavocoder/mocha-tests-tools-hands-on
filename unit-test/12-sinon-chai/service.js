const business = require('./lib/business')

module.exports = function service(a, b) {
    console.log(business);
    const c = business.logicA(a, b);
    return business.logicB(a, c);
}