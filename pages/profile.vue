<template>
    <section>
        <h1>Index</h1>
        {{ userCockie }}
    </section>
</template>

<script setup lang="ts">
    import type {Data} from '@/types/login';

    const userCockie = useCookie<Data>('data_user');

    definePageMeta({
        layout: "custom",
        middleware: ["auth"]
    });
    useHead({
        title: `${userCockie.value.name}`,
    });
</script>