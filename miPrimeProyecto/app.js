const express= require("express");
const app =express();
const puerto = 3001;
const bodyParser = require("body-parser");




app.use(bodyParser.json());

app.use("/contactos",(request, response, next)=>{

    console.log("ingresa a funcion de middleware ");
    console.log("headers: ",request.headers);
    console.log("body: ",request.body);
    next();


});

app.get("/contactos",(request, response)=>{

    const contactos = [
        {id: 1, nombre: "Andres", apellido: "Morquecho", celular: "123123123"},
        {id: 2, nombre: "Peper", apellido: "Perez", celular: "1231222223"},
        {id: 3, nombre: "Juan", apellido: "Castillo", celular: "12313323"},
    ];

    console.log("ingresa al get");

    response.send(contactos)
});



app.post("/contactos",(request, response)=>{
    request.body.id = 99;
    response.send(request.body);
})

app.listen(puerto,()=>{
    console.log("Servidor listo en el puerto " + puerto);
});


app.put("/contactos/:idParam",(request, response)=>{
    const id = request.params.idParam
    console.log("id",id);
    response.send("put contactos");
} )

app.delete("/contactos/:idParam",(request, response)=>{
    const id = request.params.idParam
    console.log("id eliminar: ", id);
    response.send("delete contactos");
} )