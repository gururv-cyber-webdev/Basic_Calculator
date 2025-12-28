import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './config/Db.js'
import Calci from './components/Calci.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.listen(process.env.PORT,() => {
    console.log(`Listening at port ${process.env.PORT}`)
    connectDb()
})

app.post('/input',async(req,res) => {
    const item = req.body
    console.log(item)
    const calci = new Calci(item)
    try{
         await calci.save()
         res.status(200).json("Numbers Given")
    }
    catch(error)
    {
        res.status(501).json({msg:error.msg})
    }
})

app.get('/output',async(req,res) => {
    const item = await Calci.find()
    res.json(item)
})