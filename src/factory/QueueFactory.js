import SqsQueue from '../queues/SqsQueue';
import { QUEUE_URL } from '../constant/AppConstant';

class QueueFactory {

    constructor(queueName) {
        this.queueName = queueName;
    }

    getQueueInstance(queueType) {
        switch (queueType.toUpperCase()) {
            case "SQS":
                return new SqsQueue(QUEUE_URL + this.queueName);
            default:
                return null;
        }
    }
};


module.exports = QueueFactory;