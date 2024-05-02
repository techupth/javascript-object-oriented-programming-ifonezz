class Notification { 
     constructor(notificationId, createdTime, content, receiver) {
          this.notificationId = notificationId;
          this.createdTime = createdTime;
          this.content = content;
          this.receiver = receiver;
     }

     send() {
          console.log(`Notification has been sent to ${this.receiver}`);
     }
}

class EmailNotification extends Notification {
     constructor(notificationId, createdTime, content, receiver) {
          super(notificationId, createdTime, content, receiver);
     }
 }

class SMSNotification extends Notification {
     constructor(notificationId, createdTime, content, receiver) {
          super(notificationId, createdTime, content, receiver);
     }
}

const emailNoti = new EmailNotification("1111",new Date().getDate(),"Hello","ft.thanawan@gmail.com");
emailNoti.send();

const smsNoti = new SMSNotification("1111",new Date().getDate(),"Hello","0892019921");
smsNoti.send();