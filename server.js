const io = require('socket.io')();
const port = 8000;

io.on('connection', (client) => {
    console.log('emitting events to client...');
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    })
});

io.listen(port);
console.log('listening on localhost:', port);
