//load all event listeners
loadEventListeners();


//press area of prep button
const areaBtn = document.getElementById('areaBtn').addEventListener('submit', (e) => {
    console.log(areaBtn);
});

// Back button 
const backBtn = document.getElementById('backBtn').addEventListener('submit', (e) => {

})

//add inventory tags from custom list

//define UI vars 
const form = document.querySelector('#prep-form');
const prepList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-preps');
const filter = document.querySelector('#filter');
const prepInput = document.querySelector('#prep');

//load all event listeners 
function loadEventListeners() {
    //add task event
    form.addEventListener('submit', addPrep);
}
//Add prep
function addPrep(e) {
    if(prepInput.value === '') {
        alert('Add a Prep');
    }

    e.preventDefault();
}


