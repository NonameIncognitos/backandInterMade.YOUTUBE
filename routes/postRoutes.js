const Router = require('express')
const postController = require('../controller/postController')
const router = new Router()

router.post('/post', postController.createPost)
router.get('/post', postController.getPostsByUser)

module.exports = router