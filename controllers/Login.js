import CompliantModel from "../models/CompModel.js";
export const LoginUser = async (req, res) => {
        const { email, password } = req.body;
    
        try {
            const user = await CompliantModel.findOne({ email: email });
            if (!user) {
             return res.json("Invalid Email please provide a valid email");
        }

        if (user.password === password) {
            res.status(200).json({
                message: "Login Successfull",
                user : user
              });
            } else {
                    res.json("Incorrect Password");
                }
            } catch (error) {
                    // Log the error or handle it as needed
                    console.error("Error during user login:", error);
        res.status(500).json("An error occurred during login");
    }
};



