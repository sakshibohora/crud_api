let mongoose=require('mongoose');
let UserSchema=mongoose.Schema({
	firstname:String,
	lastname:String
});
module.exports=mongoose.model('User',UserSchema);