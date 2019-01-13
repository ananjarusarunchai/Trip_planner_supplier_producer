var AWS = require('aws-sdk');
var Promise = require("bluebird");
import { REGION } from '../constant/AppConstant';
import BaseQueue from '../base/BaseQueue';

class SqsQueue extends BaseQueue {

    constructor(queueURL) {
        super(queueURL);
        this.queueInstance = new AWS.SQS({ region: REGION });
    }


    sendToQueue(messageObj) {
        let self = this;
        let result = { messageId: null };
        if (!messageObj.hasOwnProperty('MessageBody') || !messageObj.hasOwnProperty('QueueUrl')) return result;
        
        return new Promise(function (resolve, reject) {
            self.queueInstance.sendMessage(messageObj, function (err, data) {
                if (err) {
                    console.log('error:', "failed to send message" + err);
                    result.error = err;
                    reject(result);
                } else {
                    console.log('ok:', "the messageId is" + data.MessageId);
                    result.messageId = data.MessageId;
                    resolve(result);
                }
            });
        });
    }

};

module.exports = SqsQueue;