<template>
    <article
        :class="conditionalStyleBoard[originalIndex] + ' square'"
        @click="handleClick"
    >
        <CircleComponent v-if="getGameBoard[row][col] === 'o'" />
        <XComponent v-else-if="getGameBoard[row][col] === 'x'" />
    </article>
</template>

<script setup lang="ts">
const { row, col } = defineProps<{
    row: number;
    col: number;
}>();

const store = useGameStore();

const { handleGameModeAndUpdateBoard, resetGame } = store;

onBeforeMount(() => {
    resetGame();
});

const originalIndex: number = row * 3 + col;

const { getGameBoard, getFormat } = storeToRefs(store);

const handleClick = () => {
    const isBoardHasValue = getGameBoard.value[row][col];
    const formatActive = getFormat.value ? 'x' : 'o';

    if (isBoardHasValue) return;

    handleGameModeAndUpdateBoard(row, col, formatActive);
};

const conditionalStyleBoard: { [key: string]: string } = {
    '0': 'square--zero',
    '1': 'square--first',
    '2': 'square--second',
    '3': 'square--third',
    '4': 'square--forth',
    '5': 'square--fifth',
    '6': 'square--sixth',
    '7': 'square--seventh',
    '8': 'square--eighth',
};
</script>

<style scoped>
@import url('./SquareComponent.css');
</style>
