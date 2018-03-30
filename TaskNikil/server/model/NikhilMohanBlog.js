var mongoose = require('mongoose');



var NikhilMohanBlog = mongoose.model('NikhilMohanBlog', {


	title: {
		type: String,
		required: true
	},
	tags: {
		type: String
		// default:'ff'
	},
	body: {
		type: String,
		// default:'body'
	},
	author: {
		type: String,
		// default:'Nikhil'
	},
	creationdate: {
		type: String,
		default: "30-3-18",
		required: true
	},
	updatedate: {
		type: Number,
		default: 29
	},
	status: {
		type: String,
		default: 'ok'
	}


});

module.exports.NikhilMohanBlog=NikhilMohanBlog;