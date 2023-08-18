const options = document.querySelector('.dropdown-options');
const iconDropdownlist = document.querySelector('.icon--dropdownlist');
const tfDropdownlist = document.querySelector('.tf-dropdownlist');
const listItem = document.querySelectorAll('li');
let isFocus = false;

iconDropdownlist.addEventListener('click', function(){
    options.classList.toggle('show-options');
    if(!isFocus){
        tfDropdownlist.focus();
        isFocus = true;
    }
    else {
        tfDropdownlist.blur();
        isFocus = false;
    }
});

listItem.forEach(item => {
    item.addEventListener('click', function(){
        tfDropdownlist.value = item.textContent;
        options.classList.remove('show-options');
    });
});