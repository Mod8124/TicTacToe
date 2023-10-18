<template>
    <section class="container">
        <NavComponent :links="navLinks" />
    </section>
</template>

<script lang="ts" setup>
interface INavLinks {
    icon: string;
    title: string;
    link: string;
}

const navLinks: INavLinks[] = [
    {
        icon: 'game-icons:tic-tac-toe',
        title: 'index.button.solo',
        link: '/solo',
    },
    {
        icon: 'game-icons:fallout-shelter',
        title: 'index.button.multi',
        link: '/multi',
    },
    {
        icon: 'game-icons:podium-winner',
        title: 'index.button.record',
        link: '/records',
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
