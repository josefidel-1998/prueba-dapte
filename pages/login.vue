<template>
    <section class="section__login">
        <FormLogin />
    </section>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'default',
    });
    
    useHead({
        title: 'Login',
    });
</script>