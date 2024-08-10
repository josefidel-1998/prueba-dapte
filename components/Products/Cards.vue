<template>
    <article class="w-full bg-blue-600 text-white rounded-xl relative py-4">
        <div class="absolute right-2 top-2">
            <Icon @click="flag = !flag" class="cursor-pointer absolute right-2 top-2" name="ic:baseline-more-vert" size="1.2rem" color="white"></Icon>
            <template v-if="flag">
                <div class="bg-gray-400 flex flex-col justify-stretch gap-y-1 rounded-xl absolute right-4 top-6">
                    <button @click="seeMore()" class="text-md hover:bg-blue-800 ease-in duration-200 px-8 rounded-t-xl">Ver más</button>
                    <button @click="deleteProducts(productsData.id)" class="text-md hover:bg-blue-800 ease-in duration-200 px-8 rounded-b-xl">Eliminar</button>
                </div>
            </template>
        </div>
        <div class="w-1/2 mx-auto text-sm flex flex-col justify-center items-center gap-y-8  py-4">
            <h3 class="title-font text-xl font-medium">{{ productsData.name }}</h3>
        </div>
        <div v-if="flagModal">
            <ProductsModal @closeModal="seeMore" :productsData="productsData" />
        </div>
    </article>
</template>

<script setup lang="ts">
    import type {Products} from '~/types/products';

    let flag = ref<boolean>(false);
    let flagModal = ref<boolean>(false)

    const {productsData} = defineProps<{
        productsData: Products
    }>()

    const emit = defineEmits<{
        (event: 'deleteProducts', value: string):void
    }>()

    const deleteProducts = (id: string):void => {
        emit('deleteProducts', id)
        flag.value = !flag.value;
    }

    const seeMore = ():void => {
        flag.value = false;
        flagModal.value = !flagModal.value;
    }
    onMounted(() => {
        window.addEventListener('keyup', e => {
            if(e.key == 'Escape'){
                flagModal.value = false
            }
        })
    })
</script>