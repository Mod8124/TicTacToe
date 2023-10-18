const basedGameStore = {
    // game status
    tries: 9 as number,
    formXStart: true as boolean,
    isGameEnd: false as boolean,
    gameBoard: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ] as string[][],
    gamesPoints: {
        playerOne: 0 as number,
        playerTwo: 0 as number,
    },
    gameWinRound: '',
    gameMode: 'solo' as 'solo' | 'multi-cpu' | 'multi-online',
};

export const useGameStore = defineStore('game', {
    state: () => basedGameStore,
    getters: {
        getTries: (state) => state.tries, // get tries
        getGameBoard: (state) => state.gameBoard,
        hasValue: (state) =>
            state.gameBoard.some((rows) => rows.some((row) => row !== '')),
        getScore: (state) => state.gamesPoints,
        getFormat: (state) => state.formXStart,
        getGameMode: (state) => state.gameMode,
    },
    actions: {
        setIsGameEnd(value: boolean) {
            this.isGameEnd = value;
        },
        setGamePoints(player: string) {
            if (player === 'x') {
                this.gamesPoints.playerOne++;
            } else {
                this.gamesPoints.playerTwo++;
            }
        },
        setGameMode(value: 'solo' | 'multi-cpu' | 'multi-online') {
            this.gameMode = value;
        },
        makeCPUMove() {
            if (this.getTries > 0) {
                const format = this.getFormat ? 'x' : 'o';
                const secondsBeforeMove = 1000;
                // Make a move in the center, if available
                if (this.gameBoard[1][1] === '') {
                    setTimeout(() => {
                        this.updateGameBoard(1, 1, format); // 'X' represents the CPU
                    }, secondsBeforeMove);
                    return;
                }

                // Make a move in a corner, if available
                const cornerMoves = [
                    { row: 0, col: 0 },
                    { row: 0, col: 2 },
                    { row: 2, col: 0 },
                    { row: 2, col: 2 },
                ];
                for (const move of cornerMoves) {
                    if (this.gameBoard[move.row][move.col] === '') {
                        setTimeout(() => {
                            this.updateGameBoard(move.row, move.col, format); // 'X' represents the CPU
                        }, secondsBeforeMove);
                        return;
                    }
                }

                // Make a move in an edge, if available
                const edgeMoves = [
                    { row: 0, col: 1 },
                    { row: 1, col: 0 },
                    { row: 1, col: 2 },
                    { row: 2, col: 1 },
                ];
                for (const move of edgeMoves) {
                    if (this.gameBoard[move.row][move.col] === '') {
                        setTimeout(() => {
                            this.updateGameBoard(move.row, move.col, format); // 'X' represents the CPU
                        }, secondsBeforeMove);
                        return;
                    }
                }
            }
        },
        checkForWinner() {
            if (this.isGameEnd) return;
            for (let a = 0; a < this.gameBoard.length; a++) {
                // Check the first column
                if (
                    this.gameBoard[0][a] === this.gameBoard[1][a] &&
                    this.gameBoard[0][a] === this.gameBoard[2][a] &&
                    this.gameBoard[0][a] !== ''
                ) {
                    const player = this.gameBoard[0][a];
                    this.gameWinRound = `${player}`;
                    this.setGamePoints(player);
                    this.setIsGameEnd(true);
                    return;
                }

                // Check the first row
                if (
                    this.gameBoard[a][0] === this.gameBoard[a][1] &&
                    this.gameBoard[a][0] === this.gameBoard[a][2] &&
                    this.gameBoard[a][0] !== ''
                ) {
                    const player = this.gameBoard[a][0];
                    this.gameWinRound = `${player}`;
                    this.setGamePoints(this.gameBoard[a][0]);
                    this.setIsGameEnd(true);
                    return;
                }

                // Check the two diagonals
                if (
                    (this.gameBoard[0][0] === this.gameBoard[1][1] &&
                        this.gameBoard[0][0] === this.gameBoard[2][2] &&
                        this.gameBoard[0][0] !== '') ||
                    (this.gameBoard[0][2] === this.gameBoard[1][1] &&
                        this.gameBoard[0][2] === this.gameBoard[2][0] &&
                        this.gameBoard[0][2] !== '')
                ) {
                    const player = this.gameBoard[1][1];
                    this.gameWinRound = `${player}`;
                    this.setIsGameEnd(true);
                    return;
                }
            }
        },
        resetGame() {
            this.tries = 9;
            this.gameBoard = [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ];
            this.setIsGameEnd(false);

            this.formXStart = true;
        },
        restTries() {
            this.tries = this.tries - 1;
        },
        updateGameBoard(row: number, col: number, value: string) {
            this.checkForWinner();

            if (this.isGameEnd) return;

            this.gameBoard[row][col] = value;
            this.restTries();

            this.formXStart = !this.formXStart;

            this.checkForWinner();
        },
        handleGameModeAndUpdateBoard(row: number, col: number, value: string) {
            if (this.gameMode === 'solo') {
                this.updateGameBoard(row, col, value);
                this.makeCPUMove();

                return;
            }

            if (this.gameMode === 'multi-cpu') {
                this.updateGameBoard(row, col, value);
            }
        },
    },
});
