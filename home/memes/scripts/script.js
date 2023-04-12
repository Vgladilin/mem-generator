function fonts() {
//     const settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://meme-generator-and-template-database.p.rapidapi.com/fonts",
//         "method": "GET",
//         "headers": {
//             "X-RapidAPI-Key": "092130daefmshd3cbdecb745d106p11bda4jsna8a6619bc6dc",
//             "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
//         }
//     };
//
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//     });
// }
//
// function search() {
//     const settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://meme-generator-and-template-database.p.rapidapi.com/search?searchString=cat",
//         "method": "GET",
//         "headers": {
//             "X-RapidAPI-Key": "092130daefmshd3cbdecb745d106p11bda4jsna8a6619bc6dc",
//             "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
//         }
//     };
//
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//     });
// }
//
// function templates() {
//     const settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://meme-generator-and-template-database.p.rapidapi.com/templates",
//         "method": "GET",
//         "headers": {
//             "X-RapidAPI-Key": "092130daefmshd3cbdecb745d106p11bda4jsna8a6619bc6dc",
//             "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
//         }
//     };
//
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//     });
// }
// function templateImage() {
//
//     const settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://meme-generator-and-template-database.p.rapidapi.com/template/Bernie_I_Am_Once_Again_Asking_For_Your_Support",
//         "method": "POST",
//         "headers": {
//             "content-type": "application/json",
//             "X-RapidAPI-Key": "092130daefmshd3cbdecb745d106p11bda4jsna8a6619bc6dc",
//             "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
//         },
//         "processData": false,
//         "data": JSON.stringify({
//             "text1": {"text": "I love painting", "font_size": 33, "font": "kanit"},
//             "text0": {"text": "maybe", "font_size": 30},
//         }),
//     };
//
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//         var utf8 = unescape(encodeURIComponent(response));
//         console.log(utf8);
//         var imgsrc = 'data:image/jpeg;base64,' + Base64.btoa(response);
//         var img = new Image(100, 100); // width, height values are optional params
//         img.src = imgsrc;
//         document.body.appendChild(img);
//     });

    // $.ajax({
    //     crossDomain: true,
    //     url: "https://meme-generator-and-template-database.p.rapidapi.com/template/" + img,
    //     type: "POST",
    //     headers: {
    //         // "content-type": "application/json",
    //         "accept":"application/json, text/plain, */*",
    //         "X-RapidAPI-Key": "092130daefmshd3cbdecb745d106p11bda4jsna8a6619bc6dc",
    //         "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
    //     },
    //     contentType: "application/json",
    //     data: JSON.stringify({
    //         "text1": {"text": "I love painting", "font_size": 33, "font": "kanit"},
    //         "text0": {"text": "maybe", "font_size": 30},
    //     }),
    //     success: function(res){
    //         // console.log(atob(btoa(res)))
    //         var rawResponse = res; // truncated for example
    //         // console.log(btoa(res))
    //         console.log(btoa(res.split('').map(e=>e.charCodeAt(0).toString(2).padStart(16, '0')).join(' ')))
    //         // console.log(window.btoa(unescape(encodeURIComponent(res))))
    //         var b64Response =btoa(res.split('').map(e=>e.charCodeAt(0).toString(2).padStart(16, '0')).join(' '));
    //         // var b64Response =btoa(res.split('').map(e=>e.charCodeAt(0).toString(2).padStart(16, '0')).join(' '));
    //         // var b64Response = window.btoa(unescape(encodeURIComponent(rawResponse)));
    //
    //         var outputImg = document.createElement('img');
    //
    //         document.querySelector('#image').src = 'data:image/jpeg;base64,'+ b64Response;
    //
    //
    //         document.body.appendChild(outputImg);
    //         // document.querySelector('#image').setAttribute('src', res.btoa().atob())
    //         // document.querySelector('#image').src= 'data:image/svg+xml;base64,'+btoa(res)
    //     },
    //     error: function (err) {
    //         console.log('ERROR', err)
    //     }
    // })

}

// $(document).ready(function () {
    // fonts()
    // search()
    // templates()
    // templateImage()

// });
