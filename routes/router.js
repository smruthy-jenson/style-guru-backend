const express = require('express')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const wishlistController = require('../controllers/wishlistController')
const cartController = require('../controllers/cartController')

const router = new express.Router()

// get all products
router.get('/all-products',productController.getAllProductsController)

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

// add to wishlist
router.post('/user/add-to-wishlist',jwtMiddleware,wishlistController.addToWishlist)

// get wishlists
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlist)

// get a product
router.get('/:id/get-product',productController.getAProduct)

// removewishlist
router.delete('/remove-wishlist/:id/item',jwtMiddleware,wishlistController.removeWishlist)

// add to cart
router.post('/user/add-to-cart',jwtMiddleware,cartController.addToCart)

// get cart
router.get('/get-cart',jwtMiddleware,cartController.getCart)

// remove cartitem
router.delete('/remove-cart/:id/item',jwtMiddleware,cartController.removeCartItem)

// increment cartitem
router.get('/:id/increment-cart',jwtMiddleware,cartController.incrementCartItem)

// decrement cartitem
router.get('/:id/decrement-cart',jwtMiddleware,cartController.decrementCartItem)

// empty cart
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCart)



module.exports = router