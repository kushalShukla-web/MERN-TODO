const {Router} = require("express");
const {gettodo, saveToDo,dabbe, update} = require("../controller/todocontroller")
const router = Router();
router.get('/',gettodo)
router.post('/save',saveToDo)
router.delete('/delete',dabbe)
router.put('/update',update)
module.exports = router;