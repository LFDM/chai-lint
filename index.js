module.exports = function chaiLint(chai, utils) {
    var methods = [
        'ok',
        'true',
        'false',
        'null',
        'undefined',
        'empty',
        'arguments'
    ];

    addMethods(methods);
    addMethod('exist', 'toExist');

    function addMethods(methods) {
        for (var i = methods.length - 1; i >= 0; i--) {
            var property = methods[i];
            var name = 'be' + property[0].toUpperCase() + property.slice(1);
            addMethod(methods[i], name);
        }
    }

    function addMethod(property, name) {
        chai.Assertion.addMethod(name, function() {
            var obj = utils.flag(this, 'object');
            new chai.Assertion(obj).to.be[property];
        });
    }
};
