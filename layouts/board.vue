<template>
    <main>
        <ModalConfirmation
            v-if="showModal"
            :toggle-show-modal="toggleShowModal"
        />
        <slot />
    </main>
</template>

<script setup lang="ts">
const store = useMainStore();
const { checkName } = store;
const { name } = storeToRefs(store);

const [showModal, toggleShowModal, setShowModal] = useToggle();

onBeforeMount(() => {
    checkName();
    setShowModal(name.value === '' && true);
});
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
