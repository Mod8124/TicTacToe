type TUseToggle = [Ref<boolean>, () => void, (value: boolean) => void];

export const useToggle = (state = false): TUseToggle => {
    const isActive = ref<boolean>(state);

    const toggleIsActive = (): void => {
        isActive.value = !isActive.value;
    };

    const setActive = (value: boolean): void => {
        isActive.value = value;
    };

    return [isActive, toggleIsActive, setActive];
};
