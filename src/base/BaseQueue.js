
class BaseQueue {

    constructor(queueURL) {
        this.queueURL = queueURL;
    }

    sendToQueue() { }

    setQueueName(queueName) { this.queueName = queueName; }
};


module.exports = BaseQueue;