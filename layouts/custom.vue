<template>

    <div class="grid grid-cols-12">
        <div class="md:col-span-2">
            <SliderMenu />
        </div>
        <div class="md:col-span-10 col-span-12">
            <Header/>
            <slot />
        </div>
    </div>
    

</template>

<script setup>
</script>