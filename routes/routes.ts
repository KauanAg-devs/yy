import express from 'express'
const Router = express.Router()
import routerFunctions from './routerFunctions'


const router = new routerFunctions()

Router.use((req,res,next)=>{
    console.log('oi');
    
    next()
})
Router.get(`/get/:name`, router.getHandler)
Router.post(`/post`, router.postHandler)
Router.put(`/put`, )
Router.delete(`/delete`,)


export default Router