//  Start coding here

class Comment {
     constructor(id, content, createdBy, like) {
          this.id = id;
          this.content = content;
          this.createdBy = createdBy;
          this.like = like;
     }

     addLike(number) {
          this.like += number;
     }
}

class Facebook {
     constructor(groupList, pageList) {
          this.groupList = groupList;
          this.pageList = pageList;
     }

     addGroup(group) {
          this.groupList.push(group);
     }

     addPage(page) {
          this.pageList.push(page);
     }
}

class FacebookGroup {
     constructor(name) {
          this.name = name;
     }
}

class Notification {
     constructor(id) {
          this.id = id;
     }

     send() {
          // console.log(`Notification: ${comment-createdBy} has just commented on this post—${post-title}`);
     }
}


class PostList {
     constructor(posts) {
          this.posts = posts;
     }

     addPost() {
          console.log(this.posts);
     }

     sharePost() {
          console.log("You've shared post " +this.posts +" to your friend.");
     }
}

class Post extends PostList {
     constructor(id, title, content, comment) {
          super();
          this.id = id;
          this.title = title;
          this.content = content;
          this.comment = comment;
     }

     addComment() {
          this.posts += this.comment;
     }
}

class User extends PostList {
     constructor(id, name, email) {
          super();
          this.id = id;
          this.name = name;
          this.email = email;
     }
}

const jessica = new User(1,"Jessica","jess@mail.com");
jessica.posts = "!Jessica Post!";
jessica.addPost();
jessica.sharePost();

jessica.comment = "Jessica Comment";
jessica.addPost();

//ยังทำไม่ได้ค่ะ ขออนุญาตดูเฉลยเพื่อทำความเข้าใจแทนนะคะ