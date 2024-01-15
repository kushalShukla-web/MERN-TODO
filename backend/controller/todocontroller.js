const todomodel = require("../models/todomodels")
module.exports.gettodo = async (req,res)=>{
    const todo = await todomodel.find();
    console.log(todo);
    res.send(todo);
}
module.exports.saveToDo = async (req,res)=>{
    const {text} = req.body;
    console.log(text)
    todomodel.create({text})
    .then((data)=>{
        console.log("added successfully...");
        console.log(data);
        res.status(200).send(JSON.stringify(data));
    })
}

module.exports.dabbe = async (req,res) =>{
    const {id} = req.body;
    try {
        const deleteTo = await todomodel.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        console.log(deleteTo);
        res.status(200).json({ message: 'Todo deleted successfully', deleteTo });
        
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }

}
module.exports.update = async (req, res)=>{
    const {id} = req.body;
    try{
const updateTo = await todomodel.findByIdAndUpdate(id,req.body,{new:true});
if (!updateTo) {
    return res.status(404).json({ error: 'Data not found' });
  }
  res.json(updatedData);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
      }
}
