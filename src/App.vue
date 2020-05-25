<template>
    <div id="app">
        <Actionbar
            :config="config"
            :abilities="['piercing_shot', 'snap_shot', 'snipe', 'deadshot', null, null, null]"
            :keybinds="['Q', 'W', 'E', 'R', 'T', 'Y']" />
    </div>
</template>

<script>
import Actionbar from './components/Actionbar.vue'

import abilities from "./assets/abilities.json";

export default {
    name: 'App',
    components: {
        Actionbar,
    },
    data: function() {
        return {
            "config": abilities
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.primary-bg {
    background-color: #335;
}
</style>
