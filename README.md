# Node Advanced feature implementation example project

[![Build Status](https://travis-ci.org/GuanYangCLU/Unit-test-for-US-army-backend.svg?branch=master)](https://travis-ci.org/GuanYangCLU/Unit-test-for-US-army-backend)

[Travis Ci Official Site](https://travis-ci.org/)

Tags:
    - On-live: CI/CD, Unit test, Redis cache server, Rest API, Mongo, Mongoose
    - Comming Soon: Integration test, puppeteer, Google People(auth)
    - Maybe: Cypress, Enzyme(if include React)

### Features included:

- [x] Serving HTTP requests
- [x] Restful API for Enterprise Management web app
- [x] Persistance over MongoDB & mongoose
- [x] Seperate environment by prod, dev, and ci
- [ ] Log in and auth via JWT
- [ ] Auth with middleware such as Google People/Sign in
- [x] Caching over redis
- [ ] Best practice of handling errors
- [x] Unit test with Mocha
- [ ] Integration test with puppeteer
- [x] Continious Integration(CI/CD) with travis ci
- [x] Multi branch work flow via pull requests

### To run test, in root directory, run:

`npm test` or `mocha --exit`

### To change to your repo:

`git remote remove origin`

### Then can check by:

`git remote -v`

### Add to your repo:

`git remote add origin (Your git repo)`

### In config/dev.js created by your self, set your config like prod and ci with your mongoURI

### To install Redis, in terminal, run:

`brew install redis`

`brew services start redis`

### To test redis is running, in terminal, run:

`redis-cli ping`

- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) `Redis branch Add redis caching feature`
- ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `Archive Verion 0 with just CI and Unit test`
- ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `Caching Logic maybe check under delete scenario`

### Redis applied in:

`/routes/users` cleanCache: Create user, Edit user, Delete user

`/models/users` cache service: getUsers query
