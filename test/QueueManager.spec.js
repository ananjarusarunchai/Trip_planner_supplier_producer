let expect = require('chai').expect;
let QueueManager = require('../src/queues/QueueManager');

describe('QueueManager Class', () => {

    describe('mappingQueue function', () => {

        it('should return QueueType as a SQS and Trip-planner-Hotels-SQS for QueueName when given providerType = HOTELS and providerName = www.expedad.com/source/2187343h2613', () => {
            let event = {
                header: "application/json",
                body: {
                    "providerName": "www.expedad.com/source/2187343h2613",
                    "providerType": "HOTELS",
                    "message": "Hello world Hotel"
                }
            };
            let queuemanager = new QueueManager(event.header, event.body);
            let queueDetail = queuemanager.mappingQueue();
            const expectedResult = {
                "QueueType": "SQS",
                "QueueName": "Trip-planner-Hotels-SQS",
                "Content": { MessageBody: JSON.stringify(event.body) }
            };

            expect(queueDetail).to.be.eql(expectedResult);
        });

        it('should return empty object when given unsupported providerName = www.guruguru.com/source/2187343h2613 but providerType = HOTELS', () => {
            let event = {
                header: "application/json",
                body: {
                    "providerName": "www.guruguru.com/source/2187343h2613",
                    "providerType": "HOTELS",
                    "message": "Hello world Hotel"
                }
            };
            let queuemanager = new QueueManager(event.header, event.body);
            let queueDetail = queuemanager.mappingQueue();
            expect(queueDetail).to.be.eql({});
        });

        it('should return empty object when given unsupported providerType = HOTELUGARATI but providerName = www.expedad.com/source/2187343h2613', () => {
            let event = {
                header: "application/json",
                body: {
                    "providerName": "www.expedad.com/source/2187343h2613",
                    "providerType": "HOTELUGARATI",
                    "message": "Hello world Hotel"
                }
            };
            let queuemanager = new QueueManager(event.header, event.body);
            let queueDetail = queuemanager.mappingQueue();
            expect(queueDetail).to.be.eql({});
        });

    });

    describe('_isHotelProvider function', () => {

        it('should return true when given supported providerType = HOTELS and providerName = www.expedad.com/source/2187343h2613', () => {
            let event = {
                header: "application/json",
                body: {
                    "providerName": "www.expedad.com/source/2187343h2613",
                    "providerType": "HOTELS",
                    "message": "Hello world Hotel"
                }
            };
            let queuemanager = new QueueManager(event.header, event.body);
            let _isHotelProvider = queuemanager._isHotelProvider("www.expedad.com/source/2187343h2613", "HOTELS");
            expect(_isHotelProvider).to.be.true;
        });

        it('should return false when given unsupported providerType = HOTELS123 and providerName = www.guruguruHotels.com/source/2187343h2613', () => {
            let event = {
                header: "application/json",
                body: {
                    "providerName": "www.expedad.com/source/2187343h2613",
                    "providerType": "HOTELS",
                    "message": "Hello world Hotel"
                }
            };
            let queuemanager = new QueueManager(event.header, event.body);
            let _isHotelProvider = queuemanager._isHotelProvider("www.guruguruHotels.com/source/2187343h2613", "HOTELS123");
            expect(_isHotelProvider).to.be.false;
        });

        it('should return false when given unsupported providerType = HOTELS123 and providerName = www.www.expedad.com/source/2187343h2613', () => {
            let event = {
                header: "application/json",
                body: {
                    "providerName": "www.expedad.com/source/2187343h2613",
                    "providerType": "HOTELS123",
                    "message": "Hello world Hotel"
                }
            };
            let queuemanager = new QueueManager(event.header, event.body);
            let _isHotelProvider = queuemanager._isHotelProvider("www.expedad.com/source/2187343h2613", "HOTELS123");
            expect(_isHotelProvider).to.be.false;
        });

        it('should return false when given unsupported providerType = HOTELS and providerName = www.gorugoruHotels.com/source/2187343h2613', () => {
            let event = {
                header: "application/json",
                body: {
                    "providerName": "www.gorugoruHotels.com/source/2187343h2613",
                    "providerType": "HOTELS",
                    "message": "Hello world Hotel"
                }
            };
            let queuemanager = new QueueManager(event.header, event.body);
            let _isHotelProvider = queuemanager._isHotelProvider("www.gorugoruHotels.com/source/2187343h2613", "HOTELS");
            expect(_isHotelProvider).to.be.false;
        });



    });


});