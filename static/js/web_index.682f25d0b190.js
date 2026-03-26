var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    loop: true,
    loopAdditionalSlides: 1,
    watchSlidesProgress: true,
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.querySelectorAll('.index-video').forEach(element => {
    element.addEventListener('click', () => {
        swiper.autoplay.stop();
        const rawUrl = element && element.dataset && element.dataset.url;
        if (!rawUrl) return;
        let id = '';
        if (rawUrl.includes('v=')) {
            id = rawUrl.split('v=')[1].split('&')[0];
        } else {
            id = rawUrl.split('/').pop().split('?')[0];
        }
        if (!id) return;
        const modalContent = document.querySelector('#modalForVideo .modal-content');
        if (modalContent) {
            modalContent.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        }
    });
});

const modalEl = document.querySelector('#modalForVideo');
if (modalEl) {
    modalEl.addEventListener('hide.bs.modal', () => {
        const modalContent = document.querySelector('#modalForVideo .modal-content');
        if (modalContent) modalContent.innerHTML = '';
        swiper.autoplay.start();
    });
}

window.addEventListener('load', () => {
    let index_about = document.querySelector('.index-about-background');
    if (index_about && index_about.dataset && index_about.dataset.bgimg) {
        let bgimg = index_about.dataset.bgimg;
        const el = document.getElementsByClassName('index-about-background')[0];
        if (el) el.style.backgroundImage = `url(${location.origin + bgimg})`;
    }
});
