# retvaljs

Simple class that represents either a success or failure.

## Installing / Running

`yarn add @corollarium/retvaljs`

### Node.JS:

    const Retval = require('@corollarium/retvaljs');

## API

### `constructor(status -> Bool, message -> String, ...data)`

Builds a `Retval` object with the following properties:

  - `retvalObj.status = status`
  - `retvalObj.message = message`
  - for `data`:
    - if is a single object then merge it with the `Retval` object
    - else if is a single value then `retvalObj.data = data[0]`
    - else if has any value then `retvalObj.data = data`

### `throws() -> Error`

Throws an exception, with `retval.message` as the message, if `retval.status === false`.

### `static success(message -> String, ...data -> ) -> Retval`

Equivalent to `new Retval(true, 'message', ...data)`

### `static error(message -> String, ...data -> ) -> Retval`

Equivalent to `new Retval(false, 'message', ...data)`

## Examples

[See the tests.](test.js)

## Tests

`yarn run test`

`yarn run lint`

## License

[The MIT License](LICENSE)