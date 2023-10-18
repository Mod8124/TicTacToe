<template>
    <main>
        <slot />
    </main>
</template>

<script setup lang="ts">
// seo
useSeoMeta({
    title: 'TicTacToe',
    ogTitle: 'TicTacToe',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
});
</script>

<style>
@import url('~/assets/global.css');
</style>
