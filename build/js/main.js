function showFormConfirmation(){
    var element = document.querySelector(".cyn-confirmation-form");
    element.classList.add("showBlock");
}

function scrollDown(){
    if (window.scrollY > 0) {
        document.body.classList.add("mod--scroll-down");
    }else {
        document.body.classList.remove("mod--scroll-down");
    }
}

function openMenu(){
    document.body.classList.toggle("mod--open-menu");
}

