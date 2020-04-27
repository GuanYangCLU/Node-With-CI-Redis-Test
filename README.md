# Node Advanced feature implementation example project

[![Build Status](https://travis-ci.org/GuanYangCLU/Unit-test-for-US-army-backend.svg?branch=master)](https://travis-ci.org/GuanYangCLU/Unit-test-for-US-army-backend)

[Travis Ci Official Site](https://travis-ci.org/)

Tags:
    - On-live: CI/CD, Unit test, Rest API, Mongo, Mongoose
    - Comming Soon: Integration test, puppeteer, Redis cache server, Google People(auth)
    - Maybe: Cypress, Enzyme(if include React)

### Features included:

- [x] Serving HTTP requests
- [x] Restful API for Enterprise Management web app
- [x] Persistance over MongoDB & mongoose
- [x] Seperate environment by prod, dev, and ci
- [ ] Log in and auth via JWT
- [ ] Auth with middleware such as Google People/Sign in
- [ ] Caching over redis
- [ ] Best practice of handling errors
- [x] Unit test with Mocha
- [ ] Integration test with puppeteer
- [x] Continious Integration(CI/CD) with travis ci

### To run test, in root directory, run:

`npm test` or `mocha --exit`

### To change to your repo:

`git remote remove origin`

### Then can check by:

`git remote -v`

### Add to your repo:

`git remote add origin (Your git repo)`

### In config/dev.js created by your self, set your config like prod and ci with your mongoURI
