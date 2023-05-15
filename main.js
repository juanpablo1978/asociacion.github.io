// declaro mis variables

const tabButtons = document.querySelectorAll('.actividades__tab');
const modalItems = document.querySelectorAll('.actividades__container a');
const closeModal = document.querySelectorAll(".main .modal__close");
//capturo el elemento que tiene el id galeria para manejar el evento click
const galeryItems = document.querySelectorAll('#galeria a');
const body = document.querySelector('body');
const closeButton = document.querySelectorAll(".close ");


// declaro mis funciones
const removeActiveElements = (selector)=>{
    const elementsActive = document.querySelectorAll(`.${selector}`)

    if (elementsActive.length) {
        
        elementsActive.forEach(elementsActive=>{
            elementsActive.classList.remove(selector);
        });
    }
}

modalItems.forEach( item =>{
    console.log(item);
    item.addEventListener('click', (e)=>{
        console.log('click en')
        body.classList.add('no-scroll');
    })
})


closeModal.forEach(item =>{

    item.addEventListener('click', (e)=>{
            body.classList.remove('no-scroll');
    })
})


// declaro mis eventos

// recorro la lista de nodos que me devuelve querySelectorAll y le agrego el evento click
galeryItems.forEach( item =>{
    console.log(item);
    item.addEventListener('click', (e)=>{
        console.log('click en')
        body.classList.add('no-scroll');
    })
})

closeButton.forEach(item =>{

        item.addEventListener('click', (e)=>{
                body.classList.remove('no-scroll');
        })
})





// Sección Actividades

tabButtons.forEach(tabButtons=>{
    tabButtons.addEventListener('click', (e)=>{
        e.preventDefault();

        if (!tabButtons.classList.contains('actividades__tab--active')) {

            const ArticleNumber = tabButtons.getAttribute('data-article')

            const articleShow = document.querySelector(`.actividades__article:nth-of-type(${ArticleNumber})`)
            
            removeActiveElements('actividades__article--active');
            removeActiveElements('actividades__tab--active');

            articleShow.classList.add('actividades__article--active');
            tabButtons.classList.add('actividades__tab--active');
        }
    })
});