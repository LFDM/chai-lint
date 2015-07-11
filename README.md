Allows to bypass [chai](https://github.com/chaijs/chai)'s property assertions, which make linters unhappy (confer https://github.com/eslint/eslint/issues/2102).

Provides the following functions, which is the appropriate property
getters under the hood:

- beOk
- beTrue
- beFalse
- beNull
- beUndefined
- beEmpty
- beArguments
- toExist


Use them like this:

```
expect(object).toExist();
expect(array).to.beEmpty();
```

Sinon assertions are also supported, for example:


```
expect(spy).to.have.beenCalled();
```

