const express= require('express')

const app = express()

const connectDB = require('./connctMongo')
app.use(express.json())
connectDB()

const ItemModel = require('./models/item.model')
app.get('/api/v1/items', async (req, res) => {
    try{
        const data = await ItemModel.find()

        if (data)
        {
            return res.status(200).json(
                {
                    msg : 'ok' ,
                    data
                }
            )
        }
        return res.status(404).json(
            {
                msg : 'Not found' ,
            }
        )

    }
    catch (error){
       return res.status(200).json(
           {
               msg : error.message
           }
       )
    }
    }

)

const PORT = process.env.PORT
app.listen(PORT, ()=> {
    console.log("Server is running on port " + PORT)
})