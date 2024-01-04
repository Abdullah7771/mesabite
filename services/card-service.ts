import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
} from "firebase/storage";
import { db } from "./firebase-config";
import { CardData } from "../types";

export const getSpecificCategory = async (id: string, folderid: string) => {
  try {
    console.log(folderid);
    const storage = getStorage();

    const data: CardData[] = [];
    if (folderid=="undefined") {
      console.log('asd')
      const collectionRef = collection(db, "categories"); // Reference to the "folders" collection

      // const querySnapshot =  getDoc(collectionRef,id);

      const specific_doc = await getDoc(doc(collectionRef, id));
      const imgRef = ref(storage, `categories/${specific_doc.id}`);
      // console.log(imgRef)
      const downloadUrl = await getDownloadURL(imgRef);
      var cardData: CardData = {
        title: specific_doc.data()?.title,
        image: downloadUrl,
        description: specific_doc.data()?.description,
        quantity: specific_doc.data()?.quantity,
        imgName: specific_doc.data()?.imgName,
        id: specific_doc.id,
        folderid: specific_doc.ref.parent.id,
      };
      data.push(cardData);
      console.log(data)
      return data;
    }
    console.log('s')
    const collectionRef = collection(db, "folders");
    const getFolder = doc(collectionRef, folderid);

    const nestedCollectionRef = collection(getFolder, "categories");
    const specific_doc = await getDoc(doc(nestedCollectionRef, id));
    const imgRef = ref(storage, `images/${folderid}/${specific_doc.id}`);
    // console.log(imgRef)
    const downloadUrl = await getDownloadURL(imgRef);
    var cardData: CardData = {
      title: specific_doc.data()?.title,
      image: downloadUrl,
      description: specific_doc.data()?.description,
      quantity: specific_doc.data()?.quantity,
      imgName: specific_doc.data()?.imgName,
      id: specific_doc.id,
      folderid: specific_doc.ref.parent.id,
    };

    data.push(cardData);
    console.log(data)

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFolderCategories = async (folderid: string) => {
  try {
    console.log(folderid);
    const storage = getStorage();

    const collectionRef = collection(db, "folders");

    const data: CardData[] = [];
    if (!folderid) return false;
    const getFolder = doc(collectionRef, folderid);

    const nestedCollectionRef = collection(getFolder, "categories");
    const nestedQuerySnapshot = await getDocs(nestedCollectionRef);
    await Promise.all(
      nestedQuerySnapshot.docs.map(async (doc) => {
        const imgRef = ref(storage, `images/${folderid}/${doc.id}`);
        const downloadUrl = await getDownloadURL(imgRef);

        const cardData: CardData = {
          title: doc.data().title,
          image: downloadUrl,
          description: doc.data().description,
          quantity: doc.data().quantity,
          imgName: doc.data().imgName,
          id: doc.id,
          folderid: doc.ref.parent.id,
        };

        data.push(cardData);
      })
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async (): Promise<CardData[]> => {
  const storage = getStorage();
  try {
    const collectionRef = collection(db, "categories"); // Reference to the "folders" collection

    const querySnapshot = await getDocs(collectionRef);

    const data: any[] = [];
    await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        // console.log(doc.ref.parent.id)
        const imgRef = ref(storage, `categories/${doc.id}`);
        // console.log(imgRef)
        const downloadUrl = await getDownloadURL(imgRef);

        const cardData: CardData = {
          title: doc.data().title,
          image: downloadUrl,
          description: doc.data().description,
          quantity: doc.data().quantity,
          imgName: doc.data().imgName,
          id: doc.id,
          folderid: doc.ref.parent.id,
        };

        data.push(cardData);
      })
    );
    // console.log(data);
    return data;
  } catch (error) {
    // Handle errors, e.g., log them or throw a custom error
    console.error("Error fetching card data:", error);
    throw new Error("Failed to fetch card data");
  }
};

export const getAllFolders = async () => {
  const data: any = {};

  const collectionRef = collection(db, "folders");
  const querySnapshot = await getDocs(collectionRef);
  querySnapshot.docs.map((doc) => {
    data[doc.id] = doc.data().name;
  });
  console.log(data);
  return data;
};

export const addFolderCategories = async (
  data: CardData,
  folderid: string,
  folder?: boolean | string
) => {
  const { title, description, quantity, imgName } = data;

  const sendData = {
    title,
    description,
    quantity,
    imgName,
  };
  console.log(sendData);
  console.log(folder);

  try {
    if (folder == false) {
      const collectionRef = collection(db, "categories");
      const res = await addDoc(collectionRef, sendData);
      return res.id;
    }

    const collectionRef = collection(db, "folders");
    const getFolder = doc(collectionRef, folderid);

    const nestedCollectionRef = collection(getFolder, "categories");
    const addCat = await addDoc(nestedCollectionRef, sendData);
    await updateDoc(addCat, {
      id: addCat.id,
    });
    return addCat.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const addFolder = async (value: string) => {
  const collectionRef = collection(db, "folders");
  const res = await addDoc(collectionRef, { name: value });
  return res.id;
};

export const updateFolderCategories = async (
  data: CardData,
  folderid: string,
  folder?: boolean | string
): Promise<string> => {
  console.log(data);
  const { title, description, quantity, imgName, id } = data;

  const sendData = {
    title,
    description,
    quantity,
    imgName,
    id,
  };
  console.log(sendData, folderid);

  try {
    if (folder == false) {
      const collectionRef = collection(db, "categories");
      const upDoc = doc(collectionRef, id);
      const res = await updateDoc(upDoc, sendData);
      return "Updated Category";
    }
    const collectionRef = collection(db, "folders");
    const data: any[] = [];
    const getFolder = doc(collectionRef, folderid);
    const nestedCollectionRef = collection(getFolder, "categories");

    const upDoc = doc(nestedCollectionRef, id);
    console.log(upDoc);
    const res = await updateDoc(upDoc, sendData);
    console.log(res + " : updated");
    return "";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return "";
};

export const delCategories = async (
  id: string,
  folder?: boolean,
  folderid?: string
) => {
  console.log(folder);
  const storage = getStorage();
  if (folder == false) {
    try {
      const collectionRef = collection(db, "categories");
      await deleteDoc(doc(collectionRef, id));
      const desertRef = ref(storage, `categories/${id}`);
      deleteObject(desertRef)
        .then(() => {
          console.log("deleted");
        })
        .catch((error) => {
          console.log(error);
        });
      return "Deleted";
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const collectionRef = collection(db, "folders");
    const getFolder = doc(collectionRef, folderid);
    const nestedCollectionRef = collection(getFolder, "categories");

    await deleteDoc(doc(nestedCollectionRef, id));
    const desertRef = ref(storage, `images/${folderid}/${id}`);
    deleteObject(desertRef)
      .then(() => {
        console.log("deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.log(err);
  }
};

export const editFolder = async (folderid: string, value: string) => {
  const collectionRef = collection(db, "folders"); // Reference to the "folders" collection
  const docRef = doc(collectionRef, folderid);
  await updateDoc(docRef, {
    name: value,
  });
};

export const delFolder = async (folderid: string) => {
  const storage = getStorage();
  try {
    const collectionRef = collection(db, "folders");
    const getFolder = doc(collectionRef, folderid);
    console.log(getFolder);
    const nestedCollectionRef = collection(getFolder, "categories");
    const querySnapshot = await getDocs(nestedCollectionRef);

    querySnapshot.docs.map(async (doc) => {
      console.log(doc);

      const desertRef = ref(storage, `images/${folderid}/${doc.id}`);
      deleteObject(desertRef)
        .then(() => {
          console.log("deleted");
        })
        .catch((error) => {
          console.log(error);
        });
      await deleteDoc(doc.ref);
    });
    await deleteDoc(doc(collectionRef, folderid));

    // return data;
  } catch (err) {
    console.log(err);
  }

  // Delete the file
};
