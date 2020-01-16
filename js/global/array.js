
function GetIndex(key, val, list) {
	for (var i=0; i < list.length; ++i) {
		if ( list[i][key] == val ) {
			return i;
		}
	}
	return -1;
}

function Random(max) {
		return Math.floor(Math.random() * max);
}

function getQueryVariable(parameter) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == parameter){return pair[1];}
       }
       return(false);
}