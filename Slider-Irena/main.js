const bannerSlideDuration = 5000 //unit:ms, adjust the time interval to see the next banner

const carousel = document.querySelector(".carousel")
const banners = Array.prototype.slice.call(carousel.children)
const prevBtn = document.querySelector(".hero-btn-left")
const nextBtn = document.querySelector(".hero-btn-right")

const indicatorWrap = document.querySelector(".indicator-wrapper")
const indicators = Array.prototype.slice.call(indicatorWrap.children)

let currentBannerIndex = 0,
    startDragging = false,
    startDragPosition,
    endDragPosition

let img = new Image();
img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='

prevBtn.addEventListener("click", changeFromBtn)
nextBtn.addEventListener("click", changeFromBtn)

for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", changeFromIndicator)
}

for (let i = 0; i < banners.length; i++) {
    banners[i].addEventListener("dragstart", dragStart, false)
    banners[i].addEventListener("dragend", dragEnd, false)

    banners[i].addEventListener("touchstart", dragStart, false)
    banners[i].addEventListener("touchend", dragEnd, false)
    banners[i].addEventListener("touchmove", touchMove, false)
}

setInterval(rotateBanner, bannerSlideDuration)

function slideRight(){
    if (currentBannerIndex <  banners.length - 1 ) {
        currentBannerIndex += 1 
    } else {
        currentBannerIndex = 0
    }
}

function slideLeft(){
    if (currentBannerIndex != 0) {
        currentBannerIndex -= 1
    } else {
        currentBannerIndex = banners.length -1
    }
}

function dragStart(e){
    if (e.type == "dragstart"){
        startDragging = true
        startDragPosition = e.clientX
        e.dataTransfer.setDragImage(img, 0, 0);
    } else {
        startDragPosition = e.touches[0].clientX
    }
}

function touchMove(e){
    startDragging = true
    endDragPosition = e.touches[0].clientX
}

function dragEnd(e){
    if (e.type == "dragend") endDragPosition = e.clientX
    if (startDragging){
        if (endDragPosition - startDragPosition < -50) {
            slideRight()
        } else if (endDragPosition - startDragPosition > 50) {
            slideLeft()
        }
        changeIndicator()
        setSlidePosition()
    }
    startDragging = false
}

function setSlidePosition(){
    carousel.style.transform = "translate(" + (currentBannerIndex * -window.innerWidth) + "px, 0)"
}

function changeFromBtn(e){
    let targetClass = Array.prototype.slice.call(e.target.classList)  

    if (targetClass.indexOf("hero-btn-left") == -1 ) {
        slideRight()
    } else {
        slideLeft()
    }
    changeIndicator()
    setSlidePosition()
}

function changeFromIndicator(e){
    currentBannerIndex = indicators.indexOf(e.target)
    changeIndicator()
    setSlidePosition()
}

function changeIndicator(){
    document.querySelector(".current").classList.toggle("current")
    indicators[currentBannerIndex].classList.toggle("current")
}

function rotateBanner(){
    slideRight()
    changeIndicator()
    setSlidePosition()
}