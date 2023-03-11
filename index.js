const express = require("express");

const RecipeInfo=require('./model/recipeDb');
const path = require('path');
const app = new express();

//cors policy
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type ");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  })
  
  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'/build')));

app.get('http://localhost:8000/',(req,res) => {
    res.send("sreeeeeeeeeeeeedjhsd");
  });

  //create
  app.post('/api/create',async (req,res) => {
    try {

    //console.log(req.body);
    let movi=new RecipeInfo(req.body);
    let result=await movi.save(); // save to db
    //res.send("Data Added");
    res.json(result);

    }
    catch (error) {

res.status(500).send(error);
    }
    

  });


//view
 app.get('/api/view', async (req,res) => {

    try {

        let result=await RecipeInfo.find();
        res.json(result);

    }
    catch (error) {

        res.status(500).send(error);
    }

 });

//update
app.post('/api/update',async (req,res) => {
    try {
       let result =await RecipeInfo.findByIdAndUpdate(req.body._id,req.body);
         res.send("Data Updated");

    }
    catch (error) {

        res.status(500).send(error);
    }
});

//delete
app.post('/api/delete',async (req,res)=>{
    try {
        let result=await RecipeInfo.findByIdAndDelete(req.body._id);
        res.send("Data Deleted");
    }
catch (error) {
    res.status(500).send(error);
}
});



app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/build/index.html')); 
});


  app.listen(8000, () => { 
      console.log("running in port 8000");
  
  });