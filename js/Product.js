class Product {
    productName;
    barcode;
    fats;
    carbohydrates;
    proteins;
    calories;
    reviews = [];
    productPicture;

    constructor(productName, barcode, fats, carbohydrates, proteins, calories, img) {
        /** Construct New Product
         *
         */
        this.productName = productName;
        this.barcode = barcode;
        this.fats = fats;
        this.carbohydrates = carbohydrates;
        this.proteins = proteins;
        this.calories = calories;
        this.productPicture = img;
    }

    getProductName() {
        return (this.productName);
    }

    getBarcode() {
        return this.barcode;
    }

    getReviews() {
        return this.reviews;
    }

    addReview(review) {
        this.reviews.push(review);
    }

}