const mongoose=require("mongoose"); 
const mongoURL = 'mongodb://localhost:27017/hotel';
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db=mongoose.connection;

db.on('connected', ()=>{
    console.log('Connected to mongodb server');
});
db.on('error', (err)=>{
    console.error('Mongodb conection error',err);
});
db.on('disconnected', ()=>{
    console.log('Disconnected mongodb server');
});

module.exports=db;