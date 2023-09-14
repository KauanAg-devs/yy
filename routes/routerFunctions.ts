import userInterface from "../models/interfaces";
import CRUD from "./crud";


const crud = new CRUD()
class routerFunctions {
    /**
     * getHandler
     */
    public async getHandler(req: any, res: any) {
        const user = req.params 
        const foundUser = await crud.GET(user)
        res.status(200).json({message: `found account : ${foundUser}`})
    }
    /**
     * postHandler
     */
    public async postHandler(req: any, res: any) {
        const user: userInterface = req.body 
        const createdUser = await crud.POST(user)
        res.status(200).json({message: `createdAccount : ${createdUser}`})
    } 
    /**
     * putHandler
     */
    public async putHandler() {
        
    }
    /**
     * deleteHandler
     */
    public async deleteHandler() {
        
    }
}

export default routerFunctions