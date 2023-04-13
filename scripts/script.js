// function textBox() {
//
//     $.ajax(
//         {
//             "async": true,
//             "crossDomain": true,
//             "url": "https://meme-generator-and-template-database.p.rapidapi.com/text-box/Tuxedo_Winnie_The_Pooh",
//             "method": "POST",
//             "headers": {
//                 "content-type": "application/json",
//                 "X-RapidAPI-Key": "41c6e9b985msh5b28da27525771ep154e00jsnb47295e86f2f",
//                 "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
//             },
//             "xhrFields": {
//                 "responseType": 'blob'
//             },
//             "processData": false,
//             "data": JSON.stringify({
//                 "text_boxes": [
//                     {
//                         "x": 230,
//                         "y": 70,
//                         "width": 240,
//                         "height": 40,
//                         "text": "what is this lame text with no style?",
//                         "font": "inconsolata",
//                         "font_size": 30,
//                         "text_align": "center",
//                         "text_placement": "center",
//                         "text_color": "(0,0,0)",
//                         "text_stroke_width": 0
//                     },
//                     {
//                         "x": 230,
//                         "y": 210,
//                         "height": 80,
//                         "width": 240,
//                         "text": "now we included some style",
//                         "font": "deftone-stylus",
//                         "font_size": 34,
//                         "text_angle": 10,
//                         "text_color": "(0,0,0)",
//                         "text_stroke_width": 0
//                     }
//
//                 ]
//             }),
//
//             success: function (response) {
//
//                 const url = window.URL || window.webkitURL;
//                 const scripts = url.createObjectURL(response);
//                 $('#image').attr('scripts', scripts);
//
//
//             },
//             onerror: function (err) {
//                 console.log(err)
//             }
//         }
//     )
// }
// function caption(){
//     const settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://meme-generator-and-template-database.p.rapidapi.com/caption/Leonardo_Dicaprio_Cheers?tsize=44&bottom=There%20is%20also%20a%20useless%20bottom%20caption%20that%20you%20can%20go%20without&top=Thanks%20for%20trying%20out%20this%20meme%20generator&bsize=32&font=impact",
//         "method": "POST",
//         "headers": {
//             "content-type": "application/json",
//             "X-RapidAPI-Key": "41c6e9b985msh5b28da27525771ep154e00jsnb47295e86f2f",
//             "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
//         },
//         "processData": false,
//         "data": JSON.stringify( {
//             "top": {
//                 "text": "Thanks for trying out this meme generator",
//                 "text_align": "center",
//                 "font_size": 33,
//                 "font": "impact",
//                 "text_color": "(0,0,0)",
//                 "text_stroke_width": 0
//             },
//             "bot": {
//                 "text": "There is also a useless bottom caption that you can go without",
//                 "text_align": "center",
//                 "font_size": 33,
//                 "font": "impact",
//                 "text_color": "(0,0,0)",
//                 "text_stroke_width": 0
//             }
//         })
//     };
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//     });
//
// }
// function image2() {
//     $.ajax({
//         "async": true,
//         "crossDomain": true,
//         "url": "https://meme-generator-and-template-database.p.rapidapi.com/template/Bernie_I_Am_Once_Again_Asking_For_Your_Support",
//         "method": "POST",
//         "headers": {
//             "content-type": "application/json",
//             "X-RapidAPI-Key": "2466542789msh97987f1f4007d30p174d2bjsnba3f43783a4c",
//             "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
//         },
//         "xhrFields": {
//             "responseType": 'blob'
//         },
//         "processData": false,
//         "data": JSON.stringify({
//             "text0": {
//                 "text": "for your financial support",
//                 "font_size": 33,
//                 "font": "kanit"
//             },
//             "text1": {
//                 "text": "This API developer:",
//                 "font_size": 30
//             }
//         }),
//         success: function (data) {
//
//             const url = window.URL || window.webkitURL;
//             const src = url.createObjectURL(data);
//             $('#image2').attr('src', src);
//
//
//         }
//     });
// }
//
// function image3() {
//     $.ajax({
//         "async": true,
//         "crossDomain": true,
//         "url": "https://meme-generator-and-template-database.p.rapidapi.com/template/Advice_God",
//         "method": "POST",
//         "headers": {
//             "content-type": "application/json",
//             "X-RapidAPI-Key": "2466542789msh97987f1f4007d30p174d2bjsnba3f43783a4c",
//             "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
//         },
//         "xhrFields": {
//             "responseType": 'blob'
//         },
//         "processData": false,
//         "data": JSON.stringify({
//             "text0": {
//                 "text": "for your financial support",
//                 "font_size": 33,
//                 "font": "kanit"
//             },
//             "text1": {
//                 "text": "This API developer:",
//                 "font_size": 30
//             }
//         }),
//         success: function (data) {
//
//             const url = window.URL || window.webkitURL;
//             const src = url.createObjectURL(data);
//             $('#image3').attr('src', src);
//
//
//         }
//     });
// }
// function image4() {
//     $.ajax({
//         "async": true,
//         "crossDomain": true,
//         "url": "https://meme-generator-and-template-database.p.rapidapi.com/template/Angry_lady_cat",
//         "method": "POST",
//         "headers": {
//             "content-type": "application/json",
//             "X-RapidAPI-Key": "2466542789msh97987f1f4007d30p174d2bjsnba3f43783a4c",
//             "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
//         },
//         "xhrFields": {
//             "responseType": 'blob'
//         },
//         "processData": false,
//         "data": JSON.stringify({
//             "text0": {
//                 "text": "",
//                 "font_size": 33,
//                 "font": "impact"
//             },
//             "text1": {
//                 "text": "",
//                 "font_size": 30
//             }
//         }),
//         success: function (data) {
//
//             const url = window.URL || window.webkitURL;
//             const src = url.createObjectURL(data);
//             $('#image4').attr('src', src);
//
//
//         }
//     });
// }
// $.ajax({
//     url: "Bernie_I_Am_Once_Again_Asking_For_Your_Support.jpg",
//     xhrFields: {
//         responseType: 'blob'
//     },
//     success (data) {
//         console.log(data)
//         console.log(typeof data)
//         const url = window.URL || window.webkitURL;
//         const scripts = url.createObjectURL(data);
//         $('#myImage').attr('scripts', scripts);
//     }
// });
//
// const fileInput = document.getElementById('select-image');
//
// // Lister to the change event on the <input> element
// fileInput.addEventListener('change', (event) => {
//     // Get the selected image file
//     const imageFile = event.target.files[0];
//
//     console.log(imageFile)
//
//     if (imageFile) {
//         const reader = new FileReader();
//
//         // Convert the image file to a string
//         reader.readAsDataURL(imageFile);
//
//         // FileReader will emit the load event when the data URL is ready
//         // Access the string using result property inside the callback function
//         reader.addEventListener('load', () => {
//             // Get the data URL string
//             console.log(reader.result);
//         });
//     }
// });
// function search() {
//     const settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://meme-generator-and-template-database.p.rapidapi.com/search?searchString=cat",
//         "method": "GET",
//         "headers": {
//             "X-RapidAPI-Key": "41c6e9b985msh5b28da27525771ep154e00jsnb47295e86f2f",
//             "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
//         }
//     };
//
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//     });
// }
// function fonts(){
//     const settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://meme-generator-and-template-database.p.rapidapi.com/fonts",
//         "method": "GET",
//         "headers": {
//             "X-RapidAPI-Key": "41c6e9b985msh5b28da27525771ep154e00jsnb47295e86f2f",
//             "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
//         }
//     };
//
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//     });
// }

