<template>
    <nav class="menu">
        <div v-for="link in links" :key="link.link">
            <NuxtLink :to="link.link">
                <button-component
                    :title="$t(`${link.title}`)"
                    :icon="link.icon"
                />
            </NuxtLink>
        </div>
    </nav>
</template>

<script setup lang="ts">
defineProps<{ links: { title: String; icon: string; link: string }[] }>();
</script>

<style scoped>
@import url('./NavComponent.css');
</style>
