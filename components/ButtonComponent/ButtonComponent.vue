<template>
    <button class="button">
        {{ title }}
        <Icon :name="icon" color="white" size="2.2em" />
    </button>
</template>

<script setup lang="ts">
defineProps<{ icon: string; title: string }>();
</script>

<style scoped>
@import url('./ButtonComponent.css');
</style>
