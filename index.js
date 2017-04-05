module.exports = function chaiLint(chai, utils) {
    var standardMethods = [
        'ok',
        'true',
        'false',
        'null',
        'undefined',
        'empty',
        'arguments',
        'NaN'
    ];

    var sinonMethods = [
        'called',
        'calledOnce',
        'calledTwice',
        'calledThrice',
        'calledWithNew',
    ];

    addMethods(standardMethods, 'be');
    addMethods(sinonMethods, 'been');
    addMethod('exist', 'toExist');

    function addMethods(methods, prefix) {
        for (var i = methods.length - 1; i >= 0; i--) {
            var property = methods[i];
            var name = prefix + property[0].toUpperCase() + property.slice(1);
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
