class CreateAccountWindow {
	ui;
	
	constructor(ui) {
		this.ui = ui;
		this.LoadDisplay();
		document.onkeydown = this.CheckKey;
	}
	
	CheckKey(e) {
		// On Enter Key
		e = e || window.event;
		if(e.keyCode == 13){
			model.CreateNewAccount();
		}
	}
	
	LoadDisplay() {
		this.ui.innerHTML = null;
		this.ui.appendChild(this.CreateDisplay() );
	}
	
	CloseDisplay() {
		this.ui.innerHTML = null;
	}
	
	CreateDisplay() {
		var box = div('AccountCreateBox','ui large form stacked segment');
		
		// Title
		var section = div('','');
		box.appendChild(section);
			// Txt
			var txt = div('','ui header');
				txt.innerHTML = "New Account";
			section.appendChild(txt);
		
		// FirstName Box
		var section = div('','field');
		box.appendChild(section);
			// Field
			var field = div('','ui input');
			section.appendChild(field);
			// Input
			var inp = input('fn','');
				inp.setAttribute("placeholder","First Name");
			field.appendChild(inp);
		
		// LastName Box
		var section = div('','field');
		box.appendChild(section);
			// Field
			var field = div('','ui input');
			section.appendChild(field);
			// Input
			var inp = input('ln','');
				inp.setAttribute("placeholder","Last Name");
			field.appendChild(inp);
		
		// Username Box
		var section = div('','field');
		box.appendChild(section);
			// Field
			var field = div('','ui input');
			section.appendChild(field);
			// Input
			var inp = input('un','');
				inp.setAttribute("placeholder","Username");
			field.appendChild(inp);
		
		// Password Box
		var section = div('','field');
		box.appendChild(section);
			// Field
			var field = div('','ui input');
			section.appendChild(field);
			// Input
			var inp = input('pw','');
				inp.setAttribute("placeholder","Password");
			field.appendChild(inp);
		
		// Submit Box
		var section = div('','');
		box.appendChild(section);
			// Button
			var create = but('','ui fluid large teal submit button');
				create.innerHTML = 'Create';
				create.onclick = (function(call) { return function() { 
					model.CreateNewAccount();
				};})(this);
			section.appendChild(create);
		
		// CLose Box
		var section = div('','');
		box.appendChild(section);
			// Button
			var closeBut = but('','ui fluid large red submit button');
				closeBut.innerHTML = '[X]';
				closeBut.onclick = (function(call) { return function() { 
					call.CloseDisplay();
				};})(this);
			section.appendChild(closeBut);
			
		return box;
	}
	
}