<template>
    <div :class="'ability-icon' + ((ability == null) ? ' empty-slot' : '')">
        <!-- Keybind Label -->
        <div v-if="keybind != null" class="keybind-label">
            {{ keybind }}
        </div>
        
        <!-- Cooldown Label -->
        <div v-show="cooldown > 0" class="cooldown-label">
            {{ (cooldown &lt; 10) ? cooldown.toFixed(1) : cooldown.toFixed(0) }}
        </div>
        
        <!-- Icon -->
        <img v-if="ability != null" :src="config[ability].icon" />
        <img v-else :src="config.empty_slot.icon" />
    </div>
</template>

<script>
export default {
    name: 'AbilityIcon',
    created: function() {
        this.$registerAbility(this);
    },
    props: {
        ability: {
            type: String,
            required: false,
        },
        config: {
            type: Object,
            required: true,
        },
        keybind: String,
        interactive: {
            type: Boolean,
            default: false,
        },
    },
    data: function() {
        return {
            cooldown: 0.0, // In seconds
        }
    },
    watch: {
        cooldown: function(newCooldown, oldCooldown) {
            // TODO do we need this?
            newCooldown;
            oldCooldown;
        }
    }
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

.keybind-label {
    position: absolute;
    margin-left: 2px;
    vertical-align: bottom;
    font-size: 90%;
    color: #FFF;
    text-shadow: 2px 2px #000, 1px 1px #000;
    line-height: 54px;
    user-select: none;
}
.cooldown-label {
    position: absolute;
    margin-top: -1px;
    vertical-align: top;
    text-align: right;
    width: 34px;
    font-size: 90%;
    color: #F00;
    font-weight: bold;
    text-shadow: 1px 1px #000, -1px -1px #000;
    user-select: none;
}
</style>
