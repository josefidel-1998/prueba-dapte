<template>
    <aside class="slider__menu">
        <div class="mb-8">
            <img class="w-10/12 mx-auto" src="/logo_dapte.svg" alt="logo" />
        </div>
        <nav class="text-center">
            <ul class="space-y-8">
                <li class="lg:text-2xl text-md font-bold flex items-center gap-x-2">
                    <Icon name="material-symbols:shopping-bag" size="2rem" color="white"/>
                    <NuxtLink to="/products">Productos</NuxtLink>
                </li>
                <li class="lg:text-2xl text-md font-bold flex items-center gap-x-2">
                    <Icon name="ic:round-supervisor-account" size="2rem" color="white"/>
                    <NuxtLink to="/users">Usuarios</NuxtLink>
                </li>
            </ul>
        </nav>
        <div class="mt-auto py-20 lg:text-xl text-sm">
            @copyright 2024 Daptee
        </div>
    </aside>
</template>

<script setup lang="ts">

</script>