<template>
    <section class="container">
        <Title>TicTacToe - solo</Title>
        <GameComponent />
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'board',
});

const store = useGameStore();

const { setGameMode } = store;

onBeforeMount(() => {
    setGameMode('solo');
});
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
