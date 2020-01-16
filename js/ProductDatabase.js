class ProductDatabase {
	database = [];

	constructor() {
		this.loadDatabase();
    }
	
	loadDatabase() {
		// Load database from local storage
		this.database = JSON.parse(localStorage.getItem("FOODHUB_PRODUCTS"))
		// If Local Storage does not exist, create
		if (this.database == null ) {
			this.database = [];
			this.saveDatabase();
		}
		console.log('Database Loaded:');
		console.log(this.database);
	}
	
	saveDatabase() {
		// Save product database to local storage
		localStorage.setItem("FOODHUB_PRODUCTS",  JSON.stringify(this.database) );
		console.log('Database Saved:');
		console.log(this.database);
	}

    addProduct(product) {
        /** Add Product to database
         *  If doesnt Exist
         */
        if (!this.checkProductExist(product)) {
            this.database.push(product);
			this.saveDatabase();
            console.log('Added: ' + product.productName);
        }
		else {
            console.log('Error: Exists ' + product.productName);
		}
    }

    getProduct(barcode) {
        /** Find Product in database
         *  If Not found, Return new null product with barcode set
         */
        for (let i=0; i<this.database.length;i++) {
            if (this.database[i].barcode === barcode) {
                console.log('FOUND: ' + this.database[i].productName);
                return this.database[i];
            }
        }
        // Not Found
        console.log('ERROR: This Product does not Exist.');
        return new Product(null, barcode,null,null, null, null);
    }

    checkProductExist(product) {
        /** Check if Product exists in database
         */
        for (let i=0; i<this.database.length;i++) {
            if (this.database[i].barcode === product.barcode) {
                console.log('ERROR: Product Barcode Exists');
                return true;
            }
        }
        return false;
    }
	
	addReview(product, review) {
		/** Add Review to Product
		 *- Check if User Review Exist, Replace
		 */
		let reviews = product.reviews;
		for (let i=0; i<reviews.length;i++) {
			if (reviews[i].username === review.username) {
				reviews[i] = review;
				return;
			}
		}
		reviews.push(review);
	}

}
