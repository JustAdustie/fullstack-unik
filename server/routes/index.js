const Router = require('express')
const router = new Router()
const itemRouter = require('./itemRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/item', itemRouter)


module.exports = router