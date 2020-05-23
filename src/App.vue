<template>
    <div id="app">
        <Actionbar
            :config="config"
            :numIcons="8"
            :abilities="['corruption_shot', 'needle_strike']" />
    </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Actionbar from './components/Actionbar.vue'

export default {
    name: 'App',
    components: {
        Actionbar
    },
    data: function() {
        return {
            "config": {
                "corruption_shot": {
                    "icon": "icons/corruption_shot.webp",
                },
                "needle_strike": {
                    "icon": "icons/needle_strike.webp",
                },
                "empty_slot": {
                    "icon": "icons/empty_slot.png",
                }
            }
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
</style>
