const validator=require('./../utils/validator')

const books=[
    {id:1,name:'Node',price:100},
    {id:2,name:'Express',price:120},
    {id:3,name:'Mongo',price:200},
]

const Joi=require('joi')

const get=(req,res)=>{
    res.status(200)
    res.json(books)
}

const getById=(req,res)=>{
    const id=+req.params.id;

    const book=books.find(books=>books.id===id)
    
    if(!book){
        res.status(404);
        res.send('Invalid Id');
        return;
    }
    res.status(200)
    res.json(book)
    
}

const post=(req,res)=>{

    const {error,value}=validator(req.body)

    if(error){
        res.status(400);
        res.send(error)
        return
    }

    // if(!req.body.name||req.body.name.length<3||!req.body.price){
    //     res.status(404);
    //     //if you write wrong status code here 
    //     // then your next message will not be displayed

    //     console.log('Ínvalid Input')
    //     res.send('Name and Price are required and name must be atleast 3 characters long');
    //     return;
    // }

    // const errors=[];

    // if(!req.body.name){
    //     const err={msg:'Name is Required'}
    //     errors.push(err)
    // }

    // if(!req.body.price){
    //     const err={msg:'Price is Required'}
    //     errors.push(err)
    // }

    // if(req.body.name.length<3){
    //     const err={msg:'Name must be atleast 3 characters long'}
    //     errors.push(err)
    // }
    // res.status(200)
    // res.json(errors);

    const book={
        id:books.length+1,
        name:req.body.name,
        price:req.body.price,
    }

    books.push(book);
    res.status(201);
    res.send('created')
}

const put=(req,res)=>{
    //Validate id
    //validate inputs
    //update the database

    const id=+req.params.id;
    const book=books.find(books=>books.id===id)
    
    if(!book){
        res.status(404)
        res.send('Invalid Id')
        return;
    }

    const {error,value}=validator(req.body)
if(error){
    res.status(400)
    res.send(error)
    return;
}
    book.name=req.body.name;
    book.price=req.body.price;
    res.status(200)
    res.send('Record Updated Successfully')


}

const remove=(req,res)=>{
    const id=+req.params.id;

    const book=books.find(books=>books.id===id)

    if(!book){
        res.status(404);
        res.send('Invalid Id');
        return;
    }
const index=books.indexOf(book)

    books.splice(index,1)
    res.status(200);
    res.send(books)
}

// function validator(book){
//     const schema=Joi.object({
//         name:Joi.string().min(3).max(8).required(),
//         price:Joi.required(),
//     })

//     return schema.validate(book,{abortEarly:false});
// }

module.exports={
    get,
    getById,
    post,
    put,
    remove,
}