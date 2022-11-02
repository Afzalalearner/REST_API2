const home=(req,res)=>{
    res.status(200);
    res.send('Welcome to Home page...')

}

const health=(req,res)=>{
    res.status(200)
    res.json({status:'up'})

}

module.exports={
    home,
    health,
}