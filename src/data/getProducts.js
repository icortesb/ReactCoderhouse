import { collection, getDocs } from "firebase/firestore";
import db from "../db/db.js";


const collectionName = collection(db, "products");

export const getProducts = async () => {
    try {
        const dataDB = await getDocs(collectionName);
        const data = dataDB.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);         
    }
};

