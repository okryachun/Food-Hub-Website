/**	Product Page
 *	Functionality:  
 */

class ProductModel {
	database;
	id;
	user;
	
	constructor(database) {
		// Load in Database
		// Get Product ID
		// Display HTML 
		this.database = database;
		this.getProductID();
		this.getUser();
		this.DisplayProductInfo();
	}
	
	getProductID() {
		// Grab ID from URL
		this.id = getQueryVariable('id');
	}
	
	getUser() {
		// Grab ID from URL
		this.user = getQueryVariable('un');
	}
	
	DisplayProductInfo() {
		// Get Product
		let product = this.database.getProduct(this.id);
		// Post product properties to HTML
		document.getElementById('overallRating').innerHTML = 'FIX';
		document.getElementById('product_name').innerHTML = product.productName;
		document.getElementById('calories').innerHTML = product.calories;
		document.getElementById('fats').innerHTML = product.fats;
		document.getElementById('carbohydrates').innerHTML = product.carbohydrates;
		document.getElementById('proteins').innerHTML = product.proteins;
		// IMG gets displayed from local computer storage
		document.getElementById('product_img').src = product.productPicture;
		// Reviews and Rating display
		let i = 0;
		let rating = 0;
		document.getElementById('reviews').innerHTML = null;
		while (i < product.reviews.length) {
			document.getElementById('reviews').appendChild( this.DisplayReview(product.reviews[i]) );
			rating += parseFloat(product.reviews[i].starRating);
			i++;
		}
		// Average the rating sum
		if (i != 0) {
			rating = rating / i;
		}
		document.getElementById('overallRating').innerHTML = rating.toFixed(2);
	}
	
	// Creates a section for a review
	DisplayReview(review) {
		var box = div('','review_box');
		
			var sec = div('','review_star');
				sec.innerHTML = review.starRating;
			box.appendChild( sec );
		
			var sec = div('','review_word');
				sec.innerHTML = review.wordReview;
			box.appendChild( sec );
		
			var sec = div('','review_user');
			box.appendChild( sec );
				sec.innerHTML = review.username;
				
		return box;
	}
	
	CreatePopUpDisplay(ui) {
	  /** Create Pop Up Display HTML
		* Attach to ui parameter
		*/
		var popup = new CreateReviewWindow(ui, this.user, this.id);
	}

	backSearch() {
	// Return back to the Search page
	window.location.href = 'search.html?un=' + this.user;
	}
}
