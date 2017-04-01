# Artifactor Models

[![Greenkeeper badge](https://badges.greenkeeper.io/kristianmandrup/artifactor-models.svg?token=eb1fe56bae1c11863f193fd8618bb0a774cc83f098aead456e12d4726960dd22)](https://greenkeeper.io/)

This *Artifactor Models* contains the base models and fakers used by 
the [Artifactor Adapters](https://github.com/kristianmandrup/artifactor-adapters)

### Install

`npm i artifactor-models --save`

## Development environment

Please see the `docs` folder, in particular `docs/env-setup/library-dev.md` 
which describes the full development environment, how it was configured etc.

### Run Test or Test suite

`npm test`

Write tests using either:
- [ava](https://github.com/ava/ava)
- or [mocha-test-dsl](https://www.npmjs.com/package/mocha-test-dsl) if you prefer using [mocha]

Note that Ava can use `spec` syntax via [ava-spec]()

- Ava testing framework: [ava](https://github.com/ava/ava)
- BDD: [ava-spec](https://www.npmjs.com/package/ava-spec)
- test doubles: [testdouble.js]()

### Models

The models are defined in `src/models`. We currently have the following domain models:

- `Artefact`
- `User`
- `Organisation`
- ???

The [artifactor-payments]() repo/module will introduce/add the `Account` model.

We need a way to store which artifacts are used with which other artifacts and how often they are used in combination, in order to suggest popular artifacts for each artifact (like typical Amazon/Netflix shopping/browsing experience).

### Faker schemas

To simulate a database full of artefacts we are using [faker.js](https://github.com/kristianmandrup/Faker.js/) via [json schema faker](json-schema-faker.js.org).

The faker generate fake data based on the schema definitions and faker data generators. We use the fake data to also populate the adapter data stores to test real usage scenarios.

See `faker/decorate/schemas` for the faker schemas:

```js
const schema = {
  type: 'object',
  required: [
    'name',
    'author',
    'version',
    'location',
    'status',
    'type',
    'keywords'
  ],
  properties: {
    name: {
      faker: 'random.word'
    },
    description: {
      faker: 'lorem.paragraph'
    },
    // more ....
  }
}
```

## License

MIT