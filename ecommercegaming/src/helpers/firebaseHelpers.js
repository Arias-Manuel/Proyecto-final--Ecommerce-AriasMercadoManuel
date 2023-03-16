import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  where,
} from 'firebase/firestore/lite';
import db from '../db/config';


export const createItem = async (obj, nameCollection) => {
  const colRef = collection(db, nameCollection);
  const data = await addDoc(colRef, obj);
  return data.id;
};


export const updateItem = async (id, obj, nameCollection) => {
  const colRef = collection(db, nameCollection);
  await updateDoc(doc(colRef, id), obj);
};


export const getItems = async (nameCollection) => {
  const colRef = collection(db, nameCollection);
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
};



export const getItemsByCondition = async (
  key,
  condition,
  value,
  nameCollection
) => {
  const colRef = collection(db, nameCollection);
  const result = await getDocs(query(colRef, where(key, condition, value)));
  return getArrayFromCollection(result);
};

export const getItemById = async (id, nameCollection) => {
  const colRef = collection(db, nameCollection);
  const result = await getDoc(doc(colRef, id));
  return { ...result.data(), id: result.id };
};


export const deleteItem = async (id, nameCollection) => {
  const colRef = collection(db, nameCollection);
  await deleteDoc(doc(colRef, id));
};


const getArrayFromCollection = ( collection ) => {
  return collection.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};


export const uploadCollectionItems = async ( arrayProducts, nameCollection ) => {
  arrayProducts.forEach(async ( product ) => {
    await createItem( product, nameCollection );
  });
};