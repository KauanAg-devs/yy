import mongoose, { Schema } from 'mongoose'

export class databaseRunner {
    private host: string 

    constructor(host: string) {
    this.host = host
    }

    public async connectDB(){
     return await mongoose.connect(this.host)
    }
}


export class databaseModels {
  public userModel(){
  return mongoose.model('myColl', new Schema({
        name: {type: String, required: true},
        password: {type: String, required: true},
    }))
  }
}
