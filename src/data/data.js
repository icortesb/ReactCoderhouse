const products = [
    {
        id: 1,
        name: "Remera Blanca",
        description: "Remera de algodón blanca",
        img: "https://via.placeholder.com/150",
        stock: 10,
        price: 500,
        category: "remeras"
    },
    {
        id: 2,
        name: "Remera Negra",
        description: "Remera de algodón negra",
        img: "https://via.placeholder.com/150",
        stock: 10,
        price: 500,
        category: "remeras"
    },
    {
        id: 3,
        name: "Pantalón Azul",
        description: "Pantalón de jean azul",
        img: "https://via.placeholder.com/150",
        stock: 10,
        price: 1500,
        category: "pantalones"
    },
    {
        id: 4,
        name: "Pantalón Negro",
        description: "Pantalón de jean negro",
        img: "https://via.placeholder.com/150",
        stock: 10,
        price: 1500,
        category: "pantalones"
    },
    {
        id: 5,
        name: "Campera Roja",
        description: "Campera de abrigo roja",
        img: "https://via.placeholder.com/150",
        stock: 5,
        price: 2500,
        category: "camperas"
    },
    {
        id: 6,
        name: "Campera Negra",
        description: "Campera de abrigo negra",
        img: "https://via.placeholder.com/150",
        stock: 5,
        price: 2500,
        category: "camperas"
    },
    {
        id: 7,
        name: "zapatillas Blancas",
        description: "zapatillas deportivas blancas",
        img: "https://via.placeholder.com/150",
        stock: 20,
        price: 3000,
        category: "zapatillas"
    },
    {
        id: 8,
        name: "zapatillas Negras",
        description: "zapatillas deportivas negras",
        img: "https://via.placeholder.com/150",
        stock: 20,
        price: 3000,
        category: "zapatillas"
    },
    {
        id: 9,
        name: "Gorra Azul",
        description: "Gorra de algodón azul",
        img: "https://via.placeholder.com/150",
        stock: 15,
        price: 800,
        category: "gorras"
    }
];

const getProducts = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
            reject("No se pudo traer los productos");
        }, Math.random() * 1000);
    });
};

export {getProducts};
