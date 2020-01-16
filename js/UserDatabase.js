class UserDatabase {
	database = [];

	constructor() {
		this.loadDatabase();
	}
	
	loadDatabase() {
		// Load database from local storage
		this.database = JSON.parse(localStorage.getItem("FOODHUB_USERS"))
		// If Local Storage does not exist, create
		if (this.database == null ) {
			this.database = [];
			this.saveDatabase();
		}
		console.log('Database Loaded:');
		console.log(this.database);
	}
	
	saveDatabase() {
		// Save this database to local storage
		localStorage.setItem("FOODHUB_USERS",  JSON.stringify(this.database) );
		console.log('Database Saved:');
		console.log(this.database);
	}

  addUser(account) {
    /** Add User to database
     *  If doesnt Exist
	 *  Update LocalHost
     */
    if (!this.checkExist(account)) {
      this.database.push(account);
	  this.saveDatabase();
      console.log('Added: ' + account.getUsername())
    }
  }

  getUser(username) {
    /** Find User in database
     *  If Not found, Return new null account
     */
    for (let i=0; i<this.database.length;i++) {
		let account = this.database[i];
      if (account.username == username) {
        console.log('FOUND: ' + username);
        return this.database[i];
      }
    }
    // Not Found
    console.log('ERROR: ' + username + ' Does not Exist.');
    return null;
  }

  checkExist(account) {
    /** Check if Username Exists in database
     */
    for (let i=0; i<this.database.length;i++) {
      if (this.database[i].username == account.username) {
        console.log('ERROR: Username Exists');
        return true;
      }
    }
  }

}
