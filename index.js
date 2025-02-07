const t = TelloPowerUp.iframe();

const cardButton = (t, options) =>{
    return [
        {
            text:"SEND DATA",
            callback:(t) => {
                t.card("all").then(function(cardData){
                    console.log(cardData)
                    sendToServer(cardData)
                });
            }
        }
    ]
};

TrelloPowerUp.initialize({
    "card-buttons": cardButton
});

async function sendToServer(cardData) {
    try{
        const response = await fetch('http://localhost/PowerUp/infoJSON.php', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cardData)
        });
        const responseData = await response.text();
        console.log(responseData);
    } catch(error){
        console.error('Error conexión:',error);
    }
    
}