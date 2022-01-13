const express = require('express')
const app = express()
const cors=require('cors')
require('./mongoose')
const port = 5000
const Data=require('./routes/data')
const Contact=require('./routes/contact')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    credentials:true,
    origin:true,
}))
app.use('/api/data',Data)
app.use('/api/contact',Contact)
app.listen(port, () => { console.log('app is up at port '+port) })