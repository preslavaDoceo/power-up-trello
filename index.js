
var onBtnClick = function (t, ops){
    console.log(cardData);
    sendToServer(cardData);
};

window.TrelloPowerUp.initialize({
    'card-buttons' : function (t, opts){
        return [{
            text: 'SEND DATA',
            callback: onBtnClick,
            condition: 'edit'
        },{
            text: 'Just a URL',
            condition: 'always',
            url: 'https://developer.atlassian.com/cloud/trello',
            target: 'Trello Developer Site'
        }]
    }
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