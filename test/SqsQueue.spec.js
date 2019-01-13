let expect = require('chai').expect;
let SqsQueue = require('../src/queues/SqsQueue');

describe('SqsQueue Class', () => {

    describe('sendToQueue function', () => {

        it('should return messageId as null when given params without MessageBody', () => {
            let sqsQueue = new SqsQueue('ABC', 'MyQueue');
            let result = sqsQueue.sendToQueue({"QueueUrl": "www.amazon.jungle/12345/Queue"});
            expect(result.messageId).to.be.null;
        });

        
        it('should return messageId as null when given params without QueueUrl', () => {
            let sqsQueue = new SqsQueue('ABC', 'MyQueue');
            let result = sqsQueue.sendToQueue({"MessageBody": "Hello World"});
            expect(result.messageId).to.be.null;
        });

    });
    
});