import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  login,
} from "../controllers/Users.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.post("/loginpage", login);
// router.patch('/users/:id', verifyUser, adminOnly, updateUser);
// router.delete("/users/:id", verifyUser, adminOnly, deleteUser);
router.delete("/users/:id", deleteUser);

export default router;
