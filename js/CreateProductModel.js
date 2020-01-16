/**	Create Product Page
 *	Functionality:  
 */

class CreateProductModel {
	database;
	id;
	user;
	
	constructor(database) {
		// Load in Database
		// Get Product ID and User
		this.database = database;
		this.getProductID();
		this.getUser();
		document.onkeydown = this.CheckKey;
	}
	
	CheckKey(e) {
		// On Enter Key
		e = e || window.event;
		if(e.keyCode == 13){
			model.Create();
		}
	}
	
	getProductID() {
		// Grab ID from URL
		this.id = getQueryVariable('id');
	}
	
	getUser() {
		// Grab ID from URL
		this.user = getQueryVariable('un');
	}
	
	Create() {
		// Check product name is not null
		// Create Product
		// Add to Database
		// Go to Product Page
		let product = this.CreateProduct();
		let review = this.CreateReview();
		if (product.productName == '' || product.productName == null) {
			alert('Please Enter Product Name.');
		} else if ( (review.starRating === '') || (review.starRating < 0 || review.starRating > 5)) {
			alert('Please Enter a Rating between 0 and 5.');
		} else if (review.wordReview == '') {
			alert('Please Enter Review.');
		} else {
			// Add Product
			this.database.addReview(product, review);
			// Add Review
			this.database.addProduct(product);
			window.location.href = 'product.html?id='+ this.id +'&un='+ this.user;
		}
	}
	
	CreateProduct() {
		// Grab values from HTML to create Product
		let name = document.getElementById('product_name').value;
		let img = document.getElementById('product_img').value;
		let fats = document.getElementById('fats').value;
		let carbohydrates = document.getElementById('carbohydrates').value;
		let proteins = document.getElementById('protein').value;
		let calories = document.getElementById('calories').value;
		// Create Product
		let product = new Product(name, this.id, fats, carbohydrates, proteins, calories, img);
		// Return Product
		return product;
	}
	
	CreateReview() {
		// Grab values from HTML to create Review
		let wordReview = document.getElementById('review').value;
		let starRating = document.getElementById('rating').value;
		// Create Review
		let review = new Review(wordReview, starRating, this.user);
		// Return Review
		return review;
	}
	
	backSearch() {
	// Return back to the Search page
	window.location.href = 'search.html?un=' + this.user;
	}
}