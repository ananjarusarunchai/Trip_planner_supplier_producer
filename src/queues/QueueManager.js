import { HOTEL_SQS_NAME } from '../constant/AppConstant';

class QueueManager {

    constructor(header, body) {
        this.body = body;
        if(typeof this.body === "string") this.body = JSON.parse(body);
        this.providerName = this.body.providerName;
        this.providerType = this.body.providerType;
    };


    mappingQueue() {
        if (this._isHotelProvider(this.providerName, this.providerType)) {
            let content = this.body;
            return {
                "QueueType": "SQS",
                "QueueName": HOTEL_SQS_NAME,
                "Content": { MessageBody: JSON.stringify(content) } 
            };
        }

        return {}
    }

    _isHotelProvider(providerName, providerType) {

        let hotelProvider = [
            "www.booker.com/source/21873682613",
            "www.expedad.com/source/2187343h2613",
            "www.agogo.com/source/328873682613"]; // Should retrieve from DB in real world.

        return hotelProvider.indexOf(providerName) > -1 && providerType.toUpperCase() === 'HOTELS';
    };
}

module.exports = QueueManager;