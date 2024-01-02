import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server endpoint
});

const authLink = setContext((_, { headers }) => {
  // Get the authToken from localStorage or any secure storage
  const authToken = localStorage.getItem('authToken');
  console.log('Request headers:', headers);

  return {
    headers: {
      ...headers,
      Authorization: authToken ? `Bearer ${authToken}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
