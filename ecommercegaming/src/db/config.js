import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

//solo para update de productos
import { arrayProducts } from '../assets/data/products';
import { uploadCollectionItems } from '../helpers/firebaseHelpers';

const firebaseConfig = {
  apiKey: "AIzaSyAknSAsuMamWn1hQZKC0KJ4a2ag7ZVqIYQ",
  authDomain: "ecommerce-gaming-5dcbd.firebaseapp.com",
  projectId: "ecommerce-gaming-5dcbd",
  storageBucket: "ecommerce-gaming-5dcbd.appspot.com",
  messagingSenderId: "485933898864",
  appId: "1:485933898864:web:a4c069ab50b3fbc5f5a8b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

//Correr por única vez cuando aún no he subido los productos a mi colección.
if (false) {
  setTimeout(() => {
    uploadCollectionItems(arrayProducts, 'products');
  }, 4000);
}
