import QueueFactory from '../factory/QueueFactory';

class QueueProxy {

    constructor(queueType, queueName) {
        this.queueName = queueName;
        this.queueType = queueType;
    }

    createQueueInstance() {
        if (!this.queue) {
            this.queue = new QueueFactory(this.queueName).getQueueInstance(this.queueType);
            if (this.queue) {
                this.queue.setQueueName(this.queueName);
            }
        }

        return this.queue;
    }

    sendToQueue(messageObj) {
        this.queue.sendToQueue(messageObj);
    }
};

module.exports = QueueProxy;