const request = require('sync-request');

class TelegramBot {
    // https://api.telegram.org/bot${this.token}/getUpdates
    constructor(token) {
        this.token = token;
        this.url = `https://api.telegram.org/bot${this.token}/getUpdates`;
        this.command = [];
        this.oldsave;
    }
    request(url) {
        const rs = request('GET', url);
        return rs.getBody().toString('utf-8');
    }
    getUpdates() {
        const rs = request('GET', this.url);
        return rs.getBody().toString('utf-8');
    }
    getMe() {
        var link = `https://api.telegram.org/bot${this.token}/getMe`
        const rs = request('GET', link);
        return rs.getBody().toString('utf-8');
    }
    sendText(chatID, data) {
        var link = `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${chatID}&text=${data}&charset=utf-8`;
        const out = request('GET', link);
    }
    sendPhoto(chatID, url) {
        var link = `https://api.telegram.org/bot${this.token}/sendPhoto?chat_id=${chatID}&photo=${url}`;
        const out = request('GET', link);
    }
    sendAudio(chatID, url) {
        var link = `https://api.telegram.org/bot${this.token}/sendAudio?chat_id=${chatID}&audio=${url}`;
        const out = request('GET', link);
    }
    sendVideo(chatID, url) {
        var link = `https://api.telegram.org/bot${this.token}/sendAudio?chat_id=${chatID}&video=${url}`;
        const out = request('GET', link);
    }
    sendLocation(chatID, latitude, longitude) {
        var link = `https://api.telegram.org/bot${this.token}/sendLocation?chat_id=${chatID}&latitude=${latitude}&longitude=${longitude}`;
        const out = request('GET', link);
    }
    sendContact(chatID, phone_number, first_name, last_name) {
        var link = `https://api.telegram.org/bot${this.token}/sendContact?chat_id=${chatID}&phone_number=${phone_number}&first_name=${first_name}&last_name=${last_name}`;
        const out = request('GET', link);
    }
    register(conditions, execution = (message, user) => { }) {
        this.command.push({ "conditions": conditions, "execution": execution });
    }
    oldsave() {
        var stat = JSON.parse(this.getUpdates());
        var stand = stat.result[stat.result.length - 1];
        this.oldsave = stand.update_id;
    }
    listen() {
        setInterval(() => {
            var stat = JSON.parse(this.request(this.url + `?offset=${this.oldsave}`));
            var stand = stat.result[stat.result.length - 1];

            if (stand.update_id == this.oldsave) {

            } else {
                console.log(`COMMAND EXECUTE`);
                for (var i = 0; i < this.command.length; i++) {
                    var text = stand.message.text.split(' ');
                    var command = this.command[i];
                    if (text[0] == command.conditions) {
                        var message = stand.message.text;
                        var user = {
                            "id": 5225903550,
                            "first_name": "PinBib",
                            "username": "nekto2202",
                        }
                        command.execution(message, user);
                    }
                }
                this.oldsave = stand.update_id;
            }
        }, 16.6);
    }
}
module.exports = TelegramBot;