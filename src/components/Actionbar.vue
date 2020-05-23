<template>
    <div class="actionbar">
        <div v-for="item in numIcons" v-bind:key="item">
            <div v-if="abilities[item - 1] != null">
                <img class="ability_icon" v-bind:src="config[abilities[item - 1]].icon" />
            </div>
            <div v-else>
                <img class="ability_icon" v-bind:src="config.empty_slot.icon" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Actionbar',
    props: {
        numIcons: Number,
        abilities: Array,
        config: Object,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ability_icon {
    width: 36px;
    height: 36px;
    float: left;
    padding: 2px;
}

.actionbar:after {
    display: block;
    content: "";
    clear: both;
}
</style>
