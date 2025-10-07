const testUserController = (req,res) =>{
    try{
        res.status(200).send({
            success:true,
            message:"This is a test user route"
        })
    }catch(error){
        console.log(error);
    }

}

module.exports = {testUserController};
