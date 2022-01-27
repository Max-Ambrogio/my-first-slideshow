 
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

    //arrow controls
    document.onkeydown = checkKey;

        function checkKey(e) {

            e = e || window.event;

            if (e.keyCode == '38') {
                console.log("up arrow") 
            }
            else if (e.keyCode == '40') {
                console.log("down arrow")
            }
            else if (e.keyCode == '37') {
                doSlideTransitionBack()
                console.log("left arrow")
            }
            else if (e.keyCode == '39') {
                doSlideTransition()
                console.log("right arrow")
            }
        }

    //swipe controls
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;                                                        
    var yDown = null;

    function getTouches(evt) {
        return evt.touches ||      
        evt.originalEvent.touches; 
    }                                                     

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {  /*main swipes*/
            if ( xDiff > 0 ) {
                doSlideTransitionBack() /* left swipe */ 
            } else {
                doSlideTransition() /* right swipe */
            }                       
            } else {
            if ( yDiff > 0 ) {
                /* up swipe */ 
            } else { 
                /* down swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    };
}


makeSlideshow(".slideshow")

