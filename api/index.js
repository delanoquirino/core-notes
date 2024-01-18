import express from "express"
import userTasks from "./routes/tasks.js"
import cors from "cors"

const app = express()

app.use(express.json()) 
app.use(cors()) 

app.use("/", userTasks) 

app.listen(8800)
