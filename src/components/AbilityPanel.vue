<template>
    <div class="ability-panel">
        <draggable v-model="abilities" @update="onDragUpdate" :group="{name: 'shared', pull: 'clone'}" :sort="false">
            <AbilityIcon v-for="(config, ability) in filteredAbilityConfig" :key="ability" :ability="ability" :config="filteredAbilityConfig" />
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    name: 'AbilityPanel',
    components: {
        draggable,
    },
    props: {
        abilityConfig: {
            type: Object,
            required: true,
        },
        filterFunc: {
            type: Function,
            required: true,
        }
    },
    data: function() {
        var filtered = this.filterFunc(this.abilityConfig);
        
        return {
            filteredAbilityConfig: filtered,
            abilities: Object.keys(filtered),
        };
    },
    methods: {
        onDragUpdate() {
            //this.$emit("onUpdate", this.abilitiesModel);
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

.ability-panel {
    display: inline-flex;
    background: #666;
    padding: 4px;
    width: 120px;
    text-align: left;
}
</style>
