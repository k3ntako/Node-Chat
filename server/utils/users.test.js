const expect = require('expect');
const { Users } = require('./users')

describe('Users', () => {
  let users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Cindy',
      room: 'Bowling'
    },{
      id: '2',
      name: 'Jesse',
      room: 'Mighty Speed Krush'
    },{
      id: '3',
      name: 'Kirsten',
      room: 'Bowling'
    },]
  })

  it('should add new user', () => {
    let users = new Users();

    let user = {
      id: '123',
      name: 'Kentaro',
      room: 'Javascript Group'
    }

    let resUser = users.addUser(user.id, user.name, user.room)

    expect(users.users).toEqual([user]);
  })

  it('should remove the user', () => {
    let removedUser = users.removeUser('1');
    expect(removedUser).toEqual({
      id: '1',
      name: 'Cindy',
      room: 'Bowling'
    })
    expect(users.users.length).toBe(2);
  })

  it('should not remove the user', () => {
    let removedUser = users.removeUser('4');
    expect(removedUser).toBeFalsy();
    expect(users.users.length).toBe(3);
  })

  it('should find user', () => {
    let removedUser = users.getUser('2');
    expect(removedUser).toEqual({
      id: '2',
      name: 'Jesse',
      room: 'Mighty Speed Krush'
    })
  })

  it('should not find user', () => {
    let removedUser = users.getUser('4');
    expect(removedUser).toBeFalsy();
  })

  it('should return names for bowling room', () => {
    let userList = users.getUserList('Bowling');

    expect(userList).toEqual(['Cindy', 'Kirsten']);
  })

  it('should return names for Mighty Speed Krush room', () => {
    let userList = users.getUserList('Mighty Speed Krush');

    expect(userList).toEqual(['Jesse']);
  })
})
