import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controller/taskController.js";

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;