const {Router}= require("express")
const {getBooks, createBook, updateBook} = require("../controllers/booksController")
const {byCategory, byAuthor} = require("../handlers/booksHandlers")

const router=Router();

router.route("/books").get([byCategory, byAuthor], getBooks).post(createBook)

router.put("/books", updateBook)

module.exports=router;