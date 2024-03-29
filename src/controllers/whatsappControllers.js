const fs = require("fs");
const { SendMessageWhatsApp } = require("../services/whatsappService");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const whatsappService =require("../services/whatsappService");
const processMessage = require("../shared/processMessage");
const VerifyToken = (req, res) => {
    
    try{
        var accessToken = "RTQWWTVHBDEJHJKIKIKNDS9090DS";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if(challenge != null && token != null && token == accessToken){
            res.send(challenge);
        }else{
            res.status(400).send();
        }

    }catch(e){
        res.status(400).send();
    }
}

const ReceivedMessage = (req, res) => {
    try{
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var messageObject = value["messages"];
        
        if(typeof messageObject != "undefined"){
            var messages = messageObject[0];
            var number = messages["from"];
            myConsole.log(messageObject);
            var text = GetTextUser(messages);
           // myConsole.log(text);
            whatsappService.SendMessageWhatsApp(text,number );
            //Obtiene unicamente el mensaje recivido:
            //myConsole.log(" el mensaje recivido:"+text);
             if(text != ""){
                 processMessage.Process(text, number);
          } 

        }        

        res.send("EVENT_RECEIVED");
    }catch(e){
       // myConsole.log(e);
        res.send("EVENT_RECEIVED");
    }
}

 function GetTextUser(messages){
     var text = "";
     var typeMessge = messages["type"];
     if(typeMessge == "text"){
         text = (messages["text"])["body"];
     }
     else if(typeMessge == "interactive"){

        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];
        
         if(typeInteractive == "button_reply"){
             text = (interactiveObject["button_reply"])["title"];
         }
        else if(typeInteractive == "list_reply"){
             text = (interactiveObject["list_reply"])["title"];
         }else{
             myConsole.log("sin mensaje");
         }
     }else{
         myConsole.log("sin mensaje");
     }
    return text;
 }

module.exports = {
    VerifyToken,
    ReceivedMessage
}