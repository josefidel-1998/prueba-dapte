<template>
    <transition name="fade">
        <div class="w-screen h-screen fixed z-[1000] left-0 top-0 bg-[#00000046] flex items-center justify-center">
            <div class="md:w-1/2 w-11/12 gradiente py-4 m-auto text-black relative">
                <span @click="closeModal" class="absolute right-4 cursor-pointer"><Icon name="material-symbols-light:close-small-outline" size="2.5rem"></Icon></span>
                <p class="text-4xl pt-4">Usuario {{ userData.id }}</p>
                <h3 class='text-4xl my-4 px-2'>{{ userData.title }}</h3>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
    
   import type {Users} from '~/types/users';

   const {userData} = defineProps<{
       userData: Users
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