/* js */

function renderImagesList(data) {
    let wrapper = document.querySelector('#images')
    let counter = 0
    for (let item in data) {
        console.log(counter)
        if (counter===10) break
        let imgName = item,
            maxBoxes = data[item],
            imgItem = document.createElement('a')

        imgItem.setAttribute('href', `meme.html?meme=${imgName}&maxtextbox=${maxBoxes}`)
        imgItem.innerHTML = `
            <img data-image="${imgName}" class="gallery_img" src="assets/5089764.png">
        `
        wrapper.appendChild(imgItem)
        counter++
    }
    document.querySelectorAll('#images .gallery_img').forEach(img => {
        let imgName = img.getAttribute('data-image')
        console.log(imgName)
        setTimeout(function () {
            getImage(imgName, img)
        }, 1000)

    })
}
function getImagesNames() {
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://meme-generator-and-template-database.p.rapidapi.com/templates",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "41c6e9b985msh5b28da27525771ep154e00jsnb47295e86f2f",
            "X-RapidAPI-Host": "meme-generator-and-template-database.p.rapidapi.com"
        },
        success: function (response) {
            renderImagesList(response)
        },
        onerror: function (err) {
            console.log(err)
        }
    })
}

/* /js */
$(document).ready(function () {
    getImagesNames()
})

