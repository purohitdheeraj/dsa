class User {
	constructor(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}
}

class Meetings {
	constructor(users) {
		const userName = users[0];
		// userName
		this.getUserName = userName.getName.bind(userName);
	}
}

// const users = [new User("Ram"),new User("Sita Ram")];
// const meeting = new Meetings(users);

const users = [
	new User("Ram"),
	new User("Shyam"),
	new User("Jagannath"),
];
const meeting = new Meetings(users);

console.log("user name", meeting.getUserName());
