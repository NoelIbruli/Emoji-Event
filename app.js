const boy = document.querySelector('.closed');
const shit = document.querySelector('.open');

function addShit(){
    if(shit.classList.contains('open')){
        boy.classList.remove('active');
        shit.classList.add('active');
    }
}

function addBoy(){
    if(boy.classList.contains('closed')){
        boy.classList.add('active');
        shit.classList.remove('active');
    }
}

// Add event listener
boy.addEventListener('click', addShit);
shit.addEventListener('click', addBoy);