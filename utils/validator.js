const Joi=require('joi')

function validator(book){
    const schema=Joi.object({
        name:Joi.string().min(3).max(8).required(),
        price:Joi.required(),
    })

    return schema.validate(book,{abortEarly:false});
}

module.exports=validator;