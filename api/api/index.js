import express from 'express'

import auth from './auth'

const router = express.Router()

router.get('/', function(req, res) {
  res.json({message:'Welcome to the backend, why are you here?'})
})

// Set up routes
router.use('/auth', auth)

export default router
