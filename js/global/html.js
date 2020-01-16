
function AddJS(val) {
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.src = val + '.js';
	script.type = 'text/javascript';
	head.appendChild(script);
}
function AddCSS(val) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.href = 'css/' + val + '.css';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.media = 'all';
    head.appendChild(link);
}

function div(id,css) {
	var box = document.createElement('DIV');
		box.id = id;
		box.className = css;
	return box;
}
function img(src,id,css) {
	var box = document.createElement('IMG');
		box.src = src;
		box.id = id;
		box.className = css;
	return box;
}
function input(id,css) {
	var inp = document.createElement('INPUT');
		inp.id = id;
		inp.className = css;
	return inp;
}
function but(id,css) {
	var box = document.createElement('BUTTON');
		box.id = id;
		box.className = css;
	return box;
}
function datalist(id,css,options,list) {

	var inp = document.createElement("INPUT");
		inp.id = id;
		inp.setAttribute("list", id + '_list');
		inp.className = css;
		
	var datalist = document.createElement("DATALIST");
		datalist.id = id + '_list';
	inp.appendChild(datalist);

	var selection = [];
	if (options == null) {
		selection = list;
	}
	else {
		for (var i=0;i<list.length;i++) {
			
			
			if (!Array.isArray(list[i][options])) {
					if ( selection.indexOf(list[i][options]) == -1) {
						selection.push(list[i][options]);
					}
			}
			else {
				for(var j=0;j<list[i][options].length;j++){
					if ( selection.indexOf(list[i][options][j]) == -1) {
						selection.push(list[i][options][j]);
					}
				}
			}
		}
		selection.sort();
	}
	
	for (var i=0;i<selection.length;i++) {
		var val = selection[i];
		var opt = document.createElement("option");
		opt.textContent = val;
		opt.value = val;
		datalist.appendChild(opt);
	}
	
	return inp;
}
function sel(id,css,options,list) {
	var sel = document.createElement("SELECT");
		sel.id = id;
		sel.className = css;

	var selection = [];
	if (options == null) {
		selection = list;
	}
	else {
		for (var i=0;i<list.length;i++) {
			
			
			if (!Array.isArray(list[i][options])) {
					if ( selection.indexOf(list[i][options]) == -1) {
						selection.push(list[i][options]);
					}
			}
			else {
				for(var j=0;j<list[i][options].length;j++){
					if ( selection.indexOf(list[i][options][j]) == -1) {
						selection.push(list[i][options][j]);
					}
				}
			}
		}
		selection.sort();
	}
	selection.unshift(null); 
	
	for (var i=0;i<selection.length;i++) {
		var val = selection[i];
		var opt = document.createElement("option");
		opt.textContent = val;
		opt.value = val;
		sel.appendChild(opt);
	}
	
	return sel;
}

function frm(id) {
	var box = document.createElement('FORM');
		box.setAttribute("id", id);
	return box;
}
