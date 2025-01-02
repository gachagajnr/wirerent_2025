import { Authenticator, AuthorizationError } from "remix-auth";
import { GoogleStrategy } from "remix-auth-google";
import { sessionStorage } from "./session.server";
import { FormStrategy } from "remix-auth-form";
import { connectToDatabase } from "./db.server";
import bcrypt from "bcrypt";

export interface User {
  id: string;
  name: string;
  email: string;
  website?: string;
  phone?: string;
  avatar?: string;
}

// Create an instance of the Authenticator
export const authenticator = new Authenticator(sessionStorage);

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
      website: "",
      phone: "",
      email: "",
    };
  }
);

export { googleStrategy };

const formStrategy = new FormStrategy(async ({ form }) => {
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  // const data = { email: email, password: password };
  const { db } = await connectToDatabase();
  const userInDatabase = await db.collection("users").findOne({ email: email });

  if (!userInDatabase) {
    throw new AuthorizationError();
  }

  const passwordsMatch = await bcrypt.compare(
    password,
    userInDatabase.password as string
  );

  if (!passwordsMatch) {
    throw new AuthorizationError();
  }

  return userInDatabase;
});
authenticator.use(googleStrategy);
authenticator.use(formStrategy, "form");
