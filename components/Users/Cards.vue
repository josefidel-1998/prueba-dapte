<template>
    <article class="w-full gradiente relative h-[200px] flex flex-col items-end">
        <div class="absolute right-2 top-2 ">
            <Icon @click="flag = !flag" class="cursor-pointer absolute right-2 top-2" name="ic:baseline-more-vert" size="1.2rem" color="white"></Icon>
            <template v-if="flag">
                <div class="bg-gray-400  text-white flex flex-col justify-stretch gap-y-1 absolute right-4 top-6">
                    <button @click="seeMore()" class="text-md hover:bg-blue-800 ease-in duration-200 px-8 ">Ver más</button>
                    <button @click="deleteUsers(userData.id)" class="text-md hover:bg-blue-800 ease-in duration-200 px-8 ">Eliminar</button>
                </div>
            </template>
        </div>
        <div class="w-full text-sm absolute bottom-2 left-2 text-start ">
            <h3 class="title-font text-xl font-medium">{{ userData.title }}</h3>
        </div>
        <div v-if="flagModal">
            <UsersModal @closeModal="seeMore" :userData="userData" />
        </div>
    </article>
</template>

<script setup lang="ts">
    import type {Users} from '~/types/users';

    let flag = ref<boolean>(false);
    let flagModal = ref<boolean>(false)

    const {userData} = defineProps<{
        userData: Users
    }>()

    const emit = defineEmits<{
        (event: 'deleteUser', value: number):void
    }>()

    const deleteUsers = (id: number):void => {
        emit('deleteUser', id)
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

<style scoped>
    .gradiente{
        background: rgb(226,224,208);
        background: linear-gradient(49deg, rgba(226,224,208,1) 33%, rgba(207,211,200,1) 75%);
    }
</style>