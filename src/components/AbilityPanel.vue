<template>
    <div class="ability-panel">
        <draggable v-model="abilities" :group="{name: 'shared', pull: 'clone'}" :sort="false"
            :move="onMove" @end="onEnd">
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
        onMove(evt) {
            if (this.initialList == null)
            {
                this.initialList = [...evt.relatedContext.list];
                console.log(this.initialList);
            }
            
            // Splice the dragged item into the target list and publish it
            var newList = [...this.initialList];
            newList[evt.relatedContext.index] = evt.draggedContext.element;
            
            this.$emit("draggedToBar", newList);
            
            // Disallow the move so we can handle it manually
            return false;
        },
        onEnd(evt) {
            evt;
            
            // TODO need to handle multiple drop targets..? Can do so by checking "evt.to"
            this.initialList = null;
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
