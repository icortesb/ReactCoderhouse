const products = [
    {
        id: 1,
        name: "Remera Blanca",
        description: "Remera de algodón blanca",
        img: "https://via.placeholder.com/150",
        stock: 10,
        price: 500,
        category: "Remeras"
    },
    {
        id: 2,
        name: "Remera Negra",
        description: "Remera de algodón negra",
        img: "https://via.placeholder.com/150",
        stock: 10,
        price: 500,
        category: "Remeras"
    },
    {
        id: 3,
        name: "Pantalón Azul",
        description: "Pantalón de jean azul",
        img: "https://via.placeholder.com/150",
        stock: 10,
        price: 1500,
        category: "Pantalones"
    },
    {
        id: 4,
        name: "Pantalón Negro",
        description: "Pantalón de jean negro",
        img: "https://via.placeholder.com/150",
        stock: 10,
        price: 1500,
        category: "Pantalones"
    },
    {
        id: 5,
        name: "Campera Roja",
        description: "Campera de abrigo roja",
        img: "https://via.placeholder.com/150",
        stock: 5,
        price: 2500,
        category: "Camperas"
    },
    {
        id: 6,
        name: "Campera Negra",
        description: "Campera de abrigo negra",
        img: "https://via.placeholder.com/150",
        stock: 5,
        price: 2500,
        category: "Camperas"
    },
    {
        id: 7,
        name: "Zapatillas Blancas",
        description: "Zapatillas deportivas blancas",
        img: "https://via.placeholder.com/150",
        stock: 20,
        price: 3000,
        category: "Zapatillas"
    },
    {
        id: 8,
        name: "Zapatillas Negras",
        description: "Zapatillas deportivas negras",
        img: "https://via.placeholder.com/150",
        stock: 20,
        price: 3000,
        category: "Zapatillas"
    },
    {
        id: 9,
        name: "Gorra Azul",
        description: "Gorra de algodón azul",
        img: "https://via.placeholder.com/150",
        stock: 15,
        price: 800,
        category: "Gorras"
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
