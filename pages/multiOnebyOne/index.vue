<template>
    <section class="container">
        <Title>TicTacToe - Multi same CPU</Title>
        <GameComponent />
    </section>
</template>

<script setup>
definePageMeta({
    layout: 'board',
});

const store = useGameStore();

const { setGameMode } = store;

onBeforeMount(() => {
    setGameMode('multi-cpu');
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
