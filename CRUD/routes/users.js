import express from "express";
const router = express.Router()
import { getUsers,createUser, deleteUser, UpdateUser, getUser} from "../controllers/user.js";


router.get("/", getUsers);


// createUser
router.post('/',createUser)

// getUser
router.get('/:id', getUser)

// Delete router
router.delete('/:id', deleteUser)


// Update the user
router.patch('/:id', UpdateUser)

export default router