class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  printSeatNumber() {
    console.log('The seats have not been set');
  }
}

class Meeting {
  constructor(users) {
    const presenter = users[0];
    presenter
    this.getPresenterName = presenter.getName;
    this.setUserSeats(users);
  }
  setUserSeats(users) {
    for (var i = 0; i < users.length; i++) {
      users[i].printSeatNumber = () => {
        console.log(i);
      }
    }
  }
}

const users = [new User('Jeni'), new User('Dan'), new User('Carol')];
const meeting = new Meeting(users);

// Broken results
console.log(meeting.getPresenterName()); // undefined (expected ‘Jeni’)
users[0].printSeatNumber(); // 3 (expected 0)
users[1].printSeatNumber(); // 3 (expected 1)
users[2].printSeatNumber(); // 3 (expected 2)