document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    // document ready
    console.log('Document ready!');
    var totalSlides = document.querySelectorAll('.slide').length;
    console.log('Total slides: '+totalSlides);
    window.addEventListener('keyup', switchSlide);
    function dataUpdate() {

    }
    function switchSlide(e) {
      // console.log('KeyCode = '+e.keyCode);
      if (e.keyCode == 39 || e.keyCode == 40){
        var shownSlides = document.getElementsByClassName('isShown');
        var currentSlide = shownSlides[0];
        var slideData = currentSlide.dataset;
        console.log('Shown slide number '+ slideData.slideorder +' with theme: "'+ slideData.slidetitle +'"');
        if (slideData.slideorder < totalSlides) {
          var nextSlide = document.getElementById('slide_'+(Number(slideData.slideorder)+1));
          currentSlide.classList.remove('isShown');
          nextSlide.classList.add('isShown');
          //update Icon
          var chapterIcon = nextSlide.dataset.iconclass;
          var slideIconEl = document.getElementsByClassName('binding-icon');
          var slideIcon = slideIconEl[0].querySelector('i');
          slideIcon.classList.add('onUpdate');
          setTimeout(function(){
            slideIcon.className = chapterIcon;
            slideIcon.classList.remove('onUpdate')
          }, 1500);
          //update Chapter
          var newChapter = nextSlide.dataset.slidetitle;
          var chapterEl = document.getElementsByClassName('binding-chapter');
          var chapter = chapterEl[0];
          var chapterNumber = document.getElementsByClassName('binding-chapter--number')[0];
          var chapterTitle = document.getElementsByClassName('binding-chapter--title')[0];
          chapter.classList.add('onUpdate');
          setTimeout(function(){
            chapterTitle.innerHTML = newChapter;
            if (nextSlide.dataset.slideorder<10) {
              var chapterNumberID = '0'+ nextSlide.dataset.slideorder;
            } else {
              var chapterNumberID = nextSlide.dataset.slideorder;
            }
            chapterNumber.innerHTML = chapterNumberID;
            chapter.classList.remove('onUpdate')
          }, 1500);
          console.log('Switch to slide '+(Number(slideData.slideorder)+1)+' from '+slideData.slideorder);
        } else {
          console.log('Slide "'+slideData.slidetitle+'" is last');
        }
      }
      if (e.keyCode == 37 || e.keyCode == 38){
        var shownSlides = document.getElementsByClassName('isShown');
        var currentSlide = shownSlides[0];
        var slideData = currentSlide.dataset;
        console.log('Shown slide number '+ slideData.slideorder +' with theme: "'+ slideData.slidetitle +'"');
        if (slideData.slideorder > 1) {
          var nextSlide = document.getElementById('slide_'+(Number(slideData.slideorder)-1));
          currentSlide.classList.remove('isShown');
          nextSlide.classList.add('isShown');
          //update Icon
          var chapterIcon = nextSlide.dataset.iconclass;
          var slideIconEl = document.getElementsByClassName('binding-icon');
          var slideIcon = slideIconEl[0].querySelector('i');
          slideIcon.classList.add('onUpdate');
          setTimeout(function(){
            slideIcon.className = chapterIcon;
            slideIcon.classList.remove('onUpdate')
          }, 1500);
          //update Chapter
          var newChapter = nextSlide.dataset.slidetitle;
          var chapterEl = document.getElementsByClassName('binding-chapter');
          var chapter = chapterEl[0];
          var chapterNumber = document.getElementsByClassName('binding-chapter--number')[0];
          var chapterTitle = document.getElementsByClassName('binding-chapter--title')[0];
          chapter.classList.add('onUpdate');
          setTimeout(function(){
            chapterTitle.innerHTML = newChapter;
            if (nextSlide.dataset.slideorder<10) {
              var chapterNumberID = '0'+ nextSlide.dataset.slideorder;
            } else {
              var chapterNumberID = nextSlide.dataset.slideorder;
            }
            chapterNumber.innerHTML = chapterNumberID;
            chapter.classList.remove('onUpdate')
          }, 1500);
          console.log('Switch to slide '+(Number(slideData.slideorder)-1)+' from '+slideData.slideorder);
        } else {
          console.log('Slide "'+slideData.slidetitle+'" is first');
        }
      }
    }
  }
};