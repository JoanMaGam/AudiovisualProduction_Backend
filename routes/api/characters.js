const router = require('express').Router();
const { getAll, getByName, getByShowId } = require('../../models/characters.model');

// GET Queries:

// Get all characters
router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

// Get character by name
router.get('/:characterName', async (req, res) => {
    try {
        const [result] = await getByName(req.params.characterName);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

// Get character by showId
router.get('/shows/:showId', async (req, res) => {
    try {
        const [result] = await getByShowId(req.params.showId);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

module.exports = router;