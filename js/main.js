const collapsiables = document.querySelectorAll(".collapsiable .collapsiable__header")
collapsiables.forEach(item => {
    item.onclick=function(){
        this.parentNode.classList.toggle("collapsiable--expanded")
    }
});