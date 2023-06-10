const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");
function SendMessageWhatsApp(textResponse,number){
    //Se declaran constantes propies de la cuenta
    const MY_ID =103841559410901;
    const MY_TOKEN= "EAADwMpRASeUBAJij7mJlSwIKTtC2pFJ3okCZCp41ZC29WE4Abc4EMcBQumJ0EFSZAxhfyj3IqKOnDUglabKGkAWMqnOqdQT2KMJqDDjIrVnQLeqzAPg9jn7F1PhzEaXjEDMaKvDAqggYCkA9gdpuZAh6v3Cu0IzzTvVI81HdQ8kLrybaJ8vZC";
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "preview_url": false,
        "recipient_type": "individual",
        "to": number,
        "type": "text",
        "text": {
            "body": "Hola, buenos dias. Soy el chat que creo Andersson Avila"}
    });
    
    const options = {
        host: "graph.facebook.com",
       
        path: `/v17.0/${MY_ID}/messages`,
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${MY_TOKEN}`
            
        }
    };
    const req = https.request(options, res => {
        res.on("data", d=> {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
};