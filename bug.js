const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  // Assume 'users' is an in-memory array for simplicity
  let users = [];

  const newUser = req.body;
  //Error: Missing check for request body
  users.push(newUser);
  res.status(201).json({ message: 'User created', user: newUser });
});
app.listen(3000, () => console.log('Server listening on port 3000'));