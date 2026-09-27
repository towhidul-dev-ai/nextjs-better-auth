import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:3000"
})


export const { signIn, signUp, signOut, useSession } = createAuthClient();


// /**
//  * sign up: register: create account : first time user
//  * sign in : log in : already have account :  repeated user
//  * sign out : log out
//  */

// import { createAuthClient } from "better-auth/react";

// export const {
//   signIn,
//   signUp,
//   signOut,
//   useSession,
// } = createAuthClient({
//   baseURL: "http://localhost:3000",
// });