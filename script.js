
class Message {
    constructor(authorName, time, text) {
        this.authorName = authorName
        this.time = time;
        this.text = text;
    }
    toString() {
        return this.time + ' ' + this.authorName + ': ' + this.text;
    }
}
class Messenger {
    static messageHistory = []
    send(name, mes) {
        const time = new Date()
        const current = time.getHours() + ":" + time.getMinutes();
        const mesaj = new Message(name, current, mes)
        const text = mesaj.toString()
    
        Messenger.messageHistory.push(text);
        console.log(text);
    }
    show_history() {
        Messenger.messageHistory.forEach((item) => {
            console.log(item);
        })
    }
}

let messenger = new Messenger();
messenger.send('Nargiz', 'hello');
messenger.send('Xumar', 'hi');

messenger.show_history();