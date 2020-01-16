// Startup user accounts/information
let userDB = [
 {
  "username": "arcdelar",
  "password": "admin",
  "accountPrivilege": "standard",
  "firstName": "Archael",
  "lastName": "delaRosa",
  "profilePicture": null
 },
 {
  "username": "olegkryachun",
  "password": "password",
  "accountPrivilege": "standard",
  "firstName": "Oleg",
  "lastName": "Kryachun",
  "profilePicture": null
 }
];

// Start up products stored in database
let productDB = [
 {
  "productName": "Test Product 1",
  "barcode": "test",
  "fats": "0",
  "carbohydrates": "20",
  "proteins": "10",
  "calories": "120",
  "reviews": [
   {
    "username": "arcdelar",
    "wordReview": "This is a test product for new storage. Testing",
    "starRating": "4.5"
   }
  ],
  "productPicture": null
 },
 {
  "productName": "Cheerios",
  "barcode": "1234567891019",
  "fats": "2",
  "carbohydrates": "20",
  "proteins": "3",
  "calories": "100",
  "reviews": [
   {
    "username": "arcdelar",
    "wordReview": "These taste amazing!",
    "starRating": "4.5"
   }
  ],
  "productPicture": 'img/cheerios.png'
 },
 {
  "productName": "Chicken Breast",
  "barcode": "1456567891121",
  "fats": "5",
  "carbohydrates": "0",
  "proteins": "43",
  "calories": "231",
  "reviews": [
   {
    "username": "arcdelar",
    "wordReview": "Easy to cook and tastes delicious.",
    "starRating": "4.5"
   }
  ],
  "productPicture": 'img/chicken_breast.png'
 },
 {
  "productName": "Zucchini",
  "barcode": "1456567891015",
  "fats": "0.6",
  "carbohydrates": "6",
  "proteins": "2.4",
  "calories": "33",
  "reviews": [
   {
    "username": "arcdelar",
    "wordReview": "Love pairing these with my general meals.",
    "starRating": "4.4"
   }
  ],
  "productPicture": 'img/zucchini.png'
 },
 {
  "productName": "Rib Eye Steak",
  "barcode": "1456553291140",
  "fats": "63",
  "carbohydrates": "0",
  "proteins": "69",
  "calories": "847",
  "reviews": [
   {
    "username": "arcdelar",
    "wordReview": "I love this steak because it always turns out tasting amazing",
    "starRating": "4.9"
   }
  ],
  "productPicture": 'img/ribeye.png'
 }
];


function initiateDatabase() {

	// USERS
	let users = this.database = JSON.parse(localStorage.getItem("FOODHUB_USERS"))
	// If Local Storage does not exist, create
	if (users == null || users.length === 0 ) {
		users = [];
		localStorage.setItem("FOODHUB_USERS",  JSON.stringify(userDB) );
	}
	// PRODUCTS
	let products = this.database = JSON.parse(localStorage.getItem("FOODHUB_PRODUCTS"))
	// If Local Storage does not exist, create
	if (products == null || products.length === 0 ) {
		products = [];
		localStorage.setItem("FOODHUB_PRODUCTS",  JSON.stringify(productDB) );
	}
}

function ResetDatabases() {
	// USERS
	localStorage.setItem("FOODHUB_USERS",  JSON.stringify(userDB) );
	// PRODUCTS
	localStorage.setItem("FOODHUB_PRODUCTS",  JSON.stringify(productDB) );
}

// Call Function
initiateDatabase();
