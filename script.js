const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamicon = document.querySelector('.menu')
const mobilemenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamicon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toglgleAsideMenu)

function toggleDesktopMenu() {
    const asideMenuOpen = aside.classList.contains("inactive")

    if(!asideMenuOpen) {
        aside.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    const asideMenuOpen = aside.classList.contains("inactive")

    if (!asideMenuOpen){
        aside.classList.add("inactive")
    }
    mobilemenu.classList.toggle("inactive")
}

function toglgleAsideMenu() {
    const mobileMenuOpen = mobilemenu.classList.contains("inactive")
    const DesktopMenuOpen = desktopMenu.classList.contains("inactive")

    if (!mobileMenuOpen) {
        mobilemenu.classList.add("inactive")
    }

    if(!DesktopMenuOpen){
        desktopMenu.classList.add("inactive")
    }
    aside.classList.toggle("inactive")
}