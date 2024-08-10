<template>
    <header class="header">
        <search v-if="fullPath.path == '/users'">
            <input 
            type="search" 
            placeholder="buscador" 
            class="bg-blue-800 border-white border-3 rounded-full focus:border-blue-200 min-w-80 text-white"
            v-model="filterInput"
            @input="filterUsers(filterInput)"
             />
        </search>

        <search v-else-if="fullPath.path == '/products'">
            <input 
            type="search" 
            placeholder="buscador" 
            class="bg-blue-800 border-white border-3 rounded-full focus:border-blue-200 min-w-80 text-white"
            v-model="filterInput"
            @input="filterProducts(filterInput)"
             />
        </search>

        <div class="text-center">
            <Icon name="material-symbols:account-circle" size="2rem" color="white" />
            <p>{{ user.name }}</p>
        </div>
    </header>
</template>

<script setup lang="ts">
    import type {Data} from '~/types/login';
    import type {Products} from '~/types/products';
    import type {Users} from '~/types/users';

    import useUsers from '~/composables/useUsers';
    import useProducts from '~/composables/useProducts';

    const {filterProducts} = useProducts();
    const {filterUsers} = useUsers();



    const filterInput = ref<string>("");

    const {currentRoute: fullPath} = useRouter();


    if(fullPath.value.path == '/products'){
        
    }else if(fullPath.value.path == '/users'){
        
    }


    const user = useCookie<Data>('data_user')
</script>