<template>
    <aside class="slider__menu" v-if="flagMenu">
        <div class="div__menu">
            <div class="mb-8">
                <img class="w-10/12 mx-auto" src="/logo_dapte.svg" alt="logo" />
            </div>
            <nav class="text-start">
                <ul class="space-y-8 ">
                    <li class="xl:text-2xl text-xl font-light flex items-center gap-x-2">
                        <Icon name="material-symbols:shopping-bag" size="1.5rem" color="black"/>
                        <NuxtLink to="/products">Productos</NuxtLink>
                    </li>
                    <li class="lg:text-2xl text-xl font-light flex items-center gap-x-2">
                        <Icon name="ic:round-supervisor-account" size="1.5rem" color="black"/>
                        <NuxtLink to="/users">Usuarios</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="close__icon" @click="flagMenu = !flagMenu">
                <Icon name="material-symbols:close-rounded" size="3rem" color="white" />
            </div>
            <div class="md:mt-auto mt-10 pb-20 lg:text-xl text-base text-center">
                @copyright 2024 Daptee
            </div>
        </div>

    </aside>
</template>

<script setup lang="ts">
    const flagMenu = useState<boolean>(('flagMenu'), () => true)

    onMounted(() => {
        window.addEventListener('resize', () => {

            if (window.innerWidth <= 768) {
                flagMenu.value = false;
            }

            if (window.innerWidth >= 768) {
                flagMenu.value = true;
            }
        });
    })
</script>


<style scoped>
    .close__icon{
        display: none
    }
    @media screen and (width < 768px){
        .close__icon{
            display: block;
            position: absolute;
            top: 20px;
            right:5%;
        }
    }
</style>
