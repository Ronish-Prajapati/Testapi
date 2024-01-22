require("dotenv").config()
const express=require('express');
const app=express();
const PORT=process.env.PORT ||5000;
const products_routes=require("./routes/products")
const connectDB=require('./db/connect')


app.get("/",(req,res)=>{
res.send('I am Live');
});
app.use("/api/products",products_routes)
const start=async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} yes i am connected`)
        });
    } catch (error) {
        console.log(error);
    }
};
start();