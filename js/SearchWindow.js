class SearchWindow {
	account;
	ui;
	
	constructor(account, ui) {
		this.account = account;
		this.ui = ui;
		AddJS('js/video');
		this.LoadDisplay();
	}
	
	LoadDisplay() {
		this.ui.innerHTML = null;
		this.ui.appendChild(this.CreateDisplay() );
	}
	
	CreateDisplay() {
			var box = div('SearchBox','');
			
			// Camera Select
			var section = div('','select');
			box.appendChild( section );
			
				// Txt
				var txt = div('','');
					txt.innerHTML = 'Video Source:';
				section.appendChild(txt);
				
				// Select
				var cam = sel('videoSource','','','');
				section.appendChild(cam);
				
				// Button
				var camBut = but('go','');
					camBut.innerHTML = 'Read Barcode';
				section.appendChild(camBut);
			
			// Camera View
			var section = div('','');
			box.appendChild( section );
			
				// Camera View
				var vid = document.createElement("VIDEO");
					vid.setAttribute("id","video");
					vid.setAttribute("playsinline","true");
				section.appendChild(vid);
				
				// Canvas 1
				var cav = document.createElement("CANVAS");
					cav.id = 'pcCanvas';
					cav.style.width = '640px';
					cav.style.height = '480px';
					//cav.style.display = 'none';
					cav.style.float = 'bottom';
				section.appendChild(cav);
				
				// Canvas 1
				var cav = document.createElement("CANVAS");
					cav.id = 'mobileCanvas';
					cav.style.width = '240px';
					cav.style.height = '320px';
					//cav.style.display = 'none';
					cav.style.float = 'bottom';
				section.appendChild(cav);
			
			// Output dbr
			var section = div('dbr','');
			box.appendChild( section );
			
			
			return box;
	}
	
}