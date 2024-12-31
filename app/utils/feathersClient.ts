import { feathers } from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import axios from 'axios';
import authenticationClient from '@feathersjs/authentication-client';

const feathersClient = feathers();

// Check if we're in the browser environment
const storage = typeof window !== 'undefined' 
  ? window.localStorage 
  : {
      getItem: () => null,
      setItem: () => null,
      removeItem: () => null
    };

// REST client configuration
const restClient = rest('http://localhost:3030'); // Replace with your FeathersJS backend URL
feathersClient.configure(restClient.axios(axios));

// Configure authentication
feathersClient.configure(authenticationClient({
  storage
}));

// Example service for users
const users = feathersClient.service('users');

export { users };
export default feathersClient;
