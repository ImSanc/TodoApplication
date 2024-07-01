const express = require('express');
const { createTodo, updateTodo } = require('./types')

const app = express();
app.use(express.json());


app.post("/todos", function(req,res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "You have sent wrong inputs "
        });
        return;
    }
})


app.get("/todos", function(req,res) {
    
})


app.post("/completed", function(req,res) {
    const completedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(req.body);

    if(!parsedPayload)
        {
            res.status(411).json({
                msg : "You have sent wrong inputs "
            });
            return;
        }
        }
})
