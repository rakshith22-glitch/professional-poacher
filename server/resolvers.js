import jwt from "jsonwebtoken";
import { secretKey } from "./auth.js";

let users = [];

const resolvers = {
  Mutation: {
    createUser: (_, { email, password, fullname, phonenumber }) => {
      const newUser = {
        id: String(users.length + 1),
        email,
        password,
        fullname,
        phonenumber,
      };
      users.push(newUser);
      return newUser;
    },

    checkUser: (_, { email, password }) => {
      // Find the user by email and password (replace with database query)
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!user) {
        throw new Error("User does not exist or invalid credentials");
      }

      // Generate an authentication token and include it in the response
      const token = jwt.sign({ email: user.email }, secretKey, {
        expiresIn: "1h",
      });

      return {
        token,
        user,
      };
    },

    updateUser: (_, { id, email, password, fullname, phonenumber }) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex === -1) {
        throw new Error("User not found");
      }
      const updatedUser = { ...users[userIndex] };
      if (email) updatedUser.email = email;
      if (password) updatedUser.password = password;
      if (fullname) updatedUser.fullname = fullname;
      if (phonenumber) updatedUser.phonenumber = phonenumber;

      users[userIndex] = updatedUser;
      return updatedUser;
    },
  },

  Query: {
    getAllUsers: () => {
      // Replace with actual logic to fetch users from a database
      return users;
    },
  },
};

export default resolvers;
