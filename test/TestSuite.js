class TestSuite {
  constructor() {
    // Create Account
    this.CreateAccount();
    this.CreateUserDatabase();
    this.CreateProductDatabase();
    this.CreateProduct();
  }

  CreateAccount() {
    const newTestUser = new Account('Tess', 'Terr','testUsername', 'testPassword');
    console.log('- New Account ---');
    console.log('Username: ' + newTestUser.getUsername());
    console.log('Password: ' + newTestUser.getPassword());
    console.log('Full Name: ' + newTestUser.getName());
    console.log('- Update Account ---');
    console.log('New Username: ' + newTestUser.editUsername('testUsername2'));
    console.log('New Password: ' + newTestUser.editPassword('testPassword2'));

    console.log('');
  }

  CreateUserDatabase() {
    const database = new UserDatabase();
    console.log('- Add Accounts to Database ---');
    database.addUser( new Account('Tess', 'Terr','001', 'testPassword'));
    database.addUser( new Account('Hungry', 'Joe','002', 'testPassword'));
    database.addUser( new Account('Hungry', 'Joe','002', 'testPassword'));
    console.log('- Find Accounts in Database ---');
    let u001 = database.getUser('001');
    console.log('Full Name: ' + u001.getName());
    let u002 = database.getUser('002');
    console.log('Full Name: ' + u002.getName());
    let u003 = database.getUser('003');
    console.log('Full Name: ' + u003.getName());

    console.log('');
  }

  CreateProductDatabase() {
    const database = new ProductDatabase();
    console.log('- Add Products to Database ---');
    database.addProduct(new Product('Honey Nut Cheerios', 5893802918,1.5, 22, 2, 110));
    console.log('- Find Products in Database ----');
    let prod1 = database.getProduct(5893802918);
    console.log(prod1);

    console.log('');
  }

  CreateProduct() {
    const newTestProduct = new Product('TestName',38291922,5,4,3,55);
    console.log('- New Product ---');
    console.log('Product Name: ' + newTestProduct.getProductName());
    console.log('Barcode: ' + newTestProduct.getBarcode());
    console.log('Fats: ' + newTestProduct.fats);
    console.log('Carbohydrates: ' + newTestProduct.carbohydrates);
    console.log('Proteins: ' + newTestProduct.proteins);
    console.log('Calories: ' + newTestProduct.calories);
    console.log('- Add Review ---');

    newTestProduct.addReview('Tastes amazing','5', 'FakeUserName');

    console.log('Reviews: ' + newTestProduct.getReviews());

    console.log('');
  }


}