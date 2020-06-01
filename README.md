# TypeScript Generics Exmaples

## Description

This repo contains 3 examples of using TypeScript generics for better typing.

### `fetch-wrapper`

A wrapper around the [axios](https://github.com/axios/axios) `get` function. Uses generics to allow you to type-check expected return values.

### `get`

A simple implementation of the [lodash](https://github.com/lodash/lodash) `get` function. Uses generics to infer the parameter and return types.

### `with-error-handler`

A simple error handling function. It logs errors to the console and then rethrows them. Uses generics to ensure the return type matches the supplied handler's return type.
