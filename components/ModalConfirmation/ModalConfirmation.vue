<template>
    <section class="modal">
        <article v-if="!isConfirmCreateName" class="card">
            <input
                v-model="createName"
                class="card__input"
                type="text"
                :placeholder="$t('index.modal.input')"
                autofocus
            />
            <button class="card__button" @click="checkName">
                {{ $t('index.modal.button') }}
            </button>
            <p class="card__alert">{{ $t('index.modal.warning') }}</p>
        </article>

        <article v-else class="cardConfirm">
            <h3 class="cardConfirm__title">
                {{ $t('index.modal.confirm.title') }}
            </h3>
            <p class="cardConfirm__reminder">
                {{ $t('index.modal.confirm.para') }}
                <span class="cardConfirm__name">{{ createName }}</span>
            </p>
            <button
                class="cardConfirm__button"
                @click="toggleIsConfirmCreateName"
            >
                {{ $t('index.modal.confirm.cancel') }}
            </button>
            <button
                class="cardConfirm__button cardConfirm__button--confirm"
                @click="saveName"
            >
                {{ $t('index.modal.confirm.confirm') }}
            </button>
        </article>
    </section>
</template>

<script setup lang="ts">
interface IModalConfirmation {
    toggleShowModal: () => void;
}

const props = defineProps<IModalConfirmation>();

const [isConfirmCreateName, toggleIsConfirmCreateName] = useToggle(false);

const store = useMainStore();
const { setName } = store;
const { name } = storeToRefs(store);

const createName = ref<string>(name.value);

const checkName = () => {
    if (createName.value === '') return;

    toggleIsConfirmCreateName();
};

const saveName = () => {
    setName(createName.value);
    props.toggleShowModal();
};
</script>

<style scoped>
@import url('./ModalConfirmation.css');
</style>
