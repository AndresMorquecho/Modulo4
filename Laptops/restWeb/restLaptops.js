export const getAllLaptops = (refreshList)=>{


    fetch("http://192.168.1.9:8083/laptops").then((response)=>{return response.json()}).then((response)=>{
        refreshList(response);
    })


}