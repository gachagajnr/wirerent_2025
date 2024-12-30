import { feathers } from "@feathersjs/feathers";
import rest from "@feathersjs/rest-client";
import axios from "axios";
import authentication from "@feathersjs/authentication-client";

const createFeathersClient = () => {
  const app = feathers();

  // Use Axios for both server-side and client-side requests
  const restClient = rest("http://localhost:3030");
  app.configure(restClient.axios(axios));

  return app;
};

const feathersClient = createFeathersClient();
feathersClient.configure(authentication());


export const users = feathersClient.service('users');
 
export default feathersClient;

 
