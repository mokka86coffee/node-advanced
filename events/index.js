const EventsModule = require('events');

class AnyClass extends EventsModule {
    constructor(options) {
        super(options);

        this.on('start', (...args) => console.log(args));
        this.on('start', () => console.log(2));
    }
}

const any = new AnyClass();

any.emit('start', { a: 1, b: 2, c: 3 });
