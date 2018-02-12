const express = require(`express`);
const hbs = require(`hbs`);
const path = require(`path`);

const app= express();
app.set(`view engine`,`hbs`);
hbs.registerPartials(path.join(__dirname,"view","partials"))
app.get(`/`,(req,res)=>{
  res.render(`index.hbs`,{
    about:`About Me`,
    content:`Jeremy is a despacito`,
    school:`Paly`,
    pageTitle:`Home`
  });
//sentfile sent it to the excate location
// app.sendFile(__dirname+"/public");
})
app.listen(3000,()=>{
console.log("Listening on port 3000!");
})
