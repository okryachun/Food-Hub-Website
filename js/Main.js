
/* Database */

/* JS */
AddJS('js/Account');
AddJS('js/Product');
AddJS('js/ProductDatabase');
AddJS('js/Review');
AddJS('js/UserDatabase');

/* Model */
AddJS('js/LoginModel');
AddJS('js/SearchModel');
AddJS('js/ProductModel');
AddJS('js/CreateProductModel');


/* Page Model */
var model;

function main(page) {
	/** Main function when page loads
	 * 	Loads in Model, Page Functionality
	 */
	switch(page) {
		case 'login':
			// Model
			model = new LoginModel(new UserDatabase());
			break;
		case 'search':
			// Model
			model = new SearchModel(new ProductDatabase());
			DisplayUser();
			break;
		case 'create':
			// Model
			model = new CreateProductModel(new ProductDatabase());
			DisplayUser();
			break;
		case 'product':
			// Model
			model = new ProductModel(new ProductDatabase());
			DisplayUser();
			break;
		default:
			// code block
	}
}

function DisplayUser() {
	/** Display Username in Header */
	let user = getQueryVariable('un');
	document.getElementById('header_user').innerHTML = user;
	let db = new UserDatabase();
	let account = db.getUser(user);
	if (account != null) {
		let txt = 'Welcome: ' + account.firstName+' '+ account.lastName;
		document.getElementById('header_name').innerHTML = txt;
	}
}	

function LogOut() {
	window.location.href = 'index.html';
}
