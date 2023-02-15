const jwt = require("jsonwebtoken")

function verifyJWT(req, res, next){
    const { token } = req.cookies;
    if (token == undefined){
        return res.status(401).json({msg:"Token inválido! Faça login para acessar!"})
    }
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err){
            return res.status(498).json({msg:"Token inválido!"})
        }  
        next(); 
    }); 
}

module.exports = verifyJWT