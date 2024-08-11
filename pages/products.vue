<template>
    <section class="main__section">
        <h1 class="h1">Productos</h1>
        <template v-if="products.length === 0">
            <Loader />
        </template> 
        <template v-else>
            <div class="content__cards" v-if="registerProducts.length == 0">
                <ProductsCards v-for="product in products" :productsData="product" :key="product.id" @deleteProducts="deleteProducts"/>
            </div>
            <div class="content__cards" v-else>
                <ProductsCards v-for="product in registerProducts" :productsData="product" :key="product.id" @deleteProducts="deleteProducts"/>
            </div>
        </template>
    </section>
</template>

<script setup lang="ts">
    import useProducts from '~/composables/useProducts';
    import type {Products} from '~/types/products';
    const {getProducts} = useProducts();

    const products = useState<Products[]>('products');
    const registerProducts = useState<Products[]>('registerProducts')

    const deleteProducts = (id: string):void => {
        const index = products.value.findIndex((product:Products) => product.id == id);
        if(index !== -1){
            products.value.splice(index, 1)
        }
    }
    definePageMeta({
        layout: "custom",
        middleware: ["auth"]
    });
    useHead({
        title: 'Productos',
    });
    onMounted(() => {
        getProducts()
    })
</script>