import { feathers } from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import axios from 'axios';
import authentication from '@feathersjs/authentication-client';

const isBrowser = typeof window !== 'undefined';

const feathersClient = feathers();

// REST client configuration
const restClient = rest('http://localhost:3030'); // Replace with your FeathersJS backend URL
feathersClient.configure(restClient.axios(axios));

// Configure authentication
feathersClient.configure(
  authentication({
    storage: isBrowser ? window.localStorage : undefined, // Use localStorage on the client
  })
);
const users=feathersClient.service('users')
export {users}
export default feathersClient;
