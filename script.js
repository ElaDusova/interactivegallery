const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const caption = document.getElementById('caption');
const close = document.getElementById('close');
let page = 1;
let isFetching = false;

function displayImages(images) {
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.urls.small;
        img.alt = image.alt_description;
        img.title = `Autor: ${image.user.name}`;
        img.addEventListener('click', () => openModal(image));
        gallery.appendChild(img);
    });
}

function openModal(image) {
    modal.style.display = 'block';
    modalImg.src = image.urls.regular;
    caption.innerText = `Autor: ${image.user.name}`;
}

function closeModal() {
    modal.style.display = 'none';
}

close.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (modal.style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            // Předchozí obrázek
        } else if (event.key === 'ArrowRight') {
            // Další obrázek
        } else if (event.key === 'Escape') {
            closeModal();
        }
    }
});

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        fetchImages();
    }
});

// Načíst počáteční obrázky
fetchImages();
