const yup = require("yup")

function validate(data){
    const userSchema=yup.object().shape({
        username:yup.string().required("CAN NOT BE SKIPPED").min(2).max(50),
email:yup.string().email().required("").min(8 ).max(30),
password:yup.string().required.min(8).max(20)
    })
    return userSchema.validate(data)
}
module.exports=validate;