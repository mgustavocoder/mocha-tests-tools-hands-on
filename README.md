# Node Unit Test Hands On
* Testing structure - Mocha
* Assertions - Chai
* Mocks - Proxyquire
* Spy - Sinon
* Assertions - Sinon-Chai
* Http Interceptor - Nock
* code coverage - NYC


# Running commands
* mocha ./unit-test/* ./int-test/*
* mocha ./unit-test/* ./int-test/* --watch
* nyc mocha ./unit-test/* ./int-test/*
* nyc --reporter=lcov mocha ./unit-test/* ./int-test/*