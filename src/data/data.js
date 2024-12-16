const products = [
    {
        id: 1,
        name: "albany sofa",
        image:
            "https://dl.airtable.com/.attachments/0a5a2e4e7c0b5f9b3f1c8e2b3d3f9c3e/0b6f7f7f/sofa1.png",
        price: 39.95,
        colors: ["red", "blue", "green"],
        company: "marcos",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget semper odio. Sed finibus, justo et placerat aliquet, justo odio.",
        category: "sofa",
        shipping: true,
    },
    {
        id: 2,
        name: "entertainment center",
        image:
            "https://dl.airtable.com/.attachments/3c8f7b3b3f8e4b8f4c3a3e6e5c8f3e7/7d1a7c9c/entertainment.png",
        price: 29.98,
        colors: ["red", "blue", "green"],
        company: "marcos",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget semper odio. Sed finibus, justo et placerat aliquet, justo odio.",
        category: "entertainment",
        shipping: true,
    },
    {
        id: 3,
        name: "albany sectional",
        image:
            "https://dl.airtable.com/.attachments/3c8f7b3b3f8e4b8f4c3a3e6e5c8f3e7/7d1a7c9c/entertainment.png",
        price: 10.99,
        colors: ["red", "blue", "green"],
        company: "marcos",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget semper odio. Sed finibus, justo et placerat aliquet, justo odio.",
        category: "sectional",
        shipping: true,
    },
    {
        id: 4,
        name: "leather sofa",
        image:
            "https://dl.airtable.com/.attachments/0a5a2e4e7c0b5f9b3f1c8e2b3d3f9c3e/0b6f7f7f/sofa1.png",
        price: 9.99,
        colors: ["red", "blue", "green"],
        company: "marcos",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget semper odio. Sed finibus, justo et placerat aliquet, justo odio.",
        category: "sofa",
        shipping: true,
    },
    {
        id: 5,
        name: "modern sofa",
        image:
            "https://dl.airtable.com/.attachments/0a5a2e4e7c0b5f9b3f1c8e2b3d3f9c3e/0b6f7f7f/sofa1.png",
        price: 9.99,
        colors: ["red", "blue", "green"],
        company: "marcos",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget semper odio. Sed finibus, justo et placerat aliquet, justo odio.",
        category: "sofa",
        shipping: true,
    },
]


const getProducts = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
            reject('No se pudo traer los productos');
        }, 2000);
    });
}

export { getProducts }
