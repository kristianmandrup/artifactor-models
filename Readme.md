# Artifactor Models

This *Artifactor Models* contains the base models and fakers used by 
the [Artifactor Adapters](https://github.com/kristianmandrup/artifactor-adapters)

### Install

`npm i artifactor-models --save`

### Build
TODO: Webpack

`npm run build` - builds `/src` folder and puts resulting ES5 `.js` files in `/dist`

### Auto build
TODO: Webpack

`npm run watch` - builds `/src` and watches for changes to `/src` files for auto-build!

### Run
TODO: Webpack

- `$ npm start` or `$ npm koa` - start the server

### Troubleshooting

If you still get an error, try removing the `dist` folder:

`rm -r dist`

Then recompile via `build` or `watch` task and start server again.

### Run Test or Test suite

`npm test`

Using [mocha-test-dsl](https://www.npmjs.com/package/mocha-test-dsl) for writing tests.

### Models

The models are defined in `src/models`. We currently have the following domain models:

- `Artefact`
- `User`
- `Organisation`
- ???

The [artifactor-payments]() will introduce `Account`.

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