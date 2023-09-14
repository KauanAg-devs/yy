import { databaseModels } from "../models/dbUtils";
const DBModels = new databaseModels()
import userInterface from "../models/interfaces";

const userModel = DBModels.userModel()

export default class CRUD {
  
    /**
     * GET
     * @alias funcao para get
     */
    public async GET(user: userInterface) {
      return await userModel.findOne(user)
    }



    /**
     * POST
     * @alias  funcao para post
     */
    public async POST(user: userInterface) {
        return await userModel.create(user)
      }

    /**
     * PUT
     * @alias funcao para put
     */
      public async PUT(user: userInterface, newUser: userInterface) {
        return await userModel.findOneAndUpdate(user, newUser, {returnDocument: 'after'})
      }


    /**
     * DELETE
     * @alias ro funcao para delete
     */
      public async DELETE(user: userInterface) {
        return await userModel.deleteOne(user)
      }



}