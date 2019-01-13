let expect = require('chai').expect;
let QueueFactory = require('../src/factory/QueueFactory');

describe('QueuFactory Class', () => {

    describe('getQueueInstance function', () => {

        it('should return SQS instance when given a SQS as a queue type', () => {
            let queueFactory = new QueueFactory('MyQueue');
            let sqsInstance = queueFactory.getQueueInstance('sqs');
            expect(sqsInstance).to.be.not.null;
        });

        it('should return null when given unsupported queue type', () => {
            let queueFactory = new QueueFactory('MyQueue');
            let sqsInstance = queueFactory.getQueueInstance('ABC');
            expect(sqsInstance).to.be.null;
        });
    });
    
});