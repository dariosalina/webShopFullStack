import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import AdvertsController from './adverts/controller'
import setupDb from './db'
// import {Action} from 'routing-controllers'
// import Koa from 'koa';
// import cors from '@koa/cors'

const port = process.env.PORT || 4000

const app = createKoaServer({
  controllers: [
    AdvertsController    
  ]
})


setupDb()
  .then(_ =>
    app.listen(4000, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))