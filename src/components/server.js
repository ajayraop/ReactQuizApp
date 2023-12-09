const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Enable CORS with specific origin
app.use(cors({
    origin: 'http://localhost:3000', // Replace with the actual origin of your React app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// Parse incoming request bodies as JSON
app.use(bodyParser.json());

// Example in-memory user database
const users = [
    { id: 1, email: 'ajayraop@gmail.com', password: 'deccan123' },
    { id: 2, email: 'sraopolsani@gmail.com', password: 'test123' },
];

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Simulate user authentication
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

// Start the server
const port = 3001; // You can use any available port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
