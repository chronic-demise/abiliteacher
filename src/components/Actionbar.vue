<template>
    <div class="actionbar">
        <!-- Actionbar -->
        <draggable v-model="abilitiesModel" :disabled="editable" @update="onDragUpdate" group="shared">
            <AbilityIcon v-for="ability in abilitiesModel" :key="ability" :ability="ability" :config="config" />
        </draggable>
        
        <!-- Editable Container -->
        <div v-if="editable">
            <!-- Edit Button -->
            <button @click.prevent="openEditModal">
                <img class="settings-icon" src="icons/gear.png">
            </button>
            
            <!-- Edit Modal -->
            <div class="modal" v-if="modalVisible">
                <div class="container">
                    <div class="title">Edit Actionbar</div>
                    <Actionbar :abilities="abilitiesModel" :config="config" :editable="false"
                        @onUpdate="onEditActionbarUpdated" />
                    <br/><br/>
                    
                    <AbilityPanel :abilityConfig="config" :filterFunc="filterRanged" />
                    <br/><br/>
                    
                    <button @click.prevent="closeEditModal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import AbilityPanel from './AbilityPanel.vue'

export default {
    name: 'Actionbar',
    components: {
        draggable,
        AbilityPanel,
    },
    props: {
        abilities: Array,
        config: Object,
        editable: {
            default: true,
            type: Boolean,
        },
    },
    data: function() {
        return {
            modalVisible: false,
            abilitiesModel: this.abilities,
        };
    },
    methods: {
        filterRanged(config) {
            var filtered = {};
            
            for (var key in config) {
                if (config[key].skill == "ranged") {
                    filtered[key] = config[key];
                }
            }
            return filtered;
        },
        onDragUpdate() {
            this.$emit("onUpdate", this.abilitiesModel);
        },
        onEditActionbarUpdated(abilities) {
            this.abilitiesModel = abilities;
        },
        openEditModal() {
            this.modalVisible = true;
        },
        closeEditModal() {
            this.modalVisible = false;
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.actionbar {
    display: inline-flex;
    background: #666;
    padding: 4px;
}
.settings-icon {
    width: 20px;
    height: 20px;
}

.modal {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0, 0, 0, 0.7);
    
    align-items: center;
    display: flex;
    justify-content: center;
}
.container {
    background-color: #FFF;
    padding: 20px;
}
</style>
