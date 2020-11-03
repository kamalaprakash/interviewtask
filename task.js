
function Storelocal() {
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    console.log('form submitted', email);
    localStorage.setItem("email", email);
    localStorage.setItem("number", number);
    document.getElementById("emailState").innerHTML = localStorage.getItem("email");
    document.getElementById("numberState").innerHTML = localStorage.getItem("number");
}
function imgSearch() {
    var imgSearch = document.getElementById('imgSearch').value;
    if (imgSearch) {
      removeClass();
        document.getElementsByClassName("imgGallery")[0].classList.add("hideImage");
        document.getElementsByClassName("imgGallery")[0].classList.remove("enableImage");
        for(i=0;i<document.images.length; i++) {
        if(imgSearch===document.images[i].alt)
        {
            document.images[i].classList.add("visible-lg");
        }
    }
    }
    else if (imgSearch === "") {
        removeClass();
        document.getElementsByClassName("imgGallery")[0].classList.add("enableImage");
        document.getElementsByClassName("imgGallery")[0].classList.remove("hideImage");
    }
}
function clearImgSearch(){
    removeClass();
    document.getElementsByClassName("imgGallery")[0].classList.add("enableImage");
    document.getElementsByClassName("imgGallery")[0].classList.remove("hideImage");
}
function removeClass(){
        for (i = 0; i < document.getElementsByClassName('visible-lg').length; i++) {
        document.getElementsByClassName('visible-lg')[i].classList.remove('visible-lg');
    }
}