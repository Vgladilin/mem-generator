const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "092130daefmshd3cbdecb745d106p11bda4jsna8a6619bc6dc",
        "X-RapidAPI-Host": "ronreiter-meme-generator.p.rapidapi.com"
    }
};
$.ajax(settings).done(function (response) {
    console.log(response);
});