import { v4 as uuidv4 } from 'uuid';


let allUsers = []


// Get User
export const getUsers = (req, res) => {
    // console.log(allUsers)
    res.send(allUsers)
};


// Create User
export const createUser = (req, res) => {
    const user = req.body;

    const userID = uuidv4();

    allUsers.push({ id: userID, ...user })

    console.log(`User with ${user.firstName} added to the database!`)
}


// Get User
export const getUser = (req, res) => {
    // const id = req.params.id
    const { id } = req.params

    const foundUser = allUsers.find((user) => user.id == id)

    res.send(foundUser)
}


// Delete user
export const deleteUser = (req, res) => {
    const { id } = req.params;

    allUsers = allUsers.filter((user) => user.id !== id);

    res.send(`User with id ${id} deleteed from database.`)
}


// Update User
export const UpdateUser = (req, res) => {
    const { id, } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = allUsers.find((user) => user.id = id)

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with id ${id} updated from database.`)
}