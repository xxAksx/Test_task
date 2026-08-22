const modal = document.getElementById('modal-window');
const openButton = document.getElementById('create-button');
const closeButton = document.getElementById('modal-close');
const cancelButton = document.getElementById('modal-cancel');

function openModal() {
    modal.classList.remove('modal-window--disabled');
    modal.classList.add('modal-window--enabled');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closeModal() {
    modal.classList.remove('modal-window--enabled');
    modal.classList.add('modal-window--disabled');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
cancelButton.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('modal-window--enabled')) {
        closeModal();
    }
});
