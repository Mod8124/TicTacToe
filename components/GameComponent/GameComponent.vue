<template>
    <article class="container__home">
        <div class="container__buttonContainer">
            <NuxtLink to="/" class="container__button">
                <Icon name="ph:house" color="rgba(0, 0, 0, 0.8)" size="1.4em" />
                <p>{{ name }}</p>
            </NuxtLink>
        </div>
        <SquaresComponent />
    </article>
</template>

<script setup lang="ts">
const storeTwo = useMainStore();

const { name } = storeTwo;
</script>

<style scoped>
@import url('./GameComponent.css');
</style>
