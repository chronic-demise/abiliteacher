const AbilityUtils = {}

AbilityUtils.install = function(Vue, options) {
    options;
    
    Vue.prototype.$makeAbilityUnique = function(ability) {
        // If already unique, return as-is.
        //if (typeof ability === "object") {
        //    return ability;
        //}
        
        return {
            ability: ability,
            id: Math.floor(Math.random() * 1000000),
        };
    }
    
    Vue.prototype.$makeAbilitiesUnique = function(abilities) {
        // If already unique, return as-is.
        //if (abilities.length > 0) {
        //    if (typeof abilities[0] === "object") {
        //        return abilities;
        //    }
        //}
        
        var ret = [];
        
        for (var i = 0; i < abilities.length; i++) {
            // Wrap ability name in an array so that there's uniqueness
            //ret.push([abilities[i]]);
            ret.push(Vue.prototype.$makeAbilityUnique(abilities[i]));
        }
        return ret;
    }
}

export default AbilityUtils;
