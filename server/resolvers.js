// For simplicity, you can use a dummy array to represent user data.
// In a real application, you'd interact with a database.
let users = [];

const resolvers = {
  Mutation: {
    createUser: (_, { email, password, fullname, phonenumber }) => {
      const newUser = {
        id: String(users.length + 1),
        email,
        fullname,
        phonenumber,
        password
      };
      users.push(newUser);
      return newUser;
    },
    
      checkUser: (_, { email, password }) => {
        // Find the user by email and password (replace with database query)
        const user = users.find((user) => user.email === email && user.password === password);
  
        if (!user) {
          throw new Error('User does not exist or invalid credentials');
        }
  
        return user;
      },
      // Implement other mutations if needed
  },
};

export default resolvers
