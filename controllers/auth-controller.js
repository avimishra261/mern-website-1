const home = async (req,res) =>{
    try{
        res.status(200).send("Site in try block with router");
    }catch(error) {
        console.log(error);
    }
};
const register = async (req,res) => {
    try {
        console.log(req.body);
        res.status(200).send({msg:req.body});
    } catch (error) {
        res.status(400).send({msg:"page not found"});
    }
};

module.exports = {home, register}; 