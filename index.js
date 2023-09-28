
let toastBox = document.getElementById('toastBox');

let successMsg = "<i class='fa-solid fa-circle-check'></i>Operation successfull";
let errorMsg = "<i class='fa-solid fa-circle-xmark'></i>There was an error";
let invalidMsg = "<i class='fa-solid fa-circle-exclamation'></i>Invalid Operation";

function showToast(msg){

    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg
    toastBox.appendChild(toast);
}