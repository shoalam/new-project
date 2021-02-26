const formInput = document.getElementById('form-control');
const button = document.querySelector('.todobtn');
const list = document.querySelector('.todolist');

// button.addEventListener('click', function(){
    
//     const newList = document.createElement('li');
//     newList.innerHTML = "Hello World";
//     list.appendChild(newList);
// })

const newList = document.createElement('li');
newList.innerHTML = formInput.value;
list.appendChild(newList);