const basedMainStore = {
    soloPoints: 0 as number,
    multiPoints: 0 as number,
    name: '' as string,
};

export const useMainStore = defineStore('main', {
    state: () => basedMainStore,
    // optional getters
    getters: {},
    // optional actions
    actions: {
        setName(NewName: string) {
            this.name = NewName;
            localStorage.setItem('tictocName', this.name);
        },
        checkName() {
            const name = localStorage.getItem('tictocName');

            if (name) {
                this.name = name;
            }
        },
        addSoloPoints() {
            this.soloPoints++;
        },
        addMultiPoints() {
            this.multiPoints++;
        },
    },
});
