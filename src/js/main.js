
let makeSlideshow = function(slideshowParentSelector){
    
    let slides = document.querySelectorAll(slideshowParentSelector + ' img')

    slides[0].classList.add('show')

    let slideIndex = 0

    let doSlideTransition = function() {
        slides[slideIndex].classList.remove('show')
        slideIndex++
        if (slideIndex === slides.length){
            slideIndex = 0
        }
        slides[slideIndex].classList.add('show')
    }

    let nextButton = document.querySelector('.next')

    nextButton.addEventListener('click' , function(){
        doSlideTransition()
    })

    let doSlideTransitionBack = function() {
        slides[slideIndex].classList.remove('show')
        slideIndex--;
        if (slideIndex < 0){
            slideIndex = slides.length - 1
        }
        slides[slideIndex].classList.add('show')
    }

    let prevButton = document.querySelector('.previous')

    prevButton.addEventListener('click' , function(){
        doSlideTransitionBack()
    })

}


makeSlideshow(".slideshow")

