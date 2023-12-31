import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const app = express();

// Generate a random secret key
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

const secretKey = generateSecretKey();

// Function to generate JWT token
const generateAuthToken = (user) => {
  console.log(user);
  return jwt.sign(user, secretKey, { expiresIn: '1h' }); // Adjust expiration time as needed
};

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: ({ req }) => {
    // Include the user (if authenticated) and token generation function in the context for use in resolvers
    const authToken = req.headers.authorization;
    if (authToken) {
      try {
        const decoded = jwt.verify(authToken.split(' ')[1], secretKey);
        return { user: decoded, generateAuthToken };
      } catch (error) {
        throw new Error('Invalid token');
      }
    }
    return { user: null, generateAuthToken };
  }
  
});


// Middleware for authToken verification is embedded within the ApolloServer setup

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};

startApolloServer().then(() => {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    
  });
});
