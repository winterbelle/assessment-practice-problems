### PRACTICE ASSESSMENT

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will run the test output once.

### Test watcher

If you'd like, you can have the tests run constantly. This means that each time you save your file, your tests will re-run. To do so, you can run the following:

```
npm run watch
```

Follow the on-screen prompts to exit out of the constant runner.

### Run file

If you want to manually test out your file, you can do so by running the following command.

```
node index.js
```

The output will be printed to your terminal.

## Assessment instructions

### Existing files

This repository contains the following files that you may need to edit or want to take a look at:

- `cities.js`: A list of the ten most populous cities in North America. This is the data that you can expect to be inserted into your function.
- `index.js`: This is where you will write your code. This is the only file you should need to edit. This file contains a variable, `exampleCities`, that contains all of the cities from the `cities.js` file. You may use this variable if you'd like to run the `index.js` file from your command line.
- `__tests__/index.test.js`: All of the tests for the functions.
- `__tests__/fixtures/alternate-cities.js`: Another array of cities that the tests will make use of, in addition to those cities from the `cities.js` file.

### Tasks

After getting this repository running on your current machine, you will then need to do the following for each function:

- [ ] Complete the function so that the tests pass.
- [ ] Add and commit your changes.
- [ ] Push your code up to GitHub.

Please add and commit regularly. You _should not_ end up with a single additional commit for this assessment.

### Function descriptions

You will find examples and descriptions in both the `index.js` file and in the `__tests__/index.test.js` file.