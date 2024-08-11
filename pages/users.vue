<template>
    <section class="main__section">
        <h1 class="h1">Usuarios</h1>
        <template v-if="users.length === 0">
            <Loader />
        </template> 
        <template v-else>
            <div class="content__cards" v-if="registerUsers.length == 0">
                <UsersCards v-for="user in users" :userData="user" :key="user.id" @deleteUser="deleteUsers"/>
            </div>
            <div class="content__cards" v-else>
                <UsersCards v-for="user in registerUsers" :userData="user" :key="user.id" @deleteUser="deleteUsers"/>
            </div>
        </template>
    </section>
</template>

<script setup lang="ts">
    import useUsers from '~/composables/useUsers';
    import type {Users} from '~/types/users';
    const {getUsers} = useUsers();

    const users = useState<Users[]>('users');
    const registerUsers = useState<Users[]>('registerUsers', () => []);

    const deleteUsers = (id: number):void => {
        const index = users.value.findIndex((user:Users) => user.id == id);
        if(index !== -1){
            users.value.splice(index, 1)
        }
    }
    definePageMeta({
        layout: "custom",
        middleware: ["auth"]
    });
    useHead({
        title: 'Usuarios',
    });
    onMounted(() => {
        getUsers()
    })
</script>