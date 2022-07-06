const collapsiables = document.querySelectorAll(".collapsiable")
collapsiables.forEach(item => {
    item.onclick=function(){
        this.classList.toggle("collapsiable--expanded")
    }
});