//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var path = require("path");

//web root
server.use(express.static(path.join(__dirname, "html")));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

var fileUpload = require("express-fileupload");
server.use(fileUpload({defCharset:'utf8', defParamCharset:'utf8'}));


var DB = require("nedb-promises");
var ServiceDB = DB.create(__dirname+"/service.db");
var tdartDB = DB.create(__dirname+"/tdart.db");
var testfineDB = DB.create(__dirname+"/testfine.db");
var testphotoDB = DB.create(__dirname+"/testphoto.db");
 

 /*ServiceDB.insert([
    {imgSrc: "聖誕節fn.jpg",title:"MERRY CHRISTMAS",text:"This artwork embodies the joy and warmth of the holiday season. Featuring a fox-eared girl dressed in festive red alongside a majestic white dog, it highlights themes of companionship and celebration under a sparkling night sky filled with soft, glowing lights."},
    {imgSrc: "hibiki1017 copy.jpg",title:"HIBIKI",text:"This piece depicts an angelic character surrounded by autumn leaves, symbolizing freedom and harmony with nature. The vibrant sky and playful floating creatures emphasize a whimsical, uplifting mood, representing the beauty and change of the autumn season."},
    {imgSrc: "fubiki生日賀圖.png",title:"FUBUKI",text:"This illustration captures the essence of winter serenity. It portrays a cheerful fox girl relaxing in a snowy forest, blending her playful and vibrant personality with the peaceful winter atmosphere. The sleeping fox and the snowy details add warmth to the otherwise cold setting."},
    
 ])*/

server.get("/service", (req,res)=>{
      //DB
      ServiceDB.find({}).then(results=>{
        if(results != null){
             res.send(results);
        }else{
            res.send("Error!");
        }
      })
})

 /*tdartDB.insert([
    {imgSrc: "場景渲染3.png",title:"JAPAN SHRINE",text:"I love Japanese culture and architecture, and I love the shrine that glows at night, so I made this 3D model"},
    {imgSrc: "檯燈材質渲染2.jpg",title:"LAMP",text:"As a basis for exercising 3D modeling skills, a topic with easier difficulty was chosen, hence the creation of this table lamp"},
    {imgSrc: "武器渲染3.jpg",title:"KATANA",text:"I love Japanese culture and architecture, and I love the samurai katana, so I made this 3D model"}
    
 ])*/

    server.get("/tdservice", (req,res)=>{
        //DB
        tdartDB.find({}).then(results=>{
          if(results != null){
               res.send(results);
          }else{
              res.send("Error!");
          }
        })
  })


 /* testfineDB.insert([
    {imgSrc: "IMG_20201013_211115.jpg",title:"AUTUMN",text:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {imgSrc: "IMG_20201013_211231.jpg",title:"RED APPLE",text:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {imgSrc: "chuang.png",title:"VIEW FROM THE WINDOW",text:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
    
 ])*/

    server.get("/fservice", (req,res)=>{
        //DB
        testfineDB.find({}).then(results=>{
          if(results != null){
               res.send(results);
          }else{
              res.send("Error!");
          }
        })
  })



  /*testphotoDB.insert([
    {imgSrc: "DSCF0029.jpg",title:"BUBBLES GIRLS FIRST",text:"When I was involved in a cosplay event, I accidentally saw a girl using a bubble gun to wrap bubbles around me, and I was attracted to this scene, so I recorded this scene"},
    {imgSrc: "DSCF0078.jpg",title:"BUBBLES GIRLS second",text:"When I was involved in a cosplay event, I accidentally saw a girl using a bubble gun to wrap bubbles around me, and I was attracted to this scene, so I recorded this scene"},
    {imgSrc: "DSCF0115.jpg",title:"CUTE GIRLS",text:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
 ])*/
    server.get("/pdservice", (req,res)=>{
        //DB
        testphotoDB.find({}).then(results=>{
          if(results != null){
               res.send(results);
          }else{
              res.send("Error!");
          }
        })
  })

server.post("/contact_me", (req,res)=>{
     ContactDB.insert(req.body);
     res.redirect("/#contact");
})

server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/webdesign.html'));
});
