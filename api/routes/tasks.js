import express from "express";
import {addTask, deleteTask, getTask, updateTask, updateTaskColor} from "../controllers/task.js"

const router = express.Router()

router.get("/", getTask)

router.post("/", addTask)

router.put("/:id", updateTask)

router.delete("/:id", deleteTask)

router.put('/tasks/:id/color', updateTaskColor);

export default router