const getProducts = async () => {
    const response = await fetch("https://course-api.com/react-store-products");
    const data = await response.json();
    return data;
}

export { getProducts }
