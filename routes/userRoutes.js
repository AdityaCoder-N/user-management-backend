const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


// Path to your db.json file
const dbFilePath = path.join(__dirname, '..', 'db.json');

// Function to read the JSON file
const readDB = () => {
    return JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'));
};

// Function to write to the JSON file
const writeDB = (data) => {
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), 'utf-8');
};

// **Get all users**
router.get('/', (req, res) => {
    const data = readDB();
    res.json(data.users);
});

// **Get user by ID**
router.get('/:id', (req, res) => {
    const data = readDB();
    const user = data.users.find((u) => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

// **Add new user**
router.post('/', (req, res) => {
    const data = readDB();
    const newUser = {  id: uuidv4(), ...req.body, createdAt:Date.now(), updatedAt:Date.now() };
    data.users.push(newUser);
    writeDB(data);
    res.status(201).json(newUser);
});

// **Update user by ID**
router.put('/:id', (req, res) => {
    const data = readDB();
    const userIndex = data.users.findIndex((u) => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    data.users[userIndex] = { ...data.users[userIndex], ...req.body };
    writeDB(data);
    res.json(data.users[userIndex]);
});

// **Delete user by ID**
router.delete('/:id', (req, res) => {
    const data = readDB();
    const userIndex = data.users.findIndex((u) => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    data.users.splice(userIndex, 1);
    writeDB(data);
    res.json({ message: 'User deleted' });
});

module.exports = router;
