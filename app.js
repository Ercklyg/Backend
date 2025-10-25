import express from "express";

//create express app
const app = express();

//middleware
app.use(express.json());

const port = 4500;

try{
    app.listen(port, ()=>{
        console.log('listening to port 3000....');
    })
}catch(e){
    console.log(e);
}

app.get('/labyu', async(request, response) =>{
    response.status(200).json({message: "halu, how r u doin"});
});