<template>
    <div class="ability-icon">
        <img v-if="ability != null" :src="config[ability].icon" />
        <img v-else :src="config.empty_slot.icon" />
    </div>
</template>

<script>
export default {
    name: 'AbilityIcon',
    props: {
        ability: {
            type: String,
            required: true,
        },
        config: {
            type: Object,
            required: true,
        },
        interactive: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.ability-icon {
    padding: 2px;
    display: inline-block;
}
.ability-icon img {
    width: 36px;
    height: 36px;
    vertical-align: top;
}
</style>
