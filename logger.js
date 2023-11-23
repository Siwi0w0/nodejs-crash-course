const EventEmitter = require('events');
const uuid = require('uuid');

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log(`Called Listner`, data));

logger.log('Hello Node.js');

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg });
    }
}

module.exports = Logger;