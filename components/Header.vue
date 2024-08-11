<template>
    <header class="header">
        <div class="manu__burger fixed left-4 top-9" @click="flagMenu = !flagMenu">
                <Icon name="teenyicons:align-text-justify-outline" size="1.5rem" />
            </div>
        <div class="md:w-full  ms-auto flex justify-end relative flex-row sm:gap-x-16 gap-x-8 items-center">

            <search v-if="fullPath.path == '/users'">
                <input 
                class="md:min-w-20 sm:min-w-10 min-w-2 bg-white border-white border-3 rounded-xl focus:border-blue-200 text-black"
                type="search" 
                placeholder="Usuarios" 
                @input="filterUsers(filterInput)"
                v-model="filterInput"
                />
            </search>

            <search v-else-if="fullPath.path == '/products'">
                <input 
                class="md:min-w-20 sm:min-w-10 min-w-2 bg-white border-white border-3 rounded-xl focus:border-blue-200 text-black"
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
                <div class="btn__seccion__count" v-if="flag">
                    <button class="text-md hover:text-blue-400 ease-in duration-200 px-8 ">Mi cuenta</button>
                    <button @click="logout" class="text-md hover:text-blue-400 ease-in duration-200 px-8 ">Cerrar Sesión</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
    import type {Data} from '~/types/login';

    import useUsers from '~/composables/useUsers';
    import useProducts from '~/composables/useProducts';
    import useAuth from "~/composables/useAuth"

    const {logout} = useAuth()
    const {filterProducts} = useProducts();
    const {filterUsers} = useUsers();

    const flagMenu = useState<boolean>(('flagMenu'), () => false)

    const filterInput = ref<string>("");

    const flag = ref<boolean>(false);

    const {currentRoute: fullPath} = useRouter();
    const user = useCookie<Data>('data_user');

</script>

<style scoped>
    .manu__burger{
        display: none
    }
    @media screen and (width < 768px){
        .manu__burger{
            display: block;
        }
    }
</style>

