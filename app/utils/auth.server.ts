import { Authenticator } from "remix-auth";
import { GoogleStrategy } from "remix-auth-google";
import { sessionStorage } from "./session.server";

export interface User {
  id: string | number;
  name: string;
  avatar?: string;
}

// Create an instance of the Authenticator
export const authenticator = new Authenticator<User>(sessionStorage);

const requiredEnvVariables = [
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
  "GOOGLE_CALLBACK_URL",
];

for (const envVar of requiredEnvVariables) {
  if (!process.env[envVar]) {
    throw new Error(`Environment variable ${envVar} is not defined`);
  }
}

const googleStrategy = new GoogleStrategy(
  {
    callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  },
  async ({ profile }) => {
    const { id, displayName, photos } = profile;

    // Return a user object
    return {
      id,
      name: displayName,
      avatar: photos?.[0]?.value,
    };
  }
);

export { googleStrategy };

authenticator.use(googleStrategy);
// authenticator.use(formStrategy, "user-pass");
