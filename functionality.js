var iconChange = document.getElementById('burgur');
var getNavItems = document.getElementById('nav-items-id')
iconChange.addEventListener('click', function(e) {

    if (e.target.className === "fa-solid fa-bars")
    {
        e.target.className = "fa-solid fa-xmark"
        getNavItems.className = "nav-itemsactive"
    }
    else if (e.target.className === "fa-solid fa-xmark")
    {
        e.target.className = "fa-solid fa-bars";
        getNavItems.className = "nav-items"
    } 
})  