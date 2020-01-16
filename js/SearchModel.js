/**	Search Page
 *	Functionality: ManualSearch 
 */

class SearchModel {
	database;
	user;
	
	constructor(database) {
		this.database = database;
		this.user = getQueryVariable('un');
		document.onkeydown = this.CheckKey;
	}
	
	CheckKey(e) {
		// On Enter Key
		e = e || window.event;
		if(e.keyCode == 13){
			model.ManualSearch();
		}
	}
		
	ManualSearch() {
		/** get Product from database
		 */
		let id = document.getElementById('manual_input').value;
		if (id === '' || id === null) {
			alert('Enter a barcode.');
		}
		else {
			let product = this.database.getProduct(id);
			if (product.productName == null) {
				// Go To Create New Product Page
				window.location.href = 'create.html?id='+ id +'&un='+ this.user;
			}
			else {
				// Go to Product Page
				window.location.href = 'product.html?id='+ id +'&un='+ this.user;
			}
		}
	}
	
}