let express = require('express');
let mongoose = require('mongoose');
let bodyparser = require('body-parser');
let userModel = require('./models/usermodel');
let path = require('path');
// let ejs = require('ejs');

let app = express();

app.use("/js", express.static(__dirname + "/static/"));


/*app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/MVC/form.html'));*/
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/dbdemo', {useNewUrlParser: true});
let routes = require('./routes/userroutes');
routes(app);

app.get('/', function(req, res){
// res.render('form');
res.sendFile(__dirname + '/view/index.html');
})
app.listen(3000);