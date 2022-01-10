const html = document.documentElement;
const canvas = document.getElementById("hero-apple");
const context = canvas.getContext("2d");
const animationContainer = document.querySelector(".animation-container")
const appleAnimationText = document.querySelector(".animation-apple-context")

const frameCount = 184; //ipad: 184, irma2:129


/*
case: if the animation is at the top
1. When start to scroll or when the element is fully shown at the screen, the image should be replaced.
2. if I want to animation to be finished within 200vh
? Can I know how much an element has been scrolled up?
? Can I get the size of an element?
*/

const currentFrame = (directory, index, ext) => (
  `${directory}${index.toString().padStart(3, '0')}.${ext}`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame("image3/ezgif-frame-",i,"jpg");
  }
};

const img = new Image()
img.src = currentFrame("image3/ezgif-frame-",1,"jpg");
console.log("height",img.getBoundingClientRect())
canvas.width=2844;//ipad: 2844, irma2: 1080
canvas.height=1508;//ipad: 1508, irma2: 1920
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame("image3/ezgif-frame-",index,"jpg");
  context.drawImage(img, 0, 0);
}


function startDogAnimation(entries, observer){
  console.log(entries[0].intersectionRatio)
  if (entries[0].intersectionRatio < 0.5) return
  console.log("startDog")
  window.addEventListener('scroll', () => {  
    const scrollTop = html.scrollTop;
    
    console.log("htmlscrolltop",scrollTop)
    console.log("animationmaxScrollheight",animationContainer.scrollHeight)

    const maxScrollTop = animationContainer.scrollHeight - window.innerHeight;
    if (scrollTop < maxScrollTop) canvas.style.top = `${scrollTop}px`

    console.log("maxScrollTop",maxScrollTop)
  
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount)
    );
  
    if ( frameIndex <= 74 && frameIndex > 0) {
      console.log("text")
      appleAnimationText.style.transform = `translate(-50%, -50%) scale(${(74 - frameIndex)/74})`
      appleAnimationText.style.top = `${window.innerHeight/2 + scrollTop}px`
      if (frameIndex > 50) {
        console.log(">50")
        appleAnimationText.style.opacity = `${Math.max(0,(15 - (frameIndex - 50)) / 24)}` 
      } else {
        appleAnimationText.style.opacity = "1"
      } 
    }
    console.log("frameIndex",frameIndex)
    
    requestAnimationFrame(() => updateImage(frameIndex + 1))
  });

}

let optionAnimation = {
  root:null,
  rootMargin:"0px",
  threshold: 0.5,
}

let optionContext = {
  root:null,
  rootMargin:"0px",
  threshold: 0.1,
}

let callback = (entries, observer) => {
  entries.forEach(entry => {
    console.log("target",entry.target)
    console.log("ratio",entry.intersectionRatio)
    console.log("rootbounds",entry.rootBounds)
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

let observeAnimation = new IntersectionObserver(startDogAnimation, optionAnimation)
// let observeContext = new IntersectionObserver(startDogAnimation, optionContext)

observeAnimation.observe(canvas)


preloadImages()
