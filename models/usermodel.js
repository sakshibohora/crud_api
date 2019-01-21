let mongoose=require('mongoose');
let UserSchema=mongoose.Schema({
	fname:String,
	lname:String
});
module.exports=mongoose.model('User',UserSchema);