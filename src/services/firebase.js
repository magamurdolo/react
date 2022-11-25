import {
    initializeApp
} from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    addDoc,
    writeBatch,
    documentId,
    orderBy,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCf6v-IEtJB86I6l0SjLJfXSezVIHd-bPo",
    authDomain: "reactcoderhouse-a9e0e.firebaseapp.com",
    projectId: "reactcoderhouse-a9e0e",
    storageBucket: "reactcoderhouse-a9e0e.appspot.com",
    messagingSenderId: "484930648116",
    appId: "1:484930648116:web:3eb4f74dd1a9cc4cf3f261"
};

const FirebaseApp = initializeApp(firebaseConfig);

const DB = getFirestore(FirebaseApp);

export function testDatabase() {
    console.log(FirebaseApp);
}

export async function getSingleItemFromAPI(id) {
    try {
        const docRef = doc(DB, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                ...docSnap.data(),
                id: docSnap.id,
            };

        } else {
            throw new Error("El producto no existe");
        }
    } catch (error) {
        throw error;
    }
}

export async function getItemsFromAPI() {
    try {
        const collectionProducts = collection(DB, "products");
        const myQuery = query(collectionProducts, orderBy("position"));
        let respuesta = await getDocs(myQuery);

        const products = respuesta.docs.map((docu) => {
            return {
                ...docu.data(),
                id: docu.id,
            };
        });

        return products;
    } catch (error) {
        console.error(error);
    }
}

export async function getItemsFromAPIByCategory(categoryId) {
    const productsRef = collection(DB, "products");
    const myQuery = query(productsRef, where("category", "==", categoryId), orderBy("position"));

    const productsSnapshot = await getDocs(myQuery);

    const emptyArray = productsSnapshot.docs.length < 1;
    if (emptyArray) throw new Error ("Categoría sin resultados");

    const products = productsSnapshot.docs.map((docu) => {
        return {
            ...docu.data(),
            id: docu.id,
        };
    });
    return products;
}

export async function createBuyOrderFirestore(buyOrderData) {
    const collectionRef = collection(DB, "buyOrders");
    const docRef = await addDoc(collectionRef, buyOrderData);

    return docRef.id;
}

export async function createBuyOrderFirestoreWithStock(buyOrderData) {
    const collectionProductsRef = collection(DB, "products");
    const collectionOrdersRef = collection(DB, "buyorders");
    const batch = writeBatch(DB);

    let arrayIds = buyOrderData.items.map((item) => {
        return item.id;
    });
    const q = query(collectionProductsRef, where(documentId(), 'in', arrayIds));

    let productsSnapshot = await getDocs(q);
    productsSnapshot.docs.forEach((doc) => {
        let stockActual = doc.data().stock;
        let itemInCart = buyOrderData.items.find((item) => item.id === doc.id);
        let stockActualizado = stockActual - itemInCart.quantity;
        batch.update(doc.ref, {
            stock: stockActualizado
        });
    });
    const docOrderRef = doc(collectionOrdersRef);
    batch.set(docOrderRef, buyOrderData);
    batch.commit();

    return docOrderRef.id;
}

