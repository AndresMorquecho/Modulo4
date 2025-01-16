export const getAllLaptops = (refreshList)=>{
    fetch("http://192.168.1.9:8083/laptops").then((response)=>{return response.json()}).then((response)=>{
        refreshList(response);
    })
};


export const GuardarLaptopRest = (item, ShowMessage)=>{

    const config = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: item.id,
            marca: item.marca,
            procesador: item.procesador,
            memoria: item.memoria,
            disco: item.disco
        })
    }



    fetch("http://192.168.1.9:8083/laptops/7", config).then(response => {
        if (!response.ok){
            throw new Error("error en la conexión" + response.statusText);
        }
        response.json()})
        
        .then(
            response => {console.log(response)
            ShowMessage();
        }
        ).catch((error)=>{
            console.error("Error: ", error)
        })
}