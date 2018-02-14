const express = require(`express`);
const hbs = require(`hbs`);
const path = require(`path`);
// require('./public/css/style.css');
const app= express();

//this make anything in public to be avaible to the js
app.use(express.static(path.join(__dirname,"public","css")));

app.set(`view engine`,`hbs`);
hbs.registerPartials(path.join(__dirname,"view","partials"))
app.get(`/`,(req,res)=>{
  // res.redirect(`www.paly.net`);
  res.render(`index.hbs`,{
    CityName:`Choose Your City`,
    content:`Jeremy is a despacito`,
    school:`Paly`,
    pageTitle:`Home`
  });
app.get(`/losangelos`,(req,res)=>{
  res.render(`index.hbs`,{
    CityName:`Los Angelos`
  })
});
app.get(`/sanantonio`,(req,res)=>{
  res.render(`index.hbs`,{
    CityName:`San Antonio`
  })
});
app.get(`/chicago`,(req,res)=>{
  res.render(`index.hbs`,{
    CityName:`Chicago`
  })
});
//sentfile sent it to the excate location
// app.sendFile(__dirname+"/public");
})



//methods


app.listen(3000,()=>{
console.log("Listening on port 3000!");
})
