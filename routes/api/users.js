const { getById, create, update, deleteUserById, } = require('../../models/user.model');

const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
        const [result] = await db.query(`SELECT * FROM audiovisual_production.users`);
        console.log(result)
        res.json(result)
    } catch (error) {
        res.json({ 'fatal': error.message })
    }
})

router.get ('/:userID', async (req, res) => {
    try {
        let id = Number(req.params.id); 

        const [result] = await getById(req.params.userID)
        res.json(result)
    } catch (error) {
        res.json({ 'fatal': error.message })
    }
})

router.post ('/', async (req, res) => {
    try {
        const [result] = await create(req.body)
        res.json (result)
    }
    catch (error) {
        res.json({ 'fatal': error.message })
    }
})

router.put ('/update/:id', async (req, res) => {
    try {
        const [result] = await update(Number(req.params.id), req.body)
        const [result_final] = await getById(Number(req.params.id)); 
        res.json(result_final);
    
    } catch (error) {
        res.json({'fatal': error.message})
        
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const [result] = await deleteUserById(Number(req.params.id));
        res.json(result)
    }
    catch (error) {
        res.json({ 'fatal': error.message });
    }
})

/*router.get('/users/:role', (req, res) => { 
    cont role = req.params.role; 
    try {
        const [result] = await getByRole(req.params.userID)
        res.json(result)
    } catch (error) {
        res.json({ 'fatal': error.message })
    }
})*/


module.exports = router;
