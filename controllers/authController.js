const registerController = async (req, res) => {
  try {
    // Your logic here

    const { username, password,email,phone,address } = req.body;
   if(!username || !password || !email || !phone || !address){
    return res.status(400).send({
        success:false,
        message:"Please provide all required fields"
    })
   }

   // Continue with your registration logic here






   

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in register controller",
      error: error.message,
    });
  }
};

module.exports = { registerController };
