// middle wares  do something before actually doing bigger tasks

import jwt from "jsonwebtoken";

const auth=async(req,res,next)=>{

    try {
        
        const token =req.headers.authorization.split(" ")[1] ;

        const isCustomAuth = token.length<500 //  means our own token , not of google

        let decodedData ;
        if(token && isCustomAuth)
        {
            decodedData=jwt.verify(token,'test') ; // we pass secret here also
            req.userId= decodedData?.id ;

        }
        else{
             decodedData=jwt.decode(token) ; 
            req.userId= decodedData?.sub ; // it is provided by google that diff each users
        }
        next() ;
    } catch (error) {
        console.log(error) ;
    }

}

export default auth ;