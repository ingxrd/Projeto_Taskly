import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile} from "firebase/auth";
import {auth} from "./config";
import { signOut } from "firebase/auth";


export async function createUser(name, email, password) {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: name });
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
export async function signUpGoogle(){
    //indicar qual o provedor de login será usado
    const provider = new GoogleAuthProvider();
    //abre popup com o login do google
    await signInWithPopup(auth, provider)

}

export async function loginUser(email, password){
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user; // Retorne o usuário autenticado
  }
  
  export async function logout () {
    await signOut(auth);
}