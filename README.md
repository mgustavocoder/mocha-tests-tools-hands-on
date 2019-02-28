mocha ./unit-test/* ./int-test/*
mocha ./unit-test/* ./int-test/* --watch
nyc mocha ./unit-test/* ./int-test/*
nyc --reporter=lcov mocha ./unit-test/* ./int-test/*