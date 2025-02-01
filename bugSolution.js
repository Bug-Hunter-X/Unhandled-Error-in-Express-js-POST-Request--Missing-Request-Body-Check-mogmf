const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  let users = [];
  if (!req.body) {
    return res.status(400).json({ error: 'Request body is missing' });
  }
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: 'User created', user: newUser });
});
app.listen(3000, () => console.log('Server listening on port 3000'));