
var BabyTimeUtils = {
    cookieSave : function(state,prefix="baby_time") {
        var txt = JSON.stringify(state);
        document.cookie = prefix + "=" + txt;
    },
    cookieTryLoad : function(prefix="baby_time") {
        var parts = document.cookie.split(";");
        prefix = prefix + "=";
        for (var i in parts) {
            var p = parts[i].trim();
            if (p.startsWith(prefix)) {
                p = p.replace(prefix,"");
                var obj = JSON.parse(p);
                return obj;
            }
        }
        return false;
    },
};



