const express=require('express');
const app=express();
const port=process.env.port||3000;

const homeRouter=require('./routers/homeRouter')
const bookRouter=require('./routers/bookRouter')

app.use(express.json())

app.use('/',homeRouter)
app.use('/books',bookRouter)

app.use('*',(req,res)=>{
    res.status(400)
    res.send('Page Not Found')
})

app.listen(port,()=>{
    console.log(`Server Listening on port ${port}...`)
})