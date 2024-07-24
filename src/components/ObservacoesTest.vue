<template>
    <div class="tile tile-centured" :class="{ checked: observacao.checked }">
        <div class="tile-content">
            <div class="tile-subtitle">{{ observacao.description }}</div>
        </div>
        <div>
            <button @click="$emit('toggle', observacao)" class="btn btn-primary">
                <i v-if="observacao.checked" class="icon icon-bookmark"></i>
                <i v-else class="icon icon-check"></i>
            </button>
            <button @click="$emit('remove', observacao)" class="btn btn-error">
                <i class="icon icon-cross"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ObservacoesTest",
    props: {
        observacao: { type: Object, required: true },
    },
};
</script>

<style scoped>
.checked {
    text-decoration: line-through;
    color: lightslategray;
}

.tile {
    margin-top: 1rem;
    padding: 20px;
    box-shadow: 0 0.25rem 1rem rgba(63, 127, 191, 1);
}
</style>