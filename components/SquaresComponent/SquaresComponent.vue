<template>
    <section class="squares">
        <h1 class="squares__title">
            <div>
                <p class="squares__para">
                    Player
                    <span class="squares__format">{{
                        getFormat
                            ? 'x'
                            : !getFormat && getGameMode === 'solo'
                            ? 'CPU'
                            : 'o'
                    }}</span
                    >'s turn
                </p>
            </div>
            <div>
                <span class="squares__score">{{ getScore.playerOne }}</span> -
                <span class="squares__score--red">{{
                    getScore.playerTwo
                }}</span>
            </div>
        </h1>
        <div class="squares__container">
            <div v-for="(col, colIndex) in getGameBoard" :key="colIndex">
                <div v-for="(square, rowIndex) in col" :key="rowIndex">
                    <square-component :row="rowIndex" :col="colIndex" />
                </div>
            </div>
        </div>
        <div class="squares__restart">
            <p v-if="isGameEnd" class="cardWinner__para">
                <span class="cardWinner__winner">{{
                    gameWinRound[0] === 'x' ? 'x' : 'o'
                }}</span>
                takes the round
            </p>
            <button
                v-if="hasValue"
                class="squares__button"
                @click="restartGame"
            >
                Play Again
                <Icon name="ic:outline-replay" color="rgba(0, 0, 0, 0.685)" />
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
const store = useGameStore();

onBeforeMount(() => {
    resetGame();
});

const {
    getGameBoard,
    getFormat,
    getGameMode,
    hasValue,
    getScore,
    isGameEnd,
    gameWinRound,
} = storeToRefs(store);

const { resetGame } = store;

const restartGame = () => {
    resetGame();
};
</script>

<style scoped>
@import url('./SquaresComponent.css');
</style>
