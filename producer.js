'use strict';

import QueueProxy from './src/proxy/QueueProxy';
import QueueManager from './src/queues/QueueManager';

module.exports.handler = async (event, context, callback) => {

    var response = {
        "statusCode": 200,
        "headers": {
            "application/json": ""
        },
        "body": JSON.stringify("Send the message to Queue successful"),
    };

    let queueManager = new QueueManager(event.header, event.body);
    let queueDetail = queueManager.mappingQueue();

    if (queueDetail) {
        let message = queueDetail.Content;
        let queueProxy = new QueueProxy(queueDetail.QueueType, queueDetail.QueueName);
        let queue = queueProxy.createQueueInstance();
        try {
            let result = await queue.sendToQueue(message);
            if (result.messageId) {
                response.body += " MessageId is : " + result.messageId;
            } else {
                response.body = JSON.stringify("Cannot send the message to Queue.");
            }
        } catch (error) {
            response.statusCode = 500;
            response.body = JSON.stringify(error);
        }

        return { body: JSON.stringify(response) };

    } else {
        response.body = JSON.stringify("Incorrect providor !!!");
        return { body: JSON.stringify(response) };
    }
};