/**	Login Page
 *	Functionality: Login, CreatePopUpDisplay
 */

class LoginModel {
	database;
	
	constructor(database) {
		this.database = database;
		document.onkeydown = this.CheckKey;
	}
	
	CheckKey(e) {
		// On Enter Key
		e = e || window.event;
		if(e.keyCode == 13){
			model.Login();
		}
	}
	
	Login() {
	  /** Check If account exists
		* Check if password match
		* Go to Search Page
		*/
		var un = document.getElementById('username').value;
		var pw = document.getElementById('password').value;
		
		var account = this.database.getUser(un);
		if (account != null && account.password == pw) {
			window.location.href = 'search.html?un='+ un;
		} else {
			alert('Wrong Username or Password');
		}
			
	}
	
	CreateNewAccount() {
		/** Create New Account
			Check that fields are filled
			Go to Search Page
		 */
		var account = new Account(
			document.getElementById('fn').value,
			document.getElementById('ln').value,
			document.getElementById('un').value,
			document.getElementById('pw').value,
		);
		var un = account.getUsername();
		var pw = account.getPassword();
		// If no input detected then create an error
		if (un == '' || pw == '') {
			alert('Error: No Username or Password');
		}
		else {
			model.database.addUser(account);
			window.location.href = 'search.html?un='+ un +'&pw='+ pw;
		}
	}
	
	CreatePopUpDisplay(ui) {
	  /** Create Pop Up Display HTML
		* Attach to ui parameter
		*/
		var popup = new CreateAccountWindow(ui);
	}
}
