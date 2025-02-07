const t = TelloPowerUp.iframe();

// function onButtonClick(t, options){
//     const cardId = options.card.id;

//     t.card('all').then(function(cardData){
//         console.log(cardData);
//         sendToServer(cardData);
//     });
// }


// t.render(() => {
//     const btn = document.createElement('button');
//     btn.textContent = 'Share Information';
//     document.body.appendChild(btn);

//     btn.addEventListener( 'click', async () => {
//         const cardId = await t.card('id');
//         const cardName = await t.card('name');
//         const cardDescription = await t.card('desc');
//         const cardLabels = await t.card('labls')

//         const cardData = {
//             id:cardId,
//             name:cardName,
//             description:cardDescription,
//             labels:cardLabels
//         };

//         await sendToServer(cardData);
//     });
// });

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