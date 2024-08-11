import type {Products} from '~/types/products'
export default(() => {
    const products = useState<Products[]>('products', () => []);
    const registerProducts = useState<Products[]>('registerProducts', () => [])

    const getProducts = async ():Promise<void> => {
        const data = await fetch('https://api.citybik.es/v2/networks');
        const jsonData = await data.json();
        products.value = jsonData.networks.filter((product: Products) => {
            return product.source?.length > 0
        });
    }

    const filterProducts = (filter: string):void => {
        console.log(filter)
        let filtro = products.value.filter((f:Products) => f.name.toLowerCase().startsWith(filter.toLowerCase()));
        console.log(filtro)
        registerProducts.value = filtro;
    }

    return {
        filterProducts,
        getProducts
    }
})