module.exports = function(app){
	let user = require('../controllers/usercontroller');
	app.route('/users').get(user.usersAll).post(user.add);
	
	//app.route('/users/:userId').get(user.fetch).put(user.update).delete(user.delete);
	app.route('/users/:userId').get(user.fetch).delete(user.delete).put(user.update);
}