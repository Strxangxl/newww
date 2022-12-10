import bcrypt from "bcrypt";

const users = [
	{
		name: 'Admin User',
		email: 'admin@gmail.com',
		password: bcrypt.hashSync('12345', 10),
		isAdmin: true
	},
	{
		name: 'Test User',
		email: 'test@gmail.com',
		password: bcrypt.hashSync('12345', 10),
	},
	{
		name: 'John User',
		email: 'john@gmail.com',
		password: bcrypt.hashSync('12345', 10),
	},
]

export default users;