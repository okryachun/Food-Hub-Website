// User review object
class Review {
    username;
    wordReview;
    starRating;
    
    constructor(wordReview, starRating, username) {
        this.starRating = starRating;
        this.wordReview = wordReview;
        this.username = username;
    }
}
