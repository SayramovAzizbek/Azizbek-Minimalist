const siteHeader = document.querySelector("#site-header")
const siteNav = document.querySelector(".site-nav")
const navBtn = document.querySelector(".nav-open-btn")

const siteBody = document.querySelector("#site-body")

navBtn.addEventListener("click", function () {
    siteHeader.classList.toggle("site-nav-on")
    siteBody.classList.toggle("body-off")
}
)