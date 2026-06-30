//ASSOCiation\
const Book = require("./book")
const Review = require("./Review")


Book.hasMany(Review)
Review.belongsTo(Book)

module.exports = {
    Book,
    Review
}