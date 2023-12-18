(() => {
    window.addEventListener("load", () => {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(item => {
        if(item.href === window.location.href) {
            item.classList.add("active");
        }
    });
})})();