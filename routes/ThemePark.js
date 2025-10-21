const router = require('express').Router()
const controller = require('../controllers/ThemePark')

router.get('/', controller.GetPosts)
router.post(
  '/',
  controller.CreatePost
)

router.delete(
  '/:id',
  controller.DeletePost
)
module.exports = router
