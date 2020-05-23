<template>
    <div class="actionbar">
        <!-- Actionbar -->
        <draggable v-model="abilitiesModel" :disabled="editable" @update="onDragUpdate">
            <div v-for="ability in abilitiesModel" :key="ability" class="ability-icon">
                <img v-if="ability != null" :src="config[ability].icon" />
                <img v-else :src="config.empty_slot.icon" />
            </div>
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
                    <button @click.prevent="closeEditModal">Close</button>
                </div>
            </div>
        </div>
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
.ability-icon {
    padding: 2px;
    display: inline-block;
}
.ability-icon img {
    width: 36px;
    height: 36px;
    vertical-align: top;
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
