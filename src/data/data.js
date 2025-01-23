const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

const products = [
    {
        id: generateUUID(),
        category: "almohadones",
        name: "Almohadon Gusano de arena Beetlejuice (1 Metro de largo) LICENCIA OFICIAL",
        description:
            "Medidas: 90 cm de alto x 42 cm de ancho. (Sin estirar)\nMaterial: Microfibra elastizada, relleno de Vellón siliconado.",
        price: 39000,
        stock: 10,
        imgPreview: "/images/products/almohadones/almohadon-gusano-Beetlejuice.webp",
        imgDetail: "/images/products/almohadones/almohadon-gusano-Beetlejuice-dorso.webp",
    },
    {
        id: generateUUID(),
        category: "almohadones",
        name: "Almohadon El Exorcista Edicion Exclusiva NUEVO MODELO",
        description:
            "Relleno de vellon siliconado premium con funda de friselina\nFUNDA EXTRAIBLE PARA LAVAR DE TROPICAL MECANICO\nMedidas: 38 cm de alto x 30 cm de ancho (parte angosta) x 38 cm de ancho (puntas) x 18 cm de alto!",
        price: 10000,
        stock: 10,
        imgPreview: "/images/products/almohadones/almohadon-El-Exorcista.webp",
        imgDetail: "/images/products/almohadones/almohadon-negro-dorso.webp"
    },
    {
        id: generateUUID(),
        category: "almohadones",
        name: "Almohadon Leatherface 2 NUEVO MODELO",
        description: "Relleno de vellon siliconado premium con funda de friselina\nFUNDA EXTRAIBLE PARA LAVAR DE TROPICAL MECANICO\nMedidas: 38 cm de alto x 30 cm de ancho (parte angosta) x 38 cm de ancho (puntas) x 18 cm de alto!",
        price: 10000,
        stock: 10,
        imgPreview: "/images/products/almohadones/almohadon-Leatherface.webp",
        imgDetail: "/images/products/almohadones/almohadon-negro-dorso.webp"
    },
    {
        id: generateUUID(),
        category: "remeras",
        name:"Remera UNISEX House of 1000 Corpses",
        description:"Remera UNISEX House of 1000 Corpses",
        price: 38000,
        stock: 10,
        imgPreview: "/images/products/remeras/remera-House-of-1000-Corpses.webp",
        imgDetail: "/images/products/remeras/remera-House-of-1000-Corpses-dorso.webp"
    },
    {
        id: generateUUID(),
        category: "remeras",
        name: "Remera UNISEX The Texas Chainsaw Massacre",
        description: "Remera UNISEX The Texas Chainsaw Massacre",
        price: 38000,
        stock: 10,
        imgPreview: "/images/products/remeras/remera-The-Texas-Chainsaw-Massacre.webp",
        imgDetail: "/images/products/remeras/remera-The-Texas-Chainsaw-Massacre-dorso.webp"
    },
    {
        id: generateUUID(),
        category: "bustos",
        name: "Iron Studios Pennywise Deluxe Art Scale 1/10 (IT)",
        description: "Figura ORIGINAL Iron Studios Pennywise Deluxe Art Scale 1/10 (IT)\nIncluye base tematica, 2 cabezas intercambiables y 3 brazos intercambiables.\nBasado en las referencias originales de la película, esta estatua de polystone pintada a mano es de edición limitada",
        price: 450000,
        stock: 10,
        imgPreview: "/images/products/bustos/busto-Pennywise-Deluxe.webp",
        imgDetail: "/images/products/bustos/busto-Pennywise-Deluxe-dorso.webp"
    },
    {
        id: generateUUID(),
        category: "bustos",
        name: "Figura Iron Studios Minico Jason",
        description:"Figura Iron Studios Minico Jason\nLlega el amado villano del Viernes 13 obtiene su versión en MiniCo de Iron Studios.\nEl asesino de la máscara de hockey, el inmortal, la maldición de Jason… son algunos de los apodos de Jason el terrorífico y sanginario psicópata que llega a Iron Studios.\nAtormentando el campamento en Crystal Lake, con una saga de doce películas, libros, cómics, video juegos y coleccionables.",
        price: 87000,
        stock: 10,
        imgPreview: "/images/products/bustos/busto-Minico-Jason.webp",
        imgDetail: "/images/products/bustos/busto-Minico-Jason-dorso.webp"

    }
];

// const getProducts = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(products);
//             reject("No se pudo traer los productos");
//         }, Math.random() * 1000);
//     });
// };
 



export { getProducts };
