const prepTags = document.querySelectorAll('.prepTag')
const prepLists = document.querySelectorAll('.containerPrepList')

prepTags.forEach(prepTag => {
   prepTag.addEventListener('touchmove', (ev) => {
    //    console.log('touch')
    var touchLocation = ev.targetTouches[0];
    prepTag.style.left = touchLocation.pageX + 'px'
    prepTag.style.left = touchLocation.pagey + 'px'
   })
})