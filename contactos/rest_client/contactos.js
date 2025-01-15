
const IP = "192.168.1.9"
const PORT = 3001
const URL = "http://" + IP + ":" +PORT+"/"

export const getAllContacts=(fnRefreshList)=>{

  

    fetch(URL + "contactos").
    then((response)=>{ return response.json()}).
    then(
        (body)=>{
            fnRefreshList(body);
        }
    )

}

