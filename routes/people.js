const express = require('express');
const router = express.Router();
let data = require('../data');

router.get('/', (req, res) => {
    res.status(200).send(data);
})

router.get('/:peopleId', (req, res) => {
    const peopleId = req.params.peopleId;
    const personFound = data.filter((person) => {
        return person.id === Number(peopleId);
    })

    res.status(200).send(personFound);
})

router.put('/:peopleId', (req, res) => {
    const peopleId = req.params.peopleId;
    const changedData = req.body;
    data = data.map((people) => {
        if (people.id === Number(peopleId)) {
            return changedData;
        }

        return people;
    })

    res.send(changedData);
})

router.post('/', (req, res) => {
    const newData = req.body;
    data.push(newData);

    res.send(newData);
})

router.delete('/:peopleId', (req, res) => {
    const peopleId = req.params.peopleId;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === Number(peopleId)) {
            data.splice(i, 1);
            var deletedItem = data[i];
        }
    }

    res.send(data);
})


module.exports = router;
