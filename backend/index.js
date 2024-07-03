const express = require('express');
const { createTodo, updateTodo } = require('./types')
const { todo, todo } = require("./db")

const app = express();
app.use(express.json());


app.post("/todos", async function(req,res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "You have sent wrong inputs "
        });
        return;
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })

    res.status(201).json("Todo added successfully");
})


app.get("/todos",  async function(req,res) {
    const todo =  await todo.find();
    res.status(201).json(todo);
})



app.post("/completed",async function(req,res) {
    const completedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(req.body);

    if(!parsedPayload.success)
        {
            res.status(411).json({
                msg : "You have sent wrong inputs "
            });
            return;
        }
    
    await todo.update({
        _id : req.body.id
    }, {
        completed : true
    })

    res.json({
        msg : "Todo is completed"
    })

})

app.listen(3000);
