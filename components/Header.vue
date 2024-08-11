<template>
    <header class="header">
        <search v-if="fullPath.path == '/users'">
            <input 
            class="bg-white border-white border-3 rounded-xl focus:border-blue-200 min-w-80 text-black"
            type="search" 
            placeholder="Usuarios" 
            @input="filterUsers(filterInput)"
            v-model="filterInput"
             />
        </search>

        <search v-else-if="fullPath.path == '/products'">
            <input 
            class="bg-white border-white border-3 rounded-xl focus:border-blue-200 min-w-80 text-black"
            type="search" 
            placeholder="Productos" 
            @input="filterProducts(filterInput)"
            v-model="filterInput"
             />
        </search>

        <div class="text-center">
            <div @click="flag = !flag" class="flex flex-col justify-center items-center cursor-pointer relative">
                <Icon name="material-symbols:account-circle" size="2rem" color="white" />
                <p class="flex ">
                    {{ user.name }} <span><Icon name="material-symbols:arrow-drop-down" size="1.5rem" color="white"/></span>
                </p>
            </div>
            <div class="bg-white p-2 flex flex-col justify-stretch gap-y-1  absolute 2xl:right-[17%] xl:right-[12%] md:right-[10%] right-[0%] top-[7.5%]" v-if="flag">
                <button class="text-md hover:text-blue-400 ease-in duration-200 px-8  text-blue-600">Mi cuenta</button>
                <button @click="logout" class="text-md hover:text-blue-400 ease-in duration-200 px-8  text-blue-600">Cerrar Sesión</button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
    import type {Data} from '~/types/login';
    import type {Products} from '~/types/products';
    import type {Users} from '~/types/users';

    import useUsers from '~/composables/useUsers';
    import useProducts from '~/composables/useProducts';
    import useAuth from "~/composables/useAuth"

    const {logout} = useAuth()
    const {filterProducts} = useProducts();
    const {filterUsers} = useUsers();



    const filterInput = ref<string>("");

    const flag = ref<boolean>(false);

    const {currentRoute: fullPath} = useRouter();
    const user = useCookie<Data>('data_user');

</script>
