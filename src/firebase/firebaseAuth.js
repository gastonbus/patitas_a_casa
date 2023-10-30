import { app } from "./firebaseInit";
import { getAuth } from "firebase/auth";

export const firebaseAuth = getAuth(app);