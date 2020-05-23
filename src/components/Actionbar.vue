<template>
    <div class="actionbar">
        <draggable v-model="abilities">
            <div v-for="ability in abilities" :key="ability" class="ability_icon">
                <img v-if="ability != null" :src="config[ability].icon" />
                <img v-else :src="config.empty_slot.icon" />
            </div>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    name: 'Actionbar',
    components: {
        draggable,
    },
    props: {
        abilities: Array,
        config: Object,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.actionbar {
    display: flex;
}

.ability_icon {
    padding: 2px;
    display: inline;
}

.ability_icon img {
    width: 36px;
    height: 36px;
}
</style>
