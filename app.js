


//press area of prep button
// const areaBtn = document.getElementById('areaBtn').addEventListener('submit', (e) => {
    // console.log(areaBtn);
// });

// Back button 
// const backBtn = document.getElementById('backBtn').addEventListener('submit', (e) => {

// })

//add inventory tags from custom list

//define UI vars 
const form = document.querySelector('#prep-form');
const prepList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-preps');
const filter = document.querySelector('#filter');
const prepInput = document.querySelector('#prep');
// const customPrepAreaInput = document.getElementById('#customPrepAreaInput');
//drag n drop
// const draggables = document.querySelectorAll('.prepTag');
// const dropContainers = document.querySelectorAll('.containerPrepList');
const prepTags = document.getElementsByClassName('prepTag');




//load all event listeners
loadEventListeners();
//load all event listeners 
function loadEventListeners() {

prepTags.addEventListener('touchStart', f) ;
    //add task event
    // form.addEventListener('submit', addPrep);
    // //remove prep event
    // prepList.addEventListener('click', removePrep); 
    // //clear task event
    // clearBtn.addEventListener('click', clearPreps);
    // // filter prep
    // filter.addEventListener('keyup', filterPreps);
    // //add custom prep area 
    // customPrepAreaInput.addEventListener('submit', addCustomPrepArea);
    // draggables.addEventListener('touchmove',  dragFunction)


//add custom Prep Area function
// function addCustomPrepArea(e) {
//     if(customPrepAreaInput.value === '') {
//         alert('Add a custom prep area');
//     }

//     //create li element
//     const li = document.createElement('li');
//     //add class
//     li.className = 'collection-item';
//     //create text node and append li to it 
//     li.appendChild(document.createTextNode(prepInput.value));
// //create new link element
// const link = document.createElement('a');
// //Add class
// link.className = 'delete-item secondary-content';
// //add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';
// //append link to li
// li.appendChild(link);
// // append li to ul
// prepList.appendChild(li);
// //clear input
// prepInput.value = '';

//     e.preventDefault();
// }
//Add prep
function addPrep(e) {
    if(prepInput.value === '') {
        alert('Add a Prep');
    }
 //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node and append li to it 
    li.appendChild(document.createTextNode(prepInput.value));
//create new link element
const link = document.createElement('a');
//Add class
link.className = 'delete-item secondary-content';
//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
//append link to li
li.appendChild(link);
// append li to ul
prepList.appendChild(li);
//clear input
prepInput.value = '';

    e.preventDefault();
}
function removePrep(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?'))
        e.target.parentElement.parentElement.remove();
    }
}
function clearPreps() {
    while(prepList.firstChild) {
        prepList.removeChild(prepList.firstChild);
    }
}
//Filter preps
function filterPreps(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(prep){
        const item = prep.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            prep.style.display = 'block';
        } else {
            prep.style.display = 'none';
        }
    })
}


