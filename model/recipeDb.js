const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://jyothsnasreejith2020:jyothsnasreejith2020@cluster0.5gowa2o.mongodb.net/?retryWrites=true&w=majority");
const Schema=mongoose.Schema;

var recipeSchema=new Schema({
    rName : String,
    rDuration : String,
    rServings : String,
    rImage : String
    });

    var RecipeInfo=mongoose.model("recipes",recipeSchema);
    module.exports=RecipeInfo;

