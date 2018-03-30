var express = require('express');
var bodyParser = require('body-parser');
const {
  MongoClient,
  ObjectId
} = require('mongodb');

var {
  mongoose
} = require('./db/mongoose');
var {
  NikhilMohanBlog
} = require('./model/NikhilMohanBlog');


var app = express();
app.use(bodyParser.json());

//start
app.post('/NikhilMohanBlog', (req, res) => {
  var model46 = new NikhilMohanBlog({
    title: req.body.title,
    tags: req.body.tags,
    body: req.body.body,
    author: req.body.author
  });

  model46.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

});
//end

app.listen(3000, () => {
  console.log('starting on port 3000');
});
module.exports = {
  app
};






//end



// var newmodel=new NikhilMohanBlog({
//  title:'rich',
//  tags:'the life truth',
//  body:'it is the best ',
//  author:'nikhil',
//  creationdate:29 ,
//  updatedate:23,
//  status:'ok',
// });

// newmodel.save().then((doc)=>{
//  console.log('model saved',doc);
// },(e)=>{
//  console.log('unable to connect');
// });



//added

// app.get('/NikhilMohanBlog/:id', (req, res) => {
//   var id = req.params.id;

//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   }

//   Todo.findById(id).then((NikhilMohanBlog) => {
//     if (!nikhilmohanblogs) {
//       return res.status(404).send();
//     }

//     res.send({NikhilMohanBlog});
//   }).catch((e) => {
//     res.status(400).send();
//   });
// });

// app.get('/NikhilMohanBlog/:id',
//   (req,res)=>{
//     res.send(req.params);
//     var id=req.params.id;
//     console.log(id);
//   });

  // "title":"req",
  //   "tags":"tags",
  //   "body":"req",
  //   "author":"author"