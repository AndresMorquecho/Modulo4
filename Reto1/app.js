const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const puerto= 8083;


const laptops = [
    {id: 1, marca: "Lenovo", procesador: "Interl core 3", memoria: "16 GB", disco: "1 TB"},
    {id: 2, marca: "Sonny", procesador: "Interl core 7", memoria: "4 GB", disco: "2 TB"},
    {id: 3, marca: "HP", procesador: "Interl core 7", memoria: "8 GB", disco: "1 TB"},
    {id: 4, marca: "Dell", procesador: "Interl core 5", memoria: "16 GB", disco: "4 TB"},
    {id: 5, marca: "Samsung", procesador: "Interl core 5", memoria: "16 GB", disco: "4 TB"},

];


app.use(bodyParser.json());
app.use("/laptops",(request, response, next)=>{

    console.log("Body",request.body);
    next();


});

app.listen(puerto,()=>{
    console.log("Servidor arriba: " + puerto);
});

app.post("/laptops/:idParam",(request, response)=>{

    const idFijo = request.params.idParam
    request.body.id = idFijo;

    console.log("id fijo ", idFijo)
    response.send(request.body);


});


app.get("/laptops/:idParam",(request, response)=>{

   const idBuscada = request.params.idParam
   let laptopEncontrada = null;

    for(let i = 0; i < laptops.length; i++){

        if (laptops[i].id == idBuscada){
            laptopEncontrada = laptops[i]
            break;   
        }

    }

    laptopEncontrada.id = idBuscada
    response.send(laptopEncontrada);
    


});

app.get("/laptops",(request, response)=>{

    response.send(laptops);

})

app.put("/laptops/:idParam",(request, response)=>{

    const id = request.params.idParam;

    console.log("id: ",id);
    response.send(request.body);



});

app.delete("/laptops/:idParam",(request, response)=>{
    const id = request.params.idParam;


    response.send({id:id});

})