const chosenMeme = get('meme') || ''
const maxBoxes = get('maxtextbox') || ''
function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}

function setData() {
    document.querySelector('#imageName').innerText = chosenMeme
}
$(document).ready(function () {
   setData()
})