<template>
    <div class="actionbar primary-bg">
        <!-- Actionbar -->
        <draggable v-model="abilitiesModel" :disabled="true" group="shared" filter=".empty-slot">
            <AbilityIcon v-for="(ability, idx) in abilitiesModel"
                :key="ability.id" :ability="ability.ability" :config="config" :keybind="keybindsModel[idx]" />
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
                    <br/>
                    
                    <!--<Actionbar :abilities="abilitiesModel" :keybinds="keybindsModel" :config="config" :editable="false"/>-->
                    <div class="actionbar primary-bg">
                        <draggable v-model="abilitiesModel" :disabled="false" group="shared" filter=".empty-slot">
                            <AbilityIcon v-for="(ability, idx) in abilitiesModel"
                                :key="ability.id" :ability="ability.ability" :config="config" :keybind="keybindsModel[idx]" />
                        </draggable>
                    </div>
                    <br/><br/>
                    
                    <AbilityPanel :abilityConfig="config" :filterFunc="filterRanged"
                        @draggedToBar="updateModel" />
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
        keybinds: Array,
        config: Object,
        editable: {
            default: true,
            type: Boolean,
        },
    },
    data: function() {
        return {
            modalVisible: false,
            abilitiesModel: this.$makeAbilitiesUnique(this.abilities),
            keybindsModel: this.keybinds,
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
        updateModel(newModel) {
            this.abilitiesModel = newModel;
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
