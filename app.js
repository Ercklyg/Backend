import express from "express";
import 'dotenv/config.js';
// import bookRoutes from "./routers/BookRoutes.js";
import bookRoutes from "./routers/StudentRoutes.js";
import StudentRoutes from "./routers/StudentRoutes.js";

//create express app
const app = express();

//middleware
app.use(express.json());

try{
    app.listen(process.env.port || 3000, ()=>{
        console.log(`listening to port ${process.env.PORT || 3000}...`);
    })
}catch(e){
    console.log(e);
}

app.use('/students', StudentRoutes);