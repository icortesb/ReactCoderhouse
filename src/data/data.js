const products = [
    {
        id: 1,
        name: "Remera Blanca",
        description: "Remera de algodón blanca",
        imgPreview: "https://via.placeholder.com/150",
        imgDetail: "https://via.placeholder.com/800x400",
        stock: 10,
        price: 500,
        category: "remeras"
    },
    {
        id: 2,
        name: "Remera Negra",
        description: "Remera de algodón negra",
        imgPreview: "https://via.placeholder.com/150",
        imgDetail: "https://via.placeholder.com/800x400",
        stock: 10,
        price: 500,
        category: "remeras"
    },
    {
        id: 3,
        name: "Pantalón Azul",
        description: "Pantalón de jean azul",
        imgPreview: "https://via.placeholder.com/150",
        imgDetail: "https://via.placeholder.com/800x400",
        stock: 10,
        price: 1500,
        category: "pantalones"
    },
    {
        id: 4,
        name: "Pantalón Negro",
        description: "Pantalón de jean negro",
        imgPreview: "https://via.placeholder.com/150",
        imgDetail: "https://via.placeholder.com/800x400",
        stock: 10,
        price: 1500,
        category: "pantalones"
    },
    {
        id: 5,
        name: "Campera Roja",
        description: "Campera de abrigo roja",
        imgPreview: "https://via.placeholder.com/150",
        imgDetail: "https://via.placeholder.com/800x400",
        stock: 5,
        price: 2500,
        category: "camperas"
    },
    {
        id: 6,
        name: "Campera Negra",
        description: "Campera de abrigo negra",
        imgPreview: "https://via.placeholder.com/150",
        imgDetail: "https://via.placeholder.com/800x400",
        stock: 5,
        price: 2500,
        category: "camperas"
    },
    {
        id: 7,
        name: "zapatillas Blancas",
        description: "zapatillas deportivas blancas",
        imgPreview: "https://via.placeholder.com/150",
        imgDetail: "https://via.placeholder.com/800x400",
        stock: 20,
        price: 3000,
        category: "zapatillas"
    },
    {
        id: 8,
        name: "zapatillas Negras",
        description: "zapatillas deportivas negras",
        imgPreview: "https://via.placeholder.com/150",
        imgDetail: "https://via.placeholder.com/800x400",
        stock: 20,
        price: 3000,
        category: "zapatillas"
    },
    {
        id: 9,
        name: "Gorra Azul",
        description: "Gorra de algodón azul",
        imgPreview: "https://via.placeholder.com/150",
        imgDetail: "https://via.placeholder.com/800x400",
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

export { getProducts };
