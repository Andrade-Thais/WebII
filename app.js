const express = require ("express")
const app = express()

app.get("/",function(req, res){
    res.send("Seja bem vindo ao NodeJs")
})

app.get("/contato",function(req, res){
    res.send("Página de contato!")
})


app.listen(8081, () =>{
    console.log("Servidor Ativo!")

})
