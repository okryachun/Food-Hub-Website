class CreateReviewWindow {
	ui;
	user;
	barcode;
	
	constructor(ui, user, barcode) {
		this.ui = ui;
		this.user = user;
		this.barcode = barcode;
		this.LoadDisplay();
	}
	
	LoadDisplay() {
		this.ui.innerHTML = null;
		this.ui.appendChild(this.CreateDisplay() );
		
	}
	
	CreateDisplay() {
		
			var box = div('ReviewCreateBox','ui large form stacked segment');
			
			// Title
			var section = div('','');
			box.appendChild(section);
				// Txt
				var txt = div('','ui header');
					txt.innerHTML = "New Review";
				section.appendChild(txt);
			
			// Rating Box
			var section = div('','field');
			box.appendChild(section);
				// Field
				var field = div('','ui input');
				section.appendChild(field);
				// Input
				var inp = input('newRating','');
					inp.setAttribute("placeholder","Your Rating Out Of 5");
					inp.setAttribute("type","number");
					inp.setAttribute("max","5");
				field.appendChild(inp);
			
			// Review Box
			var section = div('','field');
			box.appendChild(section);
				// Field
				var field = div('','ui input');
				section.appendChild(field);
				// Input
				var inp = input('newReview','');
					inp.setAttribute("placeholder","Word Review");
				field.appendChild(inp);
			
			// Submit Box
			var section = div('','');
			box.appendChild(section);
				// Button
				var create = but('','ui fluid large teal submit button');
					create.innerHTML = 'Create';
					create.onclick = (function(call) { return function() { 
						call.CreateNewReview();
					};})(this);
				section.appendChild(create);
			
			// CLose Box
			var section = div('','');
			box.appendChild(section);
				// Button
				var closeBut = but('','ui fluid large red submit button');
					closeBut.innerHTML = '[X]';
					closeBut.onclick = (function(call) { return function() { 
						call.CloseWindow();
					};})(this);
				section.appendChild(closeBut);
				
		return box;
	}
	
	CreateNewReview() {
		/** Create New Review
			Check that fields are filled
			Go to Search Page
		 */
		if ((document.getElementById('newRating').value === '') ||(document.getElementById('newRating').value < 0 || document.getElementById('newRating').value > 5)) {
			alert('Please Enter a Rating between 0 and 5.');
		} else if (document.getElementById('newReview').value === '') {
			alert('Please Enter Review.');
		}
		else {
			// Create Review
			var review = new Review(
				document.getElementById('newReview').value,
				document.getElementById('newRating').value,
				this.user
			);
			// Get Product
			let product = model.database.getProduct(this.barcode);
			if (product.productName != null) {
				// Add Review
				model.database.addReview(product, review );
				// Save Database
				model.database.saveDatabase();
				//Refresh HTML
				model.DisplayProductInfo();
			}
			this.CloseWindow();
		}
	}
	
	CloseWindow() {
		this.ui.innerHTML = null;
	}
}