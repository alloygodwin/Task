{
var emitter = require('events'),
    eventEmitter = new emitter.EventEmitter();
eventEmitter.on('data', function (result) { console.log('Im From Data'); });

eventEmitter.on('error', function (result) { console.log('Im Error'); });

require('http').createServer(function (req, res) {
    res.end('Responsed');
    var start = new Date().getTime();
    eventEmitter.emit('data', true);
    eventEmitter.emit('error', false);
    while(new Date().getTime() - start < 5000) {
        //Let me sleep
    }

    process.nextTick(function () {
        console.log('This is event loop');
    });
}).listen(8090);
console.log("node express app started at http://localhost:8090");
}