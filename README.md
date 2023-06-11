# Whatsapp-Api-node

Esta  api  envia y recive mensajes de whatsapp
# Prerequisitos

Tener cuenta de whatsapp, cuenta de facebook developers 
# Configuracion de cuenta de facebook
La cuenta se debe configurar como se muestra en el siguiente video

Este video se encuentra en edicion
# Despliegue local
Clone este proyecto en git,  en la carpeta raiz de este proyecto coloque los siguientes comandos, en la terminal (Visual estudio o git )

`npm i`

`npm run start`
# Despliegue AZURE
<img width="1425" alt="Screen Shot 2023-06-10 at 9 43 08 AM" src="https://github.com/AnderssonAvilaRojas/Whatsapp-Api-node/assets/79039742/9acfe072-5a93-4295-8103-6f20bc484589">

# Configuración Postman
configure postman, creando un request a la direccion http://localhost:3000/messages mediante el metodo post
En autorizacion, selecione el tocken bearer, y agregue el siguiente token:

`EAADwMpRASeUBAJij7mJlSwIKTtC2pFJ3okCZCp41ZC29WE4Abc4EMcBQumJ0EFSZAxhfyj3IqKOnDUglabKGkAWMqnOqdQT2KMJqDDjIrVnQLeqzAPg9jn7F1PhzEaXjEDMaKvDAqggYCkA9gdpuZAh6v3Cu0IzzTvVI81HdQ8kLrybaJ8vZC`

<img width="1440" alt="Screen Shot 2023-06-11 at 9 37 23 AM" src="https://github.com/AnderssonAvilaRojas/Whatsapp-Api-node/assets/79039742/da6e986c-442e-4c30-9c19-c88b85daa6e3">

seleccione en Header en el campo key escriba Content type y en el campo value aplication/json como se muestra en la imagen


<img width="1440" alt="Screen Shot 2023-06-11 at 9 42 55 AM" src="https://github.com/AnderssonAvilaRojas/Whatsapp-Api-node/assets/79039742/5c5b01e4-37dc-4022-ad32-e9f76bd228e7">

Por ultimo Seleccione body> JSON y agrege el siguiente JSON;

`{
    "messaging_product": "whatsapp",
    "preview_url": false,
    "recipient_type": "individual",
    "to": {NUMERO},
    "type": "text",
    "text": {
        "body": "Hola ;)"}
}`

Reemplaze su numero de whatsapp por la variable NUMERO de este JSON
Reaalize la preticion, y compruebe que se haya recivido en whatsapp su mensaje
# Mensaje generado en whatsapp

<img width="1000" alt="Screen Shot 2023-06-10 at 9 41 51 AM" src="https://github.com/AnderssonAvilaRojas/Whatsapp-Api-node/assets/79039742/1f6e497d-ec08-4840-9fa1-4faa5586b736">

# Mensajes almacenados
<img width="1439" alt="Screen Shot 2023-06-10 at 9 39 45 AM" src="https://github.com/AnderssonAvilaRojas/Whatsapp-Api-node/assets/79039742/16a8bee4-5e0e-4924-ba2b-77aaf0b19d31">




