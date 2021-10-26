const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

for(const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragOver);// элемент над placeholder
    placeholder.addEventListener('dragenter', dragEnter);// элемент на площади placeholder 
    placeholder.addEventListener('dragleave', dragLeave); // перетащили и вышли
    placeholder.addEventListener('drop', dragDrop);// отпустили
}

function dragStart(e) {
    e.target.classList.add('hold');
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0)
}

function dragEnd(e) {
    e.target.classList.remove('hold', 'hide');
}

function dragOver(e) {
    e.preventDefault();
    
}

function dragEnter(e) {
    e.target.classList.add('hovered');
    
}

function dragLeave(e) {
    e.target.classList.remove('hovered');
    
}

function dragDrop(e) {
    e.target.classList.remove('hovered');
    e.target.append(item);
    
}