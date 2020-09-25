# Static Content Challenge
### Samantha Shepherd

## Viewing this site
You can view this live! Go here -> 

## Adding Content

To add new content, simply add a markdown file called index.md into the content directory. The url will depend on where you put the new file. e.g. a file in content/new/index.md will have a url of XXXX/new

Adding content to this repo will automatically kick off a new build of the site.
Adding content will NOT automatically add a link on the page to the new section

## Installation

Clone the [repository](https://gitlab.com/mm12seh1/static-content-challenge):

```bash
git clone git@gitlab.com:mm12seh1/static-content-challenge.git && cd static-content-challenge
```

Install all dependencies using Yarn:

```bash
yarn install
```

## Development
To run with nodemon use:

```bash
yarn cross-env NODE_ENV=production nodemon ./start.js
```

or

```bash
yarn start:watch
```

Or without hotloading using: 

```bash
yarn cross-env NODE_ENV=production node ./start.js
```

or

```bash
yarn start
```

And then you can access the site via http://localhost:8080/

## Tests

There are a few tests using Supertest and Jest; to run run the tests please use:

```bash
yarn cross-env NODE_ENV=test jest
```

or

```bash
yarn test
```

To help with testing I have used cross-env and react-config to create a config file that determines the filepath of the directories in the endpoint
