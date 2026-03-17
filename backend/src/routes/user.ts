import User from '../models/User'
import { type Request, Router } from 'express'
import { prepareQuery, type ReqQuery } from '../utils/find'

const router = Router()
router.get('/', async (req: Request<unknown, unknown, unknown, ReqQuery>, res) => {
   const {project, sort, size} = prepareQuery(req.query)
   try {
      const users = await User.find()
         .select(project)
         .sort(sort)
         .limit(size)
      res.status(200).json({ users })
   } catch (error) {
      console.error('Error accessing user route:', error)
      res.status(500).json({ error: 'Internal server error' })
   }
})

export default router
