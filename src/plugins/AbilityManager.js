const AbilityManager = {
    _abilities: [],
    _activeKeys: [],
    _activeCooldowns: [],
}

AbilityManager.install = function(Vue, options) {
    options;
    
    document.addEventListener('keydown', AbilityManager.onKeyDown);
    document.addEventListener('keyup', AbilityManager.onKeyUp);
    
    window.setInterval(AbilityManager.onUpdate, 100);
    
    Vue.prototype.$registerAbility = function(ability) {
        AbilityManager._abilities.push(ability);
    };
}

AbilityManager.onKeyDown = function(e) {
    // TODO global cooldown
    if (AbilityManager._activeKeys.indexOf(e.key) >= 0) {
        return;
    }
    
    //console.log(e);
    AbilityManager._activeKeys.push(e.key);
    
    for (var i = 0; i < AbilityManager._abilities.length; i++) {
        var ability = AbilityManager._abilities[i];
        if (ability.ability == null) {
            continue;
        }
        
        // TODO handle modifiers (alt, ctrl, shift)
        if (ability.keybind.toLowerCase() == e.key.toLowerCase()) {
            console.log(ability.keybind);
            
            // Off cooldown! Trigger
            if (ability.cooldown <= 0) {
                ability.cooldown += ability.config[ability.ability].cooldown * 0.6; // Convert ticks to seconds
                
                AbilityManager._activeCooldowns.push(ability);
            }
            
            // TODO make sure no abilities have the same keybinding
            break;
        }
    }
}

AbilityManager.onKeyUp = function(e) {
    if (AbilityManager._activeKeys.indexOf(e.key) >= 0) {
        //console.log(e);
        
        AbilityManager._activeKeys = AbilityManager._activeKeys.filter(
            function(val) { return val != e.key; }
        );
    }
}

AbilityManager.onUpdate = function() {
    if (AbilityManager._activeCooldowns.length == 0) {
        return;
    }
    
    var toRemove = [];
    
    for (var i = 0; i < AbilityManager._activeCooldowns.length; i++) {
        var ability = AbilityManager._activeCooldowns[i];
        
        ability.cooldown -= 0.1;
        if (ability.cooldown <= 0) {
            ability.cooldown = 0;
            
            toRemove.push(i);
        }
    }
    
    for (var j = toRemove.length - 1; j >= 0; j--) {
        AbilityManager._activeCooldowns.splice(toRemove[j], 1);
    }
}

export default AbilityManager;
