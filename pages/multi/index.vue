<template>
    <section class="container">
        <Title>TicTacToe - Multi</Title>
        <NavComponent :links="links" />
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'board',
});

const links = [
    {
        icon: 'game-icons:tic-tac-toe',
        title: 'index.button.multiplayer.solo',
        link: '/multiOnebyOne',
    },
    {
        icon: 'game-icons:fallout-shelter',
        title: 'index.button.multiplayer.multi',
        link: '/multiplayer',
    },
];
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
