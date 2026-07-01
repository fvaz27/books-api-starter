//create the models from the the path to their proper folders
const Book = require("./book")
const Review = require("./Review")

//association
Book.hasMany(Review) //the book has 1 to many relation to reviews
Review.belongsTo(Book) // the review has 1 to 1 relation with book 

//export the models with the association defined
module.exports = {
    Book,
    Review
}