let expect = require('chai').expect;
let QueueProxy = require('../src/proxy/QueueProxy');

describe('QueueProxy Class', () => {

    describe('createQueueInstance function', () => {

        it('should return SQS instance when given a SQS as a queue type', () => {
            let queueProxy = new QueueProxy('SQS', 'MyQueue');
            let sqsInstance = queueProxy.createQueueInstance();
            expect(sqsInstance).to.be.not.null;
        });


        it('should return null when given a wrong queueType', () => {
            let queueProxy = new QueueProxy('ABC', 'MyQueue');
            let sqsInstance = queueProxy.createQueueInstance();
            expect(sqsInstance).to.be.null;
        });

    });
    
});