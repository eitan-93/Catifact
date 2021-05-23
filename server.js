const express = require('express')
const fetch = require("node-fetch");
var bodyparser = require('body-parser');
const join = require('path').join

const fs = require('fs');


function app() {

  console.log("we are at app() ")
  const server = express()
  const port = process.env.PORT || 3000
  const distfolder = join(process.cwd(),"dist/catifact")
  console.log(distfolder)


  // //view engine
  server.set('views',distfolder);
  server.set('view engine','html');

  // server.engine("html",require('ejs').renderfile)
  server.engine('html',  require('ejs').renderFile)

  // // body parser middleware
  server.use(bodyparser.json());

  var publicFolder = join(__dirname, '/')
  server.use(express.static(publicFolder));

  server.get("*.*",express.static(distfolder))

  server.get('/get-img', (req, res) => {
    // console.log("we are loading url ",req.query.url)

    fetch(req.query.url)
      .then((res2) => {
        return res2.json()/*.then(tmpres => app(tmpres))*/
    })
    .then((img)=>{
      // console.log("we are at get-img ",img.length,img)
      return res.send(  img)
      
    })

    })

  server.get('/get-facts', (req, res) => {
    console.log("we are getting the facts ",req.query.url)

    fetch(req.query.url)
      .then((res2) => {
        return res2.json()
    })
    .then((facts)=>{
      console.log("we are at get-facts ",facts)
      return res.send(  facts)
      
    })

    })

  server.get('/*', (req, res) => {
    return res.sendFile(join(__dirname + '/dist/catifact/index.html'));
  })


  server.post('/save-fact', (req, res) => {
    console.log("we are saving a fact",req.body, req.body.fact)
    if(req.body.params.uid != undefined){
    let oldItems = JSON.parse(fs.readFileSync('Data.json'));
  
    if(oldItems[req.body.params.uid] == undefined){
      oldItems[req.body.params.uid] = {}
      oldItems[req.body.params.uid][req.body.params.fact._id] = req.body.params.fact
    }
    else {
      if(!(req.body.params.fact._id in oldItems[req.body.params.uid])){
        oldItems[req.body.params.uid][req.body.params.fact._id] = req.body.params.fact
      }
    }

    let data = JSON.stringify(oldItems, null ,2);
    fs.writeFileSync('Data.json', data);
  }
  })   


  server.post('/remove-fact', (req, res) => {
    console.log("we are removing a fact",req.body.params.uid, req.body.params.factid)

    if(req.body.params.uid!=''){
      let oldItems = JSON.parse(fs.readFileSync('Data.json'));
      delete oldItems[req.body.params.uid][req.body.params.factid]; 
      let data = JSON.stringify(oldItems, null ,2);
      fs.writeFileSync('Data.json', data);
    }
    
  })

  server.post('/get-local-facts', (req, res) => {
    console.log("we are loading local facts ",req.body.params.uid)

    let oldItems = JSON.parse(fs.readFileSync('Data.json'));
    console.log("the local facts ",oldItems[req.body.params.uid])
    res.send(oldItems[req.body.params.uid])
    
    })



  server.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
  })

}
app()
module.exports = app;

