const  userhandler={}

userhandler.userhandler= (error)=>{
let errorData = {username:"", password};

if(error.code ==1100){
    errorData.username = "the username is not available";
    return errorData;
};
if (error.message.includes("user validation failed")){
Object.values(error.errors).forEach(({properties})=>{
    errorData[properties.path]=properrties.message;
})

}







}
