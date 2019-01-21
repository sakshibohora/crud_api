let express =require('express');
let body_parser=require('body-parser');
let app=express();

let mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/db');
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

let routes=require('../my_node_app/routes/userRoutes');
routes(app);
app.listen(8981,function(){
	console.log('Done');
})

