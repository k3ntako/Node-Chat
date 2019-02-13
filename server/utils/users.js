class Users {
  constructor(){
    this.users = []
  }

  addUser(id, name, room){
    let user = {id, name, room}
    this.users.push(user);
    return user;
  }

  removeUser(id){
    let user;

    for(let i = 0; i < this.users.length; i++){
      if (this.users[i].id === id) {
        user = this.users.splice(i, 1)[0];
      }
    }

    return user
  }

  getUser(id){
    return this.users.filter(user => user.id === id)[0];
  }

  getUserList(room){
    let users = this.users.filter(user => user.room === room);
    return users.map(user => user.name);
  }
}


module.exports = { Users };
