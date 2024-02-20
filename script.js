function showITCHER(photoId){

       function valorURL(){
           console.log(photoId)
           if( photoId === "photo1"){
             const WITCHERapiUrl = "https://harry-potter-api-en.onrender.com/characters/1"
             return WITCHERapiUrl
           } else if( photoId === "photo2") {
            const WITCHERapiUrl = "https://harry-potter-api-en.onrender.com/characters/2"
            return WITCHERapiUrl
           }else if( photoId === "photo3") {
            const WITCHERapiUrl = "https://harry-potter-api-en.onrender.com/characters/3"
            return WITCHERapiUrl
       }
    }

    const WITCHERapiUrl = valorURL()
    
    fetch(WITCHERapiUrl)
    .then(response => response.json())
    .then(data =>{

        const id = data.id;
        document.getElementById('WITCHERmessage').innerText = id;

        const character = data.character;
        document.getElementById('WITCHERmessage').innerText = character;
        
        const nickname = data.nickname;
        document.getElementById('WITCHERmessage').innerText = nickname;

        const hogwartsStudent = data.hogwartsStudent;
        document.getElementById('WITCHERmessage').innerText = hogwartsStudent;

        const hogwartsHouse = data.hogwartsHouse;
        document.getElementById('WITCHERmessage').innerText = hogwartsHouse;
        
        const interpretedBy = data.interpretedBy;
        document.getElementById('WITCHERmessage').innerText = interpretedBy;
        
        const child= data.child;
        document.getElementById('WITCHERmessage').innerText = child;

    
    })
    .catch(error =>{
        console.error("ERRO AO OBTER INFORMAÇÕES")
        document.getElementById('WITCHERmessage').innerText = "ERRO";
    })
    
}


   


