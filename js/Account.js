class Account {
  username;
  password;
  accountPrivilege;
  firstName;
  lastName;
  profilePicture;

  constructor(firstName, lastName, username, password) {
    /** Construct New Account
     *
     */
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.accountPrivilege = 'standard';
    this.profilePicture = null;
  }

  getName() {
    return (this.firstName + ' ' + this.lastName);
  }

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  editUsername(username) {
    this.username = username;
    return this.username;
  }

  editPassword(password) {
    this.password = password;
    return this.password;
  }

}