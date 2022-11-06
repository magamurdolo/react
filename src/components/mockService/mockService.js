//Simulador Back-End

import products from "../data/products";

export default function getItemsFromAPI () {
    return new Promise ((resolve) => {
        setTimeout (()=>{
            resolve(products);
        }, 2000);
    });
}

export function getSingleItemFromAPI (idParams) {
    return new Promise ((resolve, reject) => {
        setTimeout (()=>{
            let itemRequested = products.find(
                (item) => item.id === parseInt(idParams));

            if (itemRequested){
                resolve(itemRequested);}
            else {
                reject (new Error ("El item no existe."))}
        }, 2000);
    });
}

export function getItemsFromAPIByCategory (categoryid) {
    return new Promise ((resolve) => {
        setTimeout (()=>{
            let itemsRequested = products.filter (item => item.category === categoryid)
            resolve(itemsRequested);
        }, 2000);
    });
}