/*export async function exportItemsToFirestore() {
    
    const products = [
        {
            id: 1,
            position: 1,
            title: "Ankara",
            price: 100,
            stock: 50,
            category: "chico",
            img: "/img/ankara.webp",
            discount: 30,
            description: "Té negro orgánico con jengibre, canela, cardamomo, clavo y anís. Tamaño: 5 gramos.",
        },
        {
            id: 2,
            position: 2,
            title: "Ankara",
            price: 200,
            stock: 50,
            category: "mediano",
            img: "/img/ankara.webp",
            description: "Té negro orgánico con jengibre, canela, cardamomo, clavo y anís. Tamaño: 10 gramos.",
        },
        {
            id: 3,
            position: 3,
            title: "Ankara",
            price: 300,
            stock: 50,
            category: "grande",
            img: "/img/ankara.webp",
            description: "Té negro orgánico con jengibre, canela, cardamomo, clavo y anís. Tamaño: 20 gramos.",
        },
        {
            id: 4,
            position: 4,
            title: "Dublín",
            price: 100,
            stock: 50,
            category: "chico",
            img: "/img/dublin.webp",
            discount: 60,
            description: "Té verde orgánico con jengibre, caléndula y limón. Tamaño: 5 gramos.",
        },
        {
            id: 5,
            position: 5,
            title: "Dublín",
            price: 200,
            stock: 50,
            category: "mediano",
            img: "/img/dublin.webp",
            description: "Té verde orgánico con jengibre, caléndula y limón. Tamaño: 10 gramos.",
        },
        {
            id: 6,
            position: 6,
            title: "Dublín",
            price: 300,
            stock: 50,
            category: "grande",
            img: "/img/dublin.webp",
            description: "Té verde orgánico con jengibre, caléndula y limón. Tamaño: 20 gramos.",
        },
        {
            id: 7,
            position: 7,
            title: "Londres",
            price: 100,
            stock: 50,
            category: "chico",
            img: "/img/londres.webp",
            description: "Té negro orgánico con aroma a vainilla y canela. Tamaño: 5 gramos.",
        },
        {
            id: 8,
            position: 8,
            title: "Londres",
            price: 200,
            stock: 50,
            category: "mediano",
            img: "/img/londres.webp",
            description: "Té negro orgánico con aroma a vainilla y canela. Tamaño: 10 gramos.",
        },
        {
            id: 9,
            position: 9,
            title: "Londres",
            price: 300,
            stock: 50,
            category: "grande",
            img: "/img/londres.webp",
            description: "Té negro orgánico con aroma a vainilla y canela. Tamaño: 20 gramos.",
        },
        {
            id: 10,
            position: 10,
            title: "Moscú",
            price: 100,
            stock: 50,
            category: "chico",
            img: "/img/moscu.webp",
            description: "Té negro orgánico con frutos rojos y rosa mosqueta. Tamaño: 5 gramos.",
        },
        {
            id: 11,
            position: 11,
            title: "Moscú",
            price: 200,
            stock: 50,
            category: "mediano",
            img: "/img/moscu.webp",
            description: "Té negro orgánico con frutos rojos y rosa mosqueta. Tamaño: 10 gramos.",
        },
        {
            id: 12,
            position: 12,
            title: "Moscú",
            price: 300,
            stock: 50,
            category: "grande",
            img: "/img/moscu.webp",
            description: "Té negro orgánico con frutos rojos y rosa mosqueta. Tamaño: 20 gramos.",
        },
        {
            id: 13,
            position: 13,
            title: "Rabat",
            price: 100,
            stock: 50,
            category: "chico",
            img: "/img/rabat.webp",
            description: "Té verde orgánico con boldo, cedrón y miel. Tamaño: 5 gramos.",
        },
        {
            id: 14,
            position: 14,
            title: "Rabat",
            price: 200,
            stock: 50,
            category: "mediano",
            img: "/img/rabat.webp",
            description: "Té verde orgánico con boldo, cedrón y miel. Tamaño: 10 gramos.",
        },
        {
            id: 15,
            position: 15,
            title: "Rabat",
            price: 300,
            stock: 50,
            category: "grande",
            img: "/img/rabat.webp",
            description: "Té verde orgánico con boldo, cedrón y miel. Tamaño: 20 gramos.",
        },
        {
            id: 16,
            position: 16,
            title: "Varsovia",
            price: 100,
            stock: 50,
            category: "chico",
            img: "/img/varsovia.webp",
            description: "Té negro orgánico con manzana, miel e hibiscus. Tamaño: 5 gramos.",
        },
        {
            id: 17,
            position: 17,
            title: "Varsovia",
            price: 200,
            stock: 50,
            category: "mediano",
            img: "/img/varsovia.webp",
            description: "Té negro orgánico con manzana, miel e hibiscus. Tamaño: 10 gramos.",
        },
        {
            id: 18,
            position: 18,
            title: "Varsovia",
            price: 300,
            stock: 50,
            category: "grande",
            img: "/img/varsovia.webp",
            description: "Té negro orgánico con manzana, miel e hibiscus. Tamaño: 20 gramos.",
        },
        {
            id: 19,
            position: 19,
            title: "Wellington",
            price: 100,
            stock: 50,
            category: "chico",
            img: "/img/wellington.webp",
            description: "Té negro orgánico con flores de jazmín y naranja. Tamaño: 5 gramos.",
        },
        {
            id: 20,
            position: 20,
            title: "Wellington",
            price: 200,
            stock: 50,
            category: "mediano",
            img: "/img/wellington.webp",
            description: "Té negro orgánico con flores de jazmín y naranja. Tamaño: 10 gramos.",
        },
        {
            id: 21,
            position: 21,
            title: "Wellington",
            price: 300,
            stock: 50,
            category: "grande",
            img: "/img/wellington.webp",
            description: "Té negro orgánico con flores de jazmín y naranja. Tamaño: 20 gramos.",
        },
    ]
    
    const collectionRef = collection (DB, "products")
    for (let product of products){
        const docRef = await addDoc (collectionRef, product);
        console.log("document", docRef.id)
    }
}*/