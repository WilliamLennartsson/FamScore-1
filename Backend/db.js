var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var express = require('express');
var db;

var app = express();

app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017', function(error, client) {
  if (error) {
    console.error('Failed to connect to the database!');
    console.log(error);
  } else {
    console.log('Successfully connected to the database!');
    db = client.db('families');
  }
});


 app.get('/', function (request, response) {
  response.send('hellow');
 });

 app.listen(3000, function(){
  console.log('express springer');
 });

 app.get('/families', function(request, response){
   console.log('QUERY: ', request.query);
   console.log('QUERY NAME: ', request.query.name);
  db.collection('families').find({'familyName' : request.query.familyName, 'password' : request.query.password, 'familyMembers' : { $elemMatch: { 'name' : request.query.name} } }).toArray(function(error, result){
    if(result.length > 0 ){
      response.send(result);
      console.log(result);
    } else {
      console.log('No family found');
    }
  });
});

 app.post('/families', function(request, response) {
    db.collection('families').insertOne(
      request.body
      , function(error, result){
        if(error) {
          response.status(500).send(error);
          return;
        }
        console.log('Posted: ', request.body);
        response.send(result);
    });
 });

 // Funkar ej
 //varför funkar inte .query????
 // ,  'familyMembers' : { $elemMatch: { 'name' : request.body.nickName} }
 //, 'familyMembers' : { $elemMatch: { 'name' : request.query.name} }
 app.put('/families', function(request, response){
  console.log('QYERY FAMOBJECT IN PUT', request.body.familyObject);
  console.log('QUERY IN PUT: ', request.body);
  console.log('QUERY NAME IN PUT: ', request.body.nickName);
  console.log('QUERY ID IN PUT: ', request.body.familyID);
  console.log('QUERY POINTS IN PUT', request.body.points);
  //var newValue = { $inc: {points: request.body.points} }
  var newValue = { 'familyName': 'WillyMcNilly' }
  //db.collection('families').updateOne(myQuery, newValue, function(error, result){
  db.collection('families').updateOne(
    { 'familyName': request.body.familyObject.familyName, 'familyMembers' : ({ $elemMatch: { 'name' : request.body.nickName} }) },
    { $inc: {'familyMembers.$.points': request.body.points }},
//   {
//     "familyName": request.body.familyObject.familyName,
//     "password": request.body.familyObject.password,
//     "familyMembers.name": request.body.familyObject.nickname
//   },
//   {
//     "$set":
//     {
//       "familyMembers.$.points": request.body.points
//     }
//   }
// ),
    function(error, result){
    if(result){
      response.send(result);
    } else {

      // db.bar.update( {user_id : 123456 , "items.item_name" : "my_item_two" } ,
      //          {$inc : {"items.$.price" : 1} } ,
      //          false ,
      //          true);

      // db.products.update(
      //    { sku: "abc123" },
      //    { $inc: { quantity: -2, "metrics.orders": 1 } }
      // )

      // if(error){
      //   console.log(error)
      // } else {
      console.log(result);
      console.log('No family found');
      console.log(error);
    }
  });
});
