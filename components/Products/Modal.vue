<template>
    <transition name="fade">
        <div class="w-screen h-screen fixed z-[1000] left-0 top-0 bg-[#00000046] flex items-center justify-center">
            <div class="md:w-1/2 w-11/12 gradiente p-4 m-auto text-black relative">
                <span @click="closeModal" class="absolute right-4 cursor-pointer"><Icon name="material-symbols-light:close-small-outline" size="2.5rem"></Icon></span>
                <h3 class="text-4xl pt-8">Nombre de la bicicleta {{ productsData.name }}</h3>
                <h4 class='text-3xl my-4 px-2'>Compañia {{ productsData.company[0] }}</h4>
                <h5 class='text-2xl my-4 px-2'>Ciudad de la compañia {{ productsData.location.city }}</h5>
                <h5 class='text-2xl my-4 px-2'>Pais de la compañia {{ productsData.location.country }}</h5>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
    
   import type {Products} from '~/types/products';

   const {productsData} = defineProps<{
       productsData: Products
   }>()

   const emit = defineEmits<{
    (event: 'closeModal'): void
   }>()

   const closeModal = ():void => {
      emit('closeModal')
   }
</script>

<style scoped>
    .gradiente{
        background: rgb(226,224,208);
        background: linear-gradient(49deg, rgba(226,224,208,1) 33%, rgba(207,211,200,1) 75%);
    }
</style>

