import bcrypt from 'bcryptjs' 
import jwt from 'jsonwebtoken' // we can store user for some amount of time
import User from '../models/user.js'

export const signin = async(req,res)=>{

    const { email , password }= req.body ;
    
    try {
        
        const existingUser= await User.findOne({ email }) ;

        if(!existingUser)
            return res.status(404).json({ message: "User Doesnt exist" })
        
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password) ; // because password is hashed

        if(!isPasswordCorrect)
        {
            return res.status(400).json({ message:  'Invalid Credentials '})
        }

        // 2nd param is secret key kuch bhi rakh skte h ise ise env  m save krna chahiye jo 'test' h
        const token = jwt.sign({ email: existingUser.email , id: existingUser._id} , 'test'  ,{ expiresIn: '1h'} )

        return res.status(200).json({ result: existingUser , token })
    } catch (error) {
        
        res.status(500).json({ message: 'Something went wrong '})
    }
}

export const signup = async(req,res)=>{

    const { email, password, firstName ,lastName , confirmPassword } =req.body ;

    try {
        
         const existingUser= await User.findOne({ email }) ; // if already existing user
          if(existingUser)
            return res.status(400).json({ message: "User already exist" })

            if(password!==confirmPassword)
              return res.status(400).json({ message:  'Passwords dont match '})

            const hashedPassword= await bcrypt.hash(password,12) ; // means difficulty level of 1 for hashing password usually use 12
            const result= await User.create({ email , password: hashedPassword ,name: `${firstName} ${lastName}`})
             const token = jwt.sign({ email: result.email , id: result._id} , 'test'  ,{ expiresIn: '1h'} )

          return res.status(200).json({ result , token })
    } catch (error) {
           res.status(500).json({ message: 'Something went wrong '})
    }
}