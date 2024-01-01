import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const app = express();

// Generate a random secret key
const secretKey = crypto.randomBytes(32).toString('hex');

// Middleware to decode and verify JWT token
const authenticateToken = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (authToken) {
    const token = authToken.split(' ')[1]; // Extract the token part from Authorization header

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        // Handle token verification failure
        return res.sendStatus(403); // Forbidden status code
      }

      req.user = decoded; // Set the decoded user information to request object
      next(); // Move to the next middleware or route handler
    });
  } else {
    res.sendStatus(401); // Unauthorized status code if token is not present
  }
};

app.use(express.json());

app.post('/login', (req, res) => {
  // Your login logic here
  // Generate token upon successful login
  const user = { /* User data */ };
  const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

  // Send the token to the client
  res.json({ token });
});

// Protected route example
app.get('/protected', authenticateToken, (req, res) => {
  // If the token is valid, req.user will contain the decoded user information
  res.json({ message: 'Protected route accessed successfully', user: req.user });
});

// Other routes and ApolloServer setup (if applicable)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
