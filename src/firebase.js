import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKNEPNYjgwxEBy55xqUQnmjuOGNYx2KNQ",
  authDomain: "rustic-roots.firebaseapp.com",
  projectId: "rustic-roots",
  storageBucket: "rustic-roots.appspot.com",
  messagingSenderId: "1031858156050",
  appId: "1:1031858156050:web:a1ae7ec20e0ed1fa119ecb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

// Get products
async function getProducts(category) {
  const productsArr = [];
  const q = query(
    collection(db, "products"),
    where("metadata.Category", "==", category)
  );
  const querySnapshot = await getDocs(q);

  await Promise.all(
    querySnapshot.docs.map(async (doc) => {
      const priceQuery = collection(db, "products", doc.id, "prices");
      const priceSnapshot = await getDocs(priceQuery);

      const prices = priceSnapshot.docs.map((priceDoc) => priceDoc.data());
      const priceId = priceSnapshot.docs.map((priceDoc) => priceDoc.id);
      const productData = doc.data();

      const productObj = {
        name: productData.name,
        size: productData.metadata.Size,
        price: prices.length > 0 ? prices[0].unit_amount / 100 : null, // Divide by 100 to convert to currency's decimal places
        description: productData.description,
        image: productData.images ? productData.images[0] : null,
        priceId: priceId[0],
      };

      productsArr.push(productObj);
    })
  );
  return productsArr;
}

export { auth, app, db, getProducts };
