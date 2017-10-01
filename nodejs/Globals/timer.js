const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(40, 'foobar').then((value) => {
  // This is executed after about 40 milliseconds.